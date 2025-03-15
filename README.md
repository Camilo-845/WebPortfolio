# 🌐 WEB PORTFOLIO

![Portfolio Camilo Sarmiento Image](images/README.png)

> Web Portfolio by **Camilo Sarmiento**, based on Astro template [Zaggonaut](https://github.com/RATIU5/zaggonaut) 🚀

## 🚀 Getting Started

[🔗 View the demo](https://camilosar.site) | [🗂 View the source code](https://github.com/Camilo-845/WebPortfolio)

Alternatively, you can create a new Astro project with Zaggonaut using:

```bash
# 🚀 pnpm
pnpm create astro@latest -- --template RATIU5/zaggonaut

# 🚀 pnpm (alternative)
pnpm create astro@latest --template RATIU5/zaggonaut

# 🚀 yarn
yarn create astro --template RATIU5/zaggonaut

# 🚀 bun
bun create astro@latest -- --template RATIU5/zaggonaut
```

---

## ✨ Features

✅ Dark & light mode  
✅ Customizable colors 🎨  
✅ 100 / 100 Lighthouse score ⚡  
✅ Fully accessible ♿  
✅ Fully responsive 📱  
✅ Type-safe 🛡️  
✅ SEO-friendly 🔍  

---

## 🎨 Customization

The theme is set up to be easy to customize.

### 🎨 Colors

You can customize the theme colors by editing `src/styles/global.css`.  
This file uses **Tailwind CSS** and **CSS variables** to define colors:

```css
:root {
  --color-zag-dark: #1a1a1a;
  --color-zag-light: #ffffff;
  --color-zag-dark-muted: rgba(26, 26, 26, 0.8);
  --color-zag-light-muted: rgba(255, 255, 255, 0.8);
  --color-zag-accent-light: #ff9800;
  --color-zag-accent-light-muted: rgba(255, 152, 0, 0.8);
  --color-zag-accent-dark: #ff5722;
  --color-zag-accent-dark-muted: rgba(255, 87, 34, 0.8);
}
```

### 🏝️ Text

Customize the text content by editing `src/lib/variables.ts`.  
For example, to set your username:

```typescript
export const GLOBAL = {
  // Site metadata
  username: "camilosar-123",

  // Profile image
  profileImage: "profile.webp",

  // Menu items
  menu: {
    home: "/",
    projects: "/projects",
    blog: "/blog",
  }
};
```

---

## 🛠️ Skills and Icons

You can customize your **skills icons** by adding `.svg` files to the **`src/icons`** folder.

In `variables.ts`, specify the SVG filename like this:

```typescript
export const GLOBAL = {
  // 🏆 Skills content
  skills: [
    { name: "HTML", icon: "html_icon" },
  ],
};
```

**If you don't provide an `icon`, no problem!** A default icon will be used.  

> [!CAUTION]
> If you are running the project while changing icons, you may encounter issues.  
> **Restart the run command** to see your changes. 🔄  

## 🔄 Sync Projects and Blog content with an Obsidian Vault

You can synchronize your **Obsidian Vault** with your Astro project to keep your **projects** and **blog** content up to date.

The sync scripts are located in `utils/ObsidianSync/`:

- **Linux/macOS**: `sync.sh`
- **Windows**: `sync.ps1`

### ⚙️ Configuration

Before running the script, you need to update the **source** and **destination** paths in the respective script.

#### 🐧 Linux/macOS (`sync.sh`)

Open `utils/ObsidianSync/sync.sh` and update these variables:

```bash
# Change these paths to match your setup
sourcePathProjects="$HOME/Documentos/Obsidian Vault/00 - Portfolio/projects"
destinationPathProjects="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/../../src/pages/projects"

sourcePathBlog="$HOME/Documentos/Obsidian Vault/00 - Portfolio/blog"
destinationPathBlog="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/../../src/pages/blog"
```

#### 🖥 Windows (`sync.ps1`)

Open `utils/ObsidianSync/sync.ps1` and update these variables:

```powershell
# Change these paths to match your setup
$sourceProjects = "C:\Users\YourUser\Documents\Obsidian Vault\00 - Portfolio\projects"
$destinationProjects = "$PSScriptRoot\..\..\src\pages\projects"

$sourceBlog = "C:\Users\YourUser\Documents\Obsidian Vault\00 - Portfolio\blog"
$destinationBlog = "$PSScriptRoot\..\..\src\pages\blog"
```

### 🚀 Running the Sync Script

#### **Linux/macOS**

Run the script from the project root:

```bash
bash utils/ObsidianSync/sync.sh
```

#### **Windows**

Run the script in PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File utils/ObsidianSync/sync.ps1
```
