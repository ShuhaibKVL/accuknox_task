# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


#How to install

npm create vite@latest projectName

cd projectName
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

if Yarn :-
    yarn add -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

NB: Not using Type script
create a file jsconfig.json
paste it :-

{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}

# Update vite.config.js 

....
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
 
 put it on head:-
  import path from "path"


# Install Shadcn

npx shadcn-ui@latest init
[ npx shadcn-ui@latest init ]

Answer this qustions :-
Would you like to use TypeScript (recommended)? no
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › src/index.css
Do you want to use CSS variables for colors? ›yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? ›yes


