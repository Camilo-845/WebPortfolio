# Define synchronization function
function Sync-Folders {
    param (
        [string]$sourcePath,
        [string]$destinationPath,
        [string]$name
    )

    # Verificar si la carpeta de origen existe
    if (!(Test-Path $sourcePath -PathType Container)) {
        Write-Host "❌ Source path does not exist: $sourcePath"
        exit 1
    }

    # Verificar si la carpeta de destino existe
    if (!(Test-Path $destinationPath -PathType Container)) {
        Write-Host "❌ Destination path does not exist: $destinationPath"
        exit 1
    }

    # Si el origen está vacío, copiar desde el destino
    if (!(Get-ChildItem -Path $sourcePath)) {
        Write-Host "⚠️ Source path is empty, restoring from destination..."
        robocopy "$destinationPath" "$sourcePath" /E
    }

    # Sincronizar sin crear subcarpeta extra
    robocopy "$sourcePath" "$destinationPath" /MIR
    Write-Host "✅ $name synced successfully!"
}

# Definir las rutas de los directorios
$sourcePathProjects = "C:\Users\camilosar\Documents\Obsidian Vault\00 - Portfolio\projects"
$destinationPathProjects = "$PSScriptRoot\..\src\pages"

$sourcePathBlog = "C:\Users\camilosar\Documents\Obsidian Vault\00 - Portfolio\blog"
$destinationPathBlog = "$PSScriptRoot\..\src\pages"

Write-Host "🔄 Syncing Obsidian Vault to Astro..."

# Sincronizar proyectos
Sync-Folders $sourcePathProjects $destinationPathProjects "Projects"

# Sincronizar blog
Sync-Folders $sourcePathBlog $destinationPathBlog "Blog"
