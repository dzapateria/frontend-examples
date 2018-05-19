
#### TypeScript npm-script, Browsersync+Proxy+Tunnel

En el package.json el objeto devDependencies de esta forma 


```
"devDependencies": {
    "browser-sync": "latest",
    "rimraf": "latest",
    "npm-run-all": "latest",
    "watch": "latest",
    "typescript": "latest"
  }
```
Ejecutamos para que lo instale todo 
``` 
npm install
```
y para instalarlas globalmente podemos escribir
```
npm install -g -D browser-sync rimraf node-sass npm-run-all watch typescript
```

Creamos un archivo de configuración de compilación de Typescript escribiendo
``` 
tsc --init
```
- Descomentamos en el archivo las lineas 
    ```
    {
      "compilerOptions": {
       "target": "es5",
        "sourceMap": true, 
        "outDir": "./dist/js",
        "rootDir": "./src/js", 
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
"outDir", "target", "compilerOptions"




## REFERENCIAS
https://jjude.com/npm-scripts-for-tsc/