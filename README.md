# 🚀 MyElectron Boilerplate

Un boilerplate profesional y optimizado para crear aplicaciones de escritorio modernas con **Electron**, **React 19**, **Vite** y **Chakra UI v3**.

Este proyecto elimina la fricción de configurar un entorno multi-proceso con TypeScript, ofreciendo una arquitectura limpia, un sistema de diseño robusto y un flujo de desarrollo ultra rápido.

---

## 🛠️ Stack Tecnológico

- **Core:** [Electron](https://www.electronjs.org/) (Main, Preload, Renderer)
- **Frontend:** [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/)
- **UI & Styling:** [Chakra UI v3](https://chakra-ui.com/) + [Emotion](https://emotion.sh/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Navegación:** [React Router 7](https://reactrouter.com/) (HashRouter)
- **Temas:** [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode nativo)
- **Tooling:** [TypeScript](https://www.typescriptlang.org/), [ESLint 9](https://eslint.org/), [Prettier](https://prettier.io/)

---

## 📦 Estructura del Proyecto

El proyecto utiliza una estructura de compilación centralizada para evitar conflictos entre procesos:

```text
├── dist/                   # Artefactos de compilación (Ignorado por Git)
│   ├── main/               # Proceso Main compilado
│   ├── preload/            # Scripts Preload compilados
│   └── renderer/           # App React compilada por Vite
├── src/
│   ├── main/               # Lógica del proceso principal de Electron
│   ├── preload/            # Scripts de puente (IPC)
│   ├── renderer/           # Código fuente de la interfaz (React)
│   │   ├── components/     # Componentes UI y Layouts
│   │   ├── pages/          # Vistas de la aplicación
│   │   └── App.tsx         # Punto de entrada de React
│   └── lib/                # Utilidades compartidas (Hooks, Helpers)
├── tsconfig.json           # Configuración base de TypeScript
└── vite.config.ts          # Configuración de Vite para el Renderer
```

## 🚀 Comienzo Rápido

1. Requisitos
   Node.js (Recomendado LTS: 20.x o 22.x)
   npm >= 8
2. Instalación

```bash
  # Clonar el repositorio
  git clone https://github.com/tu-usuario/myelectron-boilerplate.git

  # Entrar al directorio
cd myelectron-boilerplate

# Instalar dependencias
npm install
```

3. Desarrollo
   Inicia el entorno de desarrollo con Hot Module Replacement (HMR):

   ```bash
   npm run dev
   ```

   4. Construcción y Producción
      Para generar los archivos de producción y probar la app empaquetada:

```bash
# Compilar todo
npm run build

# Ejecutar la versión compilada
npm start
```

💡 Características Clave Implementadas
🌑 Dark Mode Profesional
Integración completa de Chakra UI v3 con next-themes. Incluye un componente ThemeToggleButton con animaciones de framer-motion.

🔗 Navegación en Electron
Configurado con HashRouter para evitar errores de "File Not Found" al recargar rutas en el entorno de archivos locales de Electron.

🛡️ Head Management (SEO-like)
Hook personalizado useHead en src/lib/head.ts para manejar títulos de ventana y meta-tags de forma dinámica sin depender de Next.js.

🧹 Linting & Calidad de Código
Configuración de ESLint optimizada para TypeScript y React, eliminando warnings molestos de "prop-spreading" en componentes de UI y resolviendo conflictos de importación mediante eslint-import-resolver-typescript.

🛠️ Scripts Disponibles
Script Descripción
npm run dev Ejecuta Vite, TSC en modo watch y Electron simultáneamente.
npm run build Compila los procesos Main/Preload y genera el bundle de Vite.
npm run lint Analiza el código en busca de errores de estilo o lógica.
npm start Lanza la aplicación usando los archivos dentro de dist/.
📝 Notas de Desarrollo
Rutas de Build: La salida de Vite está configurada en ../../dist/renderer para mantener la raíz limpia.
Imports: Se utiliza el alias @/_ apuntando a src/_ para imports más limpios.
Seguridad: El proceso de renderizado tiene nodeIntegration: false y contextIsolation: true por defecto (buenas prácticas de Electron).
📄 Licencia
Este proyecto está bajo la Licencia ISC. Consulta el archivo LICENSE para más detalles.
Desarrollado con ❤️ por Erwing Ulloa Silva
