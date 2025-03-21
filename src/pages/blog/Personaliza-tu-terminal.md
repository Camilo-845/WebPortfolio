---
layout: ../../layouts/BlogLayout.astro
title: 🚀 Personaliza tu terminal y dale un toque épico a tu flujo de trabajo
description: Tu terminal no tiene por qué ser aburrida. 🎨 Con unos cuantos ajustes y herramientas como Zsh, Oh My Zsh y Powerlevel10k, puedes convertirla en una experiencia visual y funcional única. Descubre cómo darle estilo y potencia a tu terminal en este post
tags:
  - terminal
  - linux
  - zsh
  - command-line
  - styles
time: 7
featured: true
timestamp: 2025-03-21
filename: Personaliza-tu-terminal
---
![Terminal Personalizada Zsh Konsole.Png](/images/terminal-personalizada-zsh-konsole.webp)
## 🖥️ ¡Haz que tu terminal luzca increíble!

La terminal es una de las herramientas principales para cualquier desarrollador. Muchos la usamos desde la terminal integrada de **VS Code** u otros editores, pero el emulador de terminal nativo es una joya que vale la pena personalizar.

En la mayoría de distribuciones Linux, las terminales varían desde opciones básicas hasta algunas más estilizadas, como la de **Kali Linux**, que personalmente me encanta. Pero, en mi distro actual, **Fedora KDE Plasma**, el estilo por defecto no es igual de atractivo.

Así como personalizamos nuestro editor de código para hacerlo más cómodo y eficiente, también podemos hacer lo mismo con la terminal. Hoy te mostraré cómo tengo configurada la mía y cómo puedes hacer lo mismo.

---

## ⚙️ **El emulador de terminal que uso**

Actualmente uso **Konsole**, el emulador de terminal predeterminado en Fedora KDE Plasma. Nunca lo he cambiado porque me acostumbré a sus características:

✅ División de terminales (horizontal y vertical)  
✅ Múltiples pestañas  
✅ Comandos personalizados  
✅ Perfiles configurables

Existen alternativas como **Kitty** o **Warp**, pero la elección es totalmente personal. ¡Usa la que más te guste!

![Konsoleterminalnostylized.Png](/images/konsole_terminal_no_stylized.webp)

---

## 🐚 **El shell que uso: Zsh en lugar de Bash**

Cuando abrimos un emulador de terminal, accedemos a un **shell**, que no es más que un intérprete de comandos para interactuar con el sistema. La mayoría de las distros usan **Bash** por defecto, pero hay otras opciones como **Sh, Fish** y **Zsh**.

Yo uso **Zsh** porque permite personalizarlo más fácilmente con **Oh My Zsh**.
### 🔧 **Instalación de Zsh**

Para instalar Zsh en Fedora:

bash

CopiarEditar

```
sudo dnf install zsh -y chsh -s $(which zsh)  # Cambiar el shell predeterminado a Zsh
```

Después de instalarlo, cierra la sesión o reinicia tu equipo para aplicar los cambios.

---

## 🎨 **Oh My Zsh: el framework que hace la magia**

[Oh My Zsh](https://ohmyz.sh/) es un framework que facilita la configuración de **Zsh** con temas, plugins y opciones avanzadas.

### 📌 **Instalación de Oh My Zsh**

Ejecuta este comando:

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

🔹 Esto instalará Oh My Zsh y cambiará tu configuración de Zsh automáticamente.

![Oh My Zsh Installation.Png](/images/Oh-My-Zsh-installation.webp)
> Imagen tomada de https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
---

## 💎 **Powerlevel10k: un tema épico para tu terminal**

Para mejorar aún más la apariencia, uso **Powerlevel10k**, un tema increíblemente personalizable para Zsh.

### 🛠️ **Instalación de Powerlevel10k**

Clona el repositorio
```
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k"
```

Edita la el archivo de configuración de zsh `~/.zshrc`
```
nano ~/.zshrc
```

Busca la variable `ZSH_THEME`, y cambia el valor a `"powerlevel10k/powerlevel10k"`

Al reiniciar la terminal, Powerlevel10k iniciará su asistente de configuración. Sigue las instrucciones para personalizarlo según tu estilo.

![Configuration Powerlevelk.Png](/images/Configuration-PowerLevel10k.webp)

---

## 🎨 **Colores con Gogh y fuentes Nerd Font**

Para completar la personalización, uso **Gogh**, una herramienta que facilita la instalación de esquemas de colores para la terminal.

### 🎨 **Instalar esquemas de color con Gogh**

Ejecuta este comando en tu terminal:

```
bash -c "$(wget -qO- https://git.io/vQgMr)"
```

Luego, selecciona un esquema de color que te guste y aplícalo.

También es importante usar una **Nerd Font** para que Powerlevel10k renderice correctamente los íconos. Puedes descargar una desde [Nerd Fonts](https://www.nerdfonts.com/) e instalarla en tu sistema.

### 🔥 Mis Temas Favoritos de Gogh
#### Synthwave Alpha

![Gogh Personalizaed Theme.Png](/images/Gogh-personalizaed-theme.webp)
#### ACI
![Aci Gogh Theme.Png](/images/ACI-Gogh-theme.webp)
#### Toy chest
![Toy Chist Gogh Theme.Png](/images/Toy-chist-Gogh-theme.webp)
#### Ic Orange Ppl
![Ic Orange Ppl Gogh Theme.Png](/images/Ic-Orange-Ppl-Gogh-theme.webp)
#### Belafonte Day
![Belafonte Gay Gogh Theme.Png](/images/belafonte-gay-gogh-theme.webp)

### 💡Tip Adicional
Para mejorar el tema que elegiste de Gogh ve a la configuración de tema de perfil de tu emulador de consola y sube la transparencia, eso le va a dar un mejor toque a tu terminal

Con estos pasos, ahora tienes una terminal personalizada, con un estilo único y adaptada a tus necesidades. Puedes seguir explorando plugins de Oh My Zsh, cambiar colores y ajustar cada detalle para hacerla aún más funcional

## Referencias
Si quieres conocer más de del estilizado o inspeccionar mejor las opciones de instalación revisa

- [Installing ZSH](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)
- [Installing Oh My Zsh](https://ohmyz.sh/)
- [PowerLevel10k](https://github.com/romkatv/powerlevel10k?tab=readme-ov-file#configuration)
- [NerFont](https://www.nerdfonts.com/font-downloads)
- [Gogh-themes](https://github.com/Gogh-Co/Gogh)