# 🚀 Portfolio Profesional - Showcase DAM

> **Showcase personal** desarrollado como parte del reto de la Situación de Aprendizaje (SdA) para el Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM).

![Estado del Proyecto](https://img.shields.io/badge/Estado-Terminado-green)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

## 🌐 Demo en Vivo

Puedes ver el proyecto desplegado y funcionando aquí:
👉 **[VER PORTFOLIO ONLINE](https://portfolio-profesional-taupe.vercel.app/)**

---

## 📄 Descripción

Este proyecto es una **Landing Page tipo Portfolio** diseñada para mostrar de manera rápida y efectiva mis competencias técnicas, proyectos destacados y formas de contacto.

El objetivo principal es ofrecer una experiencia de usuario (UX) fluida, con un diseño moderno y una arquitectura de código limpia, demostrando habilidades en desarrollo Frontend con **React**.

### ✨ Características Principales
* **Diseño Responsivo:** Adaptado perfectamente a Móvil, Tablet y Escritorio.
* **Estilo Glassmorphism:** Interfaz moderna con efectos de cristal y gradientes.
* **Componentes Reutilizables:** Arquitectura modular (`Hero`, `Skills`, `Projects`, `Contact`).
* **Descarga de CV:** Integración directa para visualizar/descargar el currículum en PDF.
* **Datos Separados:** Toda la información se carga desde un archivo `profile.js` para facilitar el mantenimiento.

---

## 🛠️ Tecnologías Usadas

* **Core:** [React JS](https://reactjs.org/) (v18)
* **Build Tool:** [Vite](https://vitejs.dev/) (para un entorno de desarrollo ultrarrápido)
* **Estilos:** CSS3 Nativo (CSS Variables, Flexbox, Grid, Media Queries)
* **Despliegue:** [Vercel](https://vercel.com/)
* **Control de Versiones:** Git & GitHub

---

## 📸 Capturas de Pantalla

### Vista de Escritorio
<img width="2849" height="1158" alt="Captura de pantalla 2026-02-03 104917" src="https://github.com/user-attachments/assets/d7d819da-76b4-4ff9-b490-6d9336b48c2b" />


### Vista Móvil
<img width="1080" height="1829" alt="image" src="https://github.com/user-attachments/assets/cc90ec9e-726e-4e44-88f2-6fabdc6962c9" />


## 📂 Estructura del Proyecto

El proyecto sigue la estructura estándar de React con Vite, organizando los componentes y recursos de forma clara:

```text
├── public/              # Archivos públicos estáticos
│   ├── cv.pdf           # Currículum vitae descargable
│   ├── foto.png         # Foto de perfil
│   └── vite.svg         # Icono del proyecto
├── src/
│   ├── assets/          # Recursos estáticos del código (logos, iconos)
│   ├── components/      # Componentes de la interfaz
│   │   ├── Contact.jsx  # Sección de contacto
│   │   ├── Hero.jsx     # Sección principal (Perfil y CV)
│   │   ├── Projects.jsx # Listado de proyectos
│   │   └── Skills.jsx   # Listado de habilidades
│   ├── data.js          # Archivo de datos (Info del perfil, textos, links)
│   ├── App.css          # Estilos principales de la aplicación
│   ├── index.css        # Estilos globales y reset
│   ├── App.jsx          # Componente principal que une las secciones
│   └── main.jsx         # Punto de entrada de React
├── index.html           # HTML base
└── vite.config.js       # Configuración de Vite
