# TypeScript Modules with npm &  tsc

En el package.json el objeto devDependencies de esta forma

```json
{
  "name": "npm-scripts-build-typescript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "server": "browser-sync start --config bs-config.js",
    "clean": "rimraf dist/*",
    "watch:css": "watch \"node-sass src/scss -o dist/css\" ./src/scss/",
    "watch:js": "watch \"tsc\" ./src/ts/",
    "start": "run-p server watch:css watch:js"
  },
  "keywords": [],
  "author": "dzapateria <dzapateria@gmail.com>",
  "license": "ISC",
  "devDependencies": {
    "browser-sync": "latest",
    "rimraf": "latest",
    "node-sass": "latest",
    "npm-run-all": "latest",
    "watch": "latest",
    "typescript": "latest"
  },
  "dependencies": {}
}
```

- Ejecutamos para que lo instale todo

```shell
npm install
```

- Y para instalarlas globalmente podemos escribir:

```shell
npm install -g -D browser-sync rimraf node-sass npm-run-all watch typescript
```

- Creamos un archivo de configuración de compilación de Typescript escribiendo:

```bash
tsc --init
```

- Descomentamos en el archivo las lineas:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "system",
    "allowJs": true,
    "checkJs": true,
    "sourceMap": true,
    "outFile": "./dist/js/app.js",
    "rootDir": "./src/ts/",
    "strict": true,
    "esModuleInterop": true
  },
  "include": [
    "./src/**/*.ts"
  ],
  "exclude": [
    "src/test.ts"
  ]
}
```

- Instalamos sistemjs

```
npm i -g systemjs
```



## REFERENCIAS

- [Typescript Fundamentals - 8 jun. 2017 - 90m - By Execute Automation](https://www.youtube.com/watch?v=vcrAGcUgcSM)
- [TypeScript Basics - 17 feb 2018 - 3h30m - By Java Brains](https://www.youtube.com/playlist?list=PLqq-6Pq4lTTanfgsbnFzfWUhhAz3tIezU)