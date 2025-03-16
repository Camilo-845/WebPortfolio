---
layout: ../../layouts/BlogLayout.astro
title: 3 Comandos divertidos de Linux que quizás no conozcas 🙃
description: Linux tiene una infinidad de comandos, aquí te voy los que para mi son más divertidos
tags:
  - linux
  - shell
  - funny
time: 3
featured: true
timestamp: 2025-03-15
filename: 3-Comandos-divertidos-de-Linux-que-quizás-no-conozcas
---

La terminal de comandos es una de las herramientas más poderosas y versátiles para cualquier usuario de Linux. Nos permite automatizar tareas, administrar sistemas y trabajar de manera eficiente sin necesidad de una interfaz gráfica. Sin embargo, no todo tiene que ser productividad y trabajo serio; la terminal también puede ser un espacio para la diversión.

A continuación, te presento tres comandos que pueden darle un toque más entretenido a tu experiencia en la línea de comandos.

## 1. cowsay: ¡Tu propia vaca parlante! 🐄
Si alguna vez quisiste que una vaca hablara en tu terminal, `cowsay` es el comando que necesitas. Este programa imprime un mensaje dentro de un bocadillo de diálogo, acompañado de una simpática vaca ASCII (o incluso otros personajes si instalas más diseños).

```sh
cowsay "¡Hola k ase!"
```
```
_______________  
< ¡Hola k ase! >  
---------------  
       \   ^__^  
        \  (oo)\_______  
           (__)\       )\/\  
               ||----w |  
               ||     ||
```

También puedes cambiar el personaje usando `-f`:
```sh
cowsay -f tux "¡Hola, soy Tux!"
```
```
__________________  
< ¡Hola, soy Tux! >  
------------------  
  \  
   \  
       .--.  
      |o_o |  
      |:_/ |  
     //   \ \  
    (|     | )  
   /'\_   _/`\  
   \___)=(___/
```

## 2. fortune: Mensajes de sabiduría (o humor) 📜
`fortune` es un comando que muestra frases aleatorias de una base de datos de citas, refranes, chistes y más. Si quieres empezar el día con una frase inspiradora (o absurda), este es el comando indicado.
### Uso básico
```sh
fortune
```
```
The past always looks better than it was.  It's only pleasant because  
it isn't here.  
               -- Finley Peter Dunne (Mr. Dooley)
```

Y si combinas `fortune` con `cowsay`, ¡obtienes una vaca sabia!
```sh
fortune | cowsay
```
```
________________________________________  
/ Pray to God, but keep rowing to shore. \  
|                                        |  
\ -- Russian Proverb                     /  
----------------------------------------  
       \   ^__^  
        \  (oo)\_______  
           (__)\       )\/\  
               ||----w |  
               ||     ||
```

## 3. lolcat: Colores para alegrar tu terminal 🌈
Si quieres darle más vida a tu terminal, `lolcat` es el comando perfecto. Toma la salida de otro comando y la muestra con un efecto de arcoíris.

```sh
echo "¡Hola k ase!" | lolcat
```
```
¡Hola k ase!

```
Tal vez no se vea desde este blog, pero ve a probarlo en tu terminal, te aseguro que saldrá de colores

Puedes combinarlo con `cowsay` y `fortune` para una experiencia terminal psicodélica:
```sh
fortune | cowsay | lolcat
```
```
_______________________________________  
/ Dustin Farnum: Why, yesterday, I had  \  
| the audience glued to their seats!    |  
| Oliver Herford: Wonderful! Wonderful! |  
| Clever of you to think of it!         |  
|                                       |  
\ -- Brian Herbert, "Classic Comebacks" /  
---------------------------------------  
       \   ^__^  
        \  (oo)\_______  
           (__)\       )\/\  
               ||----w |  
               ||     ||
```
---

Estos comandos no solo hacen que la terminal sea más entretenida, sino que también pueden sorprender a tus amigos o hacer más llevadero tu día a día en Linux. ¡Pruébalos y diviértete en la línea de comandos! 🚀

