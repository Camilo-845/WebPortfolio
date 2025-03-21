# Habilitar salida en caso de errores
$ErrorActionPreference = "Stop"

# Obtener la ruta del script actual
$SCRIPT_DIR = Split-Path -Parent $MyInvocation.MyCommand.Definition

# Definir modo de sincronización (por defecto: push)
$MODE = $args[0]
if (-not $MODE) { $MODE = "push" }

# Función para sincronizar carpetas
function Sync-Folders {
    param (
        [string]$sourcePath,
        [string]$destinationPath,
        [string]$name
    )

    if ($MODE -eq "pull") {
        # Intercambiar source y destination en modo pull
        $temp = $sourcePath
        $sourcePath = $destinationPath
        $destinationPath = $temp
    }

    # Verificar que los directorios existen
    if (-Not (Test-Path $sourcePath -PathType Container)) {
        Write-Host "❌ El directorio fuente no existe: $sourcePath" -ForegroundColor Red
        exit 1
    }

    if (-Not (Test-Path $destinationPath -PathType Container)) {
        Write-Host "❌ El directorio destino no existe: $destinationPath" -ForegroundColor Red
        exit 1
    }

    # Sincronizar archivos (usando robocopy en Windows)
    robocopy $sourcePath $destinationPath /E /PURGE

    Write-Host "✅ $name sincronizado correctamente! (Modo: $MODE)" -ForegroundColor Green
}

# Definir rutas
$sourcePathProjects = "C:\Users\Usuario\Documents\Obsidian Vault\00 - Portfolio\projects"
$destinationPathProjects = "$SCRIPT_DIR\..\..\src\pages\projects"

$sourcePathBlog = "C:\Users\Usuario\Documents\Obsidian Vault\00 - Portfolio\blog"
$destinationPathBlog = "$SCRIPT_DIR\..\..\src\pages\blog"

Write-Host "🔄 Iniciando sincronización ($MODE mode)..." -ForegroundColor Cyan

# Sincronizar proyectos
Sync-Folders $sourcePathProjects $destinationPathProjects "Projects"

# Sincronizar blog
Sync-Folders $sourcePathBlog $destinationPathBlog "Blog"
