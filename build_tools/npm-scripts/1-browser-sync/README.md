
# BrowserSync


COMANDOS BÁSICOS

| CLI | Description |
| ------ | ----------- |
| browser-sync --help   | Ayuda Lista comandos globales disponibles. |
| browser-sync start --help | Ayuda listando opciones del comando start. |
| browser-sync recipe --help | Ayuda listando opciones del comando recipe. |

## Inicio rápido

- Requerimientos:
    - Tener node instalado
    - Tener browser-sync globalmente instalado
        * Para Instalar browser-sync globalmente escribe: 
        ```
        npm i -g browser-sync
        npm i -D browser-sync
        ```
- (1) Creamos un package.json donde crearemos alias para los comandos y opciones con.
    ```
    npm init -y
    ```
- (2) Ahora en el archivo package.json el objeto scripts 
- (3) En el archivo ahora en la zona scripts añadimos el comando a ejecutar.
```
"bs": "browser-sync start --tunnel --proxy localhost --host 192.168.1.142 --files \"*.html, *.php, dist/js/*.js, dist/css/*.css\" "
```
- (4) Ahora con esta propiedad añadida al objeto script en el packaje.json, podremos ejecutar todo ese comando y opciones con:
```
npm run bs
```
- (5) La primera vez que ejecutamos el comando deberemos incluir el script que nos da antes del cierre del body, seria algo parecido a esto.
```
<script id="__bs_script__">//<![CDATA[
document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.24.4'><\/script>".replace("HOST", location.hostname));
//]]></script>
```
- (6) Solo nos queda entrar en las URL que nos lista para ver los cambios del proyecto, también podemos entrar en la interfaz de browsersync en `http://localhost:3001`
podemos también acceder desde el exterior como del móvil si accedemos en la ruta externa que nos da, el parametro host nos sirve para dar la ip local del 
equipo que corre el código, a veces la ip la pone mal y es más seguro que no falle si la pones, es la IP dinámica que asigna a cada equipo. Puedes arrancar browser-sync con las opciones a través del CLI o a través de 
un archivo de configuración, en el ejemplo 3 estan disponibles los 2 métodos listados en el package.json. ruta especifica PHP, para desarrollo backend, 
puede que tengamos un directorio con profundidad, podemos pasarlo despues de --proxy, por ejemplo --proxy superapp.dev/blogs/test-blog/ de esta manera no
tendremos que ir entrando en la carpeta hasta llegar al proyecto.

- (7) Cacheo del navegador. Podemos evitar que nos moleste si abrimos las 
herramientas de desarrollo del Chrome (devtools) Abres con F12 y activamos en Network
Disable cache, y si esta abierta ya no cacheará los archivos y bajará siempre nuevos.

- (8) Para evitar el cacheo del móvil o tablet, podemos recurrir en generar un 
número aleatorio, lo implemento desde el ejemplo 3 y puedes verlo en el index.php.

- (9) SASS. Instalamos browse-sync, node-sass y rimraf (parallelshell)
```
npm i -D node-sass watch rimraf parallelshell
npm i -g node-sass watch rimraf parallelshell
```
## Paginas de referencia

https://browsersync.io/docs/command-line/
https://www.browsersync.io/docs/options/
https://www.sitepoint.com/guide-to-npm-as-a-build-tool/

