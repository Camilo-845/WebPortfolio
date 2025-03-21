#!/bin/bash
set -euo pipefail

# Change to the script's directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Determine sync direction
MODE="${1:-push}" # Default to "push" if not specified

# Define synchronization function
sync_folders() {
    local sourcePath="$1"
    local destinationPath="$2"
    local name="$3"

    if [ "$MODE" == "pull" ]; then
        # Swap source and destination for pull mode
        local temp="$sourcePath"
        sourcePath="$destinationPath"
        destinationPath="$temp"
    fi

    # Verify source directory exists
    if [ ! -d "$sourcePath" ]; then
        echo "❌ Source path does not exist: $sourcePath"
        exit 1
    fi

    # Verify destination directory exists
    if [ ! -d "$destinationPath" ]; then
        echo "❌ Destination path does not exist: $destinationPath"
        exit 1
    fi

    # If source is empty, restore from destination (only applies in push mode)
    if [ "$MODE" == "push" ] && [ -z "$(ls -A "$sourcePath")" ]; then
        echo "⚠️  Source path is empty, restoring from destination..."
        rsync -av "$destinationPath/" "$sourcePath/"
    fi

    # Sync without creating extra subfolder
    rsync -av --delete "$sourcePath/" "$destinationPath/"
    echo "✅ $name synced successfully! (Mode: $MODE)"

    # Convert image links after sync
    convert_image_links "$destinationPath"
}

# Convert image links in Markdown files
convert_image_links() {
    local folderPath="$1"

    if [ "$MODE" == "pull" ]; then
        echo "🔄 Converting Astro image links to Obsidian format in: $folderPath"
        find "$folderPath" -type f -name "*.md" | while read -r file; do
            sed -i -E 's/!\[[^]]*\]\(\/images\/([^)]*)\)/![[\1]]/g' "$file"
        done
    fi
}

# Set paths for Obsidian <-> Astro
sourcePathProjects="/home/camilosar/Documentos/Obsidian Vault/00 - Portfolio/projects"
destinationPathProjects="$SCRIPT_DIR/../../src/pages/projects"

sourcePathBlog="/home/camilosar/Documentos/Obsidian Vault/00 - Portfolio/blog"
destinationPathBlog="$SCRIPT_DIR/../../src/pages/blog"

echo "🔄 Syncing ($MODE mode)..."

# Sync projects
sync_folders "$sourcePathProjects" "$destinationPathProjects" "Projects"

# Sync blog
sync_folders "$sourcePathBlog" "$destinationPathBlog" "Blog"
