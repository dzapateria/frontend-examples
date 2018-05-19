
#### TSLINT

- Instalamos tslint y creamos un archivo de configuración básico.
```
npm i -g tslint jscs
tslint --init
```
- Ejecutamos donde debe analizar el codigo
```
tslint -c tslint.json "src/ts/*.ts"
```


