# Laboratorio Virtual de Geociencias 🔬🌍

Bienvenido al repositorio del **Laboratorio Virtual de Geociencias**, una plataforma web desarrollada para la **Escuela de Petróleo y Gas de la Universidad Alonso de Ojeda (UNIOJEDA)**.

Este entorno virtual interactivo permite a estudiantes y profesores acceder de forma rápida y estructurada a recursos vitales para la ingeniería petrolera y las geociencias.

## 🚀 Características Principales

*   **Autenticación de Usuarios:** Sistema de inicio de sesión seguro gestionado a través de Supabase.
*   **Biblioteca de Recursos:** Acceso a una amplia colección de recursos organizados por áreas (Unidades Estratigráficas, Mapas Clásicos, Glosarios, Campos Petrolíferos, etc.).
*   **Lectura de Archivos Dinámica:** Los documentos y archivos se agrupan y estructuran usando mapeo de archivos JSON para permitir una carga asíncrona, rápida y eficiente.
*   **Panel Administrativo:** 
    *   **Gestión de Usuarios:** Permite al administrador listar, crear, editar y eliminar usuarios.
    *   **Dashboard Estadístico:** Tarjetas de información estilo *Bento Grid* que muestran en tiempo real la suma de usuarios totales, administradores, estudiantes y archivos indexados en la biblioteca.
*   **Diseño Premium y Responsivo:** Interfaz moderna (Glassmorphism), dinámica y adaptable a todo tipo de pantallas (móviles, tablets y PC), construida sobre TailwindCSS.

## 🛠️ Tecnologías Utilizadas

*   **Frontend:** HTML5, Vanilla JavaScript.
*   **Estilos y UI:** [TailwindCSS](https://tailwindcss.com/) (vía CDN), [FontAwesome](https://fontawesome.com/) (íconos) y [Google Fonts (Inter)](https://fonts.google.com/).
*   **Backend / BaaS:** [Supabase](https://supabase.com/) (Autenticación y base de datos relacional PostgreSQL para usuarios).

## 📂 Estructura del Proyecto

```text
├── index.html                 # Página de inicio de sesión (Login)
├── admin.html                 # Panel Administrativo
├── script.js                  # Lógica de inicio de sesión, Supabase y gestión de usuarios
├── README.md                  # Documentación del proyecto
└── sections/                  # Entorno del Laboratorio
    ├── index.html             # Vista principal de la biblioteca y visor de recursos
    ├── style.css              # Estilos personalizados (Glassmorphism, animaciones)
    ├── script.js              # Lógica de renderizado, filtrado y renderizado dinámico de archivos
    └── assets/                # Imágenes y repositorios JSON separados por áreas de estudio
        ├── 1-UNIDADES ESTRATIGRAFICAS/
        ├── 2-AFICHES, POSTERS/
        ├── 3-GLOSARIO DE ESTRUCTURAS/
        └── ...
```

## ⚙️ Uso y Configuración

Al ser un entorno basado en JavaScript Vanilla orientado a interactuar con APIs de terceros (Supabase), la ejecución es sencilla y directa.

1.  **Clona este repositorio o descárgalo:**
    ```bash
    git clone https://github.com/geocienciaslaboratorio-jpg/labvirtual-geociencias.git
    ```
2.  **Inicia el proyecto:**
    Puedes abrir directamente el archivo `index.html` en cualquier navegador web moderno, o utilizar un servidor local ligero como la extensión *Live Server* de Visual Studio Code para una mejor experiencia de desarrollo.
3.  **Supabase Client:**
    La conexión a la base de datos se inicializa en `script.js` con un cliente de Supabase instanciado por llaves (URL y Key). Asegúrate de manejar de forma segura y establecer variables de entorno de ser necesario si se despliega en plataformas en la nube.

## 👥 Roles de Acceso

*   **Administrador / Supervisor:** Tiene acceso total. Inicia sesión, interactúa con la biblioteca, y puede entrar en todo momento al Panel Administrativo para gestionar los roles de la base de datos.
*   **Estudiante / Viewer:** Tiene acceso exclusivo como consumidor al Laboratorio (`sections/index.html`). El sistema bloquea automáticamente su acceso al panel de control por motivos de seguridad.

## 🎓 Créditos

**Universidad Alonso de Ojeda (UNIOJEDA)** · Escuela de Petróleo y Gas.
Desarrollado para el fortalecimiento académico y uso interactivo en geociencias.

---
*Laboratorio Virtual GeoCiencias © 2026*
