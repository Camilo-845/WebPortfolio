#!/bin/bash
set -euo pipefail

# Change to the script's directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Define synchronization function
sync_folders() {
    local sourcePath="$1"
    local destinationPath="$2"
    local name="$3"

    # Verificar si la carpeta de origen existe
    if [ ! -d "$sourcePath" ]; then
        echo "❌ Source path does not exist: $sourcePath"
        exit 1
    fi

    # Verificar si la carpeta de destino existe
    if [ ! -d "$destinationPath" ]; then
        echo "❌ Destination path does not exist: $destinationPath"
        exit 1
    fi

    # Si el origen está vacío, copiar los archivos desde el destino
    if [ -z "$(ls -A "$sourcePath")" ]; then
        echo "⚠️  Source path is empty, restoring from destination..."
        rsync -av "$destinationPath/" "$sourcePath/"
    fi

    # Sincronizar sin crear subcarpeta extra
    rsync -av --delete "$sourcePath/" "$destinationPath/"
    echo "✅ $name synced successfully!"
}

# Set variables for Obsidian to Astro
sourcePathProjects="/home/camilosar/Documentos/Obsidian Vault/00 - Portfolio/projects"
destinationPathProjects="$SCRIPT_DIR/../../src/pages/projects"

sourcePathBlog="/home/camilosar/Documentos/Obsidian Vault/00 - Portfolio/blog"
destinationPathBlog="$SCRIPT_DIR/../../src/pages/blog"

echo "🔄 Syncing Obsidian Vault to Astro..."

# Sync projects
sync_folders "$sourcePathProjects" "$destinationPathProjects" "Projects"

# Sync blog
sync_folders "$sourcePathBlog" "$destinationPathBlog" "Blog"
