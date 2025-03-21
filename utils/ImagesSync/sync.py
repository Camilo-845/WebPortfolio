import os
import re
import shutil
import sys

# Intenta importar Pillow (PIL), si no está instalado, lo ignora
try:
    from PIL import Image
    PILLOW_AVAILABLE = True
except ImportError:
    PILLOW_AVAILABLE = False

# Obtener la ruta del directorio donde está el script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Modo de sincronización: push (por defecto) o pull
MODE = sys.argv[1] if len(sys.argv) > 1 else "push"

# Paths
attachments_dir = "/home/camilosar/Documentos/Obsidian Vault/00 - Portfolio/images"  # Directorio de imágenes en Obsidian
local_obsidian_vault_posts_dir = "/home/camilosar/Documentos/Obsidian Vault/00 - Portfolio/blog"  # Directorio de posts en Obsidian
posts_dir = os.path.join(script_dir, "../../src/pages/blog/")  # Directorio de posts en Astro
static_images_dir = os.path.join(script_dir, "../../images/")  # Directorio de imágenes en Astro

# Asegurar que los directorios existen
os.makedirs(static_images_dir, exist_ok=True)
os.makedirs(attachments_dir, exist_ok=True)

# Función para generar un alt basado en el nombre del archivo
def generate_alt_text(image_name):
    clean_name = re.sub(r'Pasted image \d+|[\d_]+', '', image_name)
    clean_name = re.sub(r'[-_]', ' ', clean_name)
    return clean_name.strip().title() or "Imagen sin descripción"

# Función para procesar imágenes en modo push
def process_images_push():
    for filename in os.listdir(posts_dir):
        if filename.endswith(".md"):
            filepath = os.path.join(posts_dir, filename)
            
            with open(filepath, "r") as file:
                content = file.read()
            
            # Buscar imágenes en formato Obsidian ![[imagen.png]]
            images = re.findall(r'\[\[([^]]*\.png)\]\]', content)
            
            for image in images:
                alt_text = generate_alt_text(image)
                image_source = os.path.join(attachments_dir, image)
                image_name, ext = os.path.splitext(image)
                webp_image = f"{image_name}.webp"
                webp_path = os.path.join(static_images_dir, webp_image)

                if PILLOW_AVAILABLE and os.path.exists(image_source):
                    try:
                        with Image.open(image_source) as img:
                            img.convert("RGB").save(webp_path, "WEBP", quality=80)
                        markdown_image = f"[{alt_text}](/images/{webp_image})"
                    except Exception as e:
                        print(f"Error al convertir {image}: {e}")
                        markdown_image = f"[{alt_text}](/images/{image})"
                        shutil.copy(image_source, static_images_dir)
                else:
                    markdown_image = f"[{alt_text}](/images/{image})"
                    shutil.copy(image_source, static_images_dir)

                content = content.replace(f"[[{image}]]", markdown_image)

            with open(filepath, "w") as file:
                file.write(content)

    print("✅ Markdown files updated with WebP images (Push Mode).")

# Función para procesar imágenes en modo pull (sin cambiar links)
def process_images_pull():
    for image in os.listdir(static_images_dir):
        image_source = os.path.join(static_images_dir, image)
        image_dest = os.path.join(attachments_dir, image)

        if os.path.exists(image_source):
            shutil.copy(image_source, image_dest)

    print("✅ Images copied back to Obsidian (Pull Mode).")

# Ejecutar la sincronización según el modo seleccionado
if MODE == "push":
    process_images_push()
elif MODE == "pull":
    process_images_pull()
else:
    print("❌ Error: Modo no válido. Usa 'push' o 'pull'.")
