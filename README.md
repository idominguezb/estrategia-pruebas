
## Ejecutar las pruebas
Antes de ejecutar las pruebas se recomienda tener un usuario con email: prueba@example.com y password:prueba@example.com123456789 en ambas versiones, de no ser asi se debe modifcar las variables USER y PASSWORD en el archivo properties.json y para cypress se debe modifcar en la funcion login de todos los archivos de que se encuentran en integrations los valores cambiando de #amber7 y #amber9 en la funcion .type() por el usuario y contraseña respectivamente.

La version 3.42 se debe ejecutar en el puerto 3001 y la version 4.47 en el puerto 2368

### Pruebas de reconocimiento
## Monkey-cypress
Para ejecutar las prueba de monkey-cypress:
1. Ingresar a la carpeta 2-Pruebas-Reconocimiento
2. Ingresar en la carpeta monkey-cypress
3. Ejecutar el comando `npm i`
4. Ejecutar el comando `cypress run -C monkey-config.json`
5. Para ver el resulado ingresar en la carpeta results y abrir el archivo monkey-execution.html

## Ripuppet
Antes de le ejecucion ejecutar el comando `npm install -g http-server`
1. Ingresar a la carpeta 2-Pruebas-Reconocimiento
2. Ingresar en la carpeta ripuppet
3. Ejecutar el comando `npm i`
4. Ejecutar el comando `node index.js`
5. Para ver el resulado ingresar en la carpeta results
6. Ingresar a la carpeta creada
7. Abrir la consola de comnado y ejecutar `http-server`

### Pruebas e2e
## Cypress 
1. Ejecute el comando `npm install` en la carpeta 3-Pruebas-E2E
2. Para ejecutar las pruebas:
   * Ejecutar solos las pruebas de ghost 4.47 `cypress run --spec "cypress/integration/pruebas-de-regresion/4.47/*.spec.js"`

## Kraken
1. Ingrese a la carpeta kraken desde la terminal 
2. Ejecute el comando `npm install`
4. Ejecute el comando `npm run start` para empezar con la ejecucion
<br>
*Nota: en caso de que aparezca este error al ejecutar handleErrorFromBinding(ctx) se deben ejecutar las pruebas individualmente. no ejecutar los archivos con nombres ghost3_42.feature ghos4_47.feature*

### Pruebas de regresion
Si ya ejecuto las pruebas e2e anteriormente ejecutar el comando `cypress run --spec "cypress/integration/delete/*.spec.js"` para eliminar todo el contenido para que la comparacion sea lo mas parecido posible
## Cypress 
Para hacer las pruebas de regresion se recomienda ejecutar las pruebas de ghost 3.42 primero
1. Ejecute el comando `npm install` en la carpeta 3-Pruebas-E2E (Si no ha ejecutado este comando antes)
2. Para ejecutar las pruebas:
   * Ejecutar solos las pruebas de ghost 3.42 `cypress run --spec "cypress/integration/pruebas-de-regresion/3.42/*.spec.js"`
## Kraken
 <br>
1. Ingrese a la carpeta kraken desde la terminal 
2. Ejecute el comando `npm install` (Si no ha ejecutado este comando antes)
3. Ejecutar el comando `npm run enablev4`
4. Ejecute el comando `npm run start` para empezar con la ejecucion
## VRT
Antes debe realizar los pasos anteriormente descritos
1. Ir a la carpeta resemblejs
2. Ejecutar `npm install`
3. Ejecutar el comando `node index.js`
4. Dirigirse a la carpeta results generada
5. Abrir el archivo index.html

### Pruebas de Aceptacion
## cypress
1. Ejecute el comando `npm install` en la carpeta 4-Pruebas-Aceptacion
2. Para ejecutar las pruebas:
  * Ejecutar solo Members `cypress run --spec cypress/integration/members/*/**.js`
  * Ejecutar solo Integrations `cypress run --spec cypress/integration/integrations/*/*.js`
  * Ejecutar Solo Tags `cypress run --spec cypress/integration/tags/*/**.js`
  * Ejecutar solo Pages `cypress run --spec cypress/integration/pages/*/**.js`
  * Ejecutar solo Posts `cypress run --spec cypress/integration/posts/*/**.js`
  

