import os
import re
import shutil

# Intenta importar Pillow (PIL), si no está instalado, lo ignora
try:
    from PIL import Image
    PILLOW_AVAILABLE = True
except ImportError:
    PILLOW_AVAILABLE = False

# Obtener la ruta del directorio donde está el script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Paths
attachments_dir = "/home/camilosar/Documentos/Obsidian Vault"
posts_dir = os.path.join(script_dir, "../../src/pages/blog/")  
static_images_dir = os.path.join(script_dir, "../../images/")  

# Asegurar que el directorio de imágenes existe
os.makedirs(static_images_dir, exist_ok=True)

# Función para generar un alt basado en el nombre del archivo
def generate_alt_text(image_name):
    clean_name = re.sub(r'Pasted image \d+|[\d_]+', '', image_name)
    clean_name = re.sub(r'[-_]', ' ', clean_name)
    return clean_name.strip().title() or "Imagen sin descripción"

# Procesar cada archivo Markdown
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
            image_name, ext = os.path.splitext(image)  # Separar nombre y extensión
            webp_image = f"{image_name}.webp"  # Nombre del archivo WebP
            webp_path = os.path.join(static_images_dir, webp_image)

            if PILLOW_AVAILABLE and os.path.exists(image_source):
                try:
                    # Convertir a WebP si Pillow está disponible
                    with Image.open(image_source) as img:
                        img.convert("RGB").save(webp_path, "WEBP", quality=80)
                    markdown_image = f"![{alt_text}](/images/{webp_image})"
                except Exception as e:
                    print(f"Error al convertir {image}: {e}")
                    markdown_image = f"![{alt_text}](/images/{image})"
                    shutil.copy(image_source, static_images_dir)
            else:
                # Si Pillow no está disponible, copiar el PNG sin convertir
                markdown_image = f"![{alt_text}](/images/{image})"
                shutil.copy(image_source, static_images_dir)

            content = content.replace(f"[[{image}]]", markdown_image)

        # Guardar cambios en el Markdown
        with open(filepath, "w") as file:
            file.write(content)

print("Markdown files processed and images copied successfully.")
