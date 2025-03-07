# South Park App

South Park App es una aplicación web creada para los fans de la serie **South Park**. La aplicación permite visualizar la lista de episodios, ver detalles de cada uno y gestionar usuarios a través de un sistema de autenticación. Se desarrolló utilizando **React** y **TypeScript** con **Vite** como herramienta de construcción, lo que garantiza un rendimiento óptimo y una experiencia de usuario moderna.

-   [Demo Link](https://southpark-danielpz.netlify.app)

## Características

-   **Listado de episodios:** Muestra un listado completo de episodios con opción de ver detalles individuales.
-   **Autenticación de usuarios:** Sistema de login para acceder a rutas y funcionalidades protegidas.
-   **Rutas protegidas:** Gestión de rutas públicas y privadas, mejorando la seguridad y la experiencia.
-   **Diseño responsivo y temático:** Uso de un sistema de temas y estilos globales implementados con **Emotion**.
-   **Componentes reutilizables:** Desarrollo de componentes personalizados (como TextField, Typography y YellowButton) para facilitar la construcción y mantenimiento de la interfaz.

## Tecnologías utilizadas

-   **React** con **TypeScript**
-   **Vite** para el desarrollo y la construcción de la aplicación
-   **React Router** para la navegación y configuración de rutas
-   **Tanstack Query** para la gestión y almacenamiento en caché de datos
-   **Zustand** para la gestión del estado global de la aplicación
-   **React Hook Form** junto con **Zod** para la validación de formularios
-   **Axios** para manejar las consultas al API
-   **Emotion** para el manejo de estilos y temas

## Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**

```bash
git clone https://github.com/tuusuario/southpark.git
```

2. **Instalar dependencias:**

Navega al directorio del proyecto e instala las dependencias:

```bash
cd southpark
npm install
```

3. **Iniciar el servidor de desarrollo:**

```bash
npm run dev
```

4. **Abrir en el navegador:**

Abre tu navegador y visita http://localhost:5173 para ver la aplicación en acción.

## Licencia

Este proyecto se distribuye bajo la licencia MIT.
