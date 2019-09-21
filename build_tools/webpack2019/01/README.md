## EJEMPLO BÁSICO 1

## Recomendaciones

Para la compilación SCSS así como recarga del navegador
usaré prepros. Webpack será la herramienta para poder modular y/o compilar TypeScript o ESx a ES5.

### INICIO
Escribe en la terminal para desarrollar

Instala dependencias si no estan
``` 
npm install
```
Arranca modo desarrollo con escucha de cambios (en ./src)
``` 
webpack --mode development -w
```
Producción escribe:
``` 
webpack --mode production
```

## HACIENDO USO DE NPM SCRIPTS

Modo desarrollo:
``` 
npm run dev
```
Modo producción 
``` 
npm run build
```