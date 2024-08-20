
```markdown
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## How to Install

### Clone the Repository:

```bash
git clone https://github.com/ShuhaibKVL/accuknox_task.git
```

### Navigate to the Project Directory:

```bash
cd accuknox_task
```

### Installing Dependencies

```bash
npm install
# or
yarn install
```

### Run

```bash
npm run dev
```

### Do this configuration if only required/ask again:

```bash
npm create vite@latest projectName
cd projectName
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

If Yarn:

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### NB: Not using TypeScript

Create a file `jsconfig.json` and paste:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  }
}
```

### Update `vite.config.js`

Add the following:

```javascript
import path from "path";

export default {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
```

### Install Shadcn

```bash
npx shadcn-ui@latest init
```

Answer these questions:

- **Would you like to use TypeScript (recommended)?**: No
- **Which style would you like to use?**: Default
- **Which color would you like to use as base color?**: Slate
- **Where is your global CSS file?**: `src/index.css`
- **Do you want to use CSS variables for colors?**: Yes
- **Where is your tailwind.config.js located?**: `tailwind.config.js`
- **Configure the import alias for components:**: `@/components`
- **Configure the import alias for utils:**: `@/lib/utils`
- **Are you using React Server Components?**: Yes
```