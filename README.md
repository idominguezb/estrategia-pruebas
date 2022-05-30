[Documento][https://uniandes-my.sharepoint.com/:w:/g/personal/i_dominguezb_uniandes_edu_co/EcAPr-LrkJ1Dm80DCA7EraUBIZkDUHttChFm5aHLYTmCYQ?e=b4mLuo)
# Ejecutar las pruebas
Antes de ejecutar las pruebas se recomienda tener un usuario con email: prueba@example.com y password:prueba@example.com123456789 en ambas versiones.

La version 3.42 se debe ejecutar en el puerto 3001 y la version 4.47 en el puerto 2368

# Pruebas de reconocimiento
## Monkey-cypress
Para ejecutar las prueba de monkey-cypress:
1. Ingresar a la carpeta 2-Pruebas-Reconocimiento
2. Ingresar en la carpeta monkey-cypress
3. Ejecutar el comando `npm i`
4. Ejecutar el comando `cypress run -C smart-monkey-config.json`
5. Para ver el resulado ingresar en la carpeta results y abrir el archivo monkey-execution.html

## Ripuppet
Se necesita usar node en la version 12.22 puede utilizar el comando nvm use 12.22.0(Si tiene instalado [nvm](https://github.com/nvm-sh/nvm-)) y ghost en la version 3.43 en el puerto 3001 para que pueda generar el grafo de navegacion correctamente
Antes de le ejecucion ejecutar el comando `npm install -g http-server`
1. Ingresar a la carpeta 2-Pruebas-Reconocimiento
2. Ingresar en la carpeta ripuppet
3. Ejecutar el comando `npm i`
4. Ejecutar el comando `node index.js`
5. Para ver el resulado ingresar en la carpeta results
6. Ingresar a la carpeta creada
7. Abrir la consola de comnado y ejecutar `http-server`

# Pruebas e2
[Escenarios](https://github.com/idominguezb/estrategia-pruebas/tree/main/3-Pruebas-E2E#escenarios-de-pruebasghost-447)
### Cypress 
1. Ejecute el comando `npm install` en la carpeta 3-Pruebas-E2E
2. Para ejecutar las pruebas:
   * Ejecutar solos las pruebas de ghost 4.47 `cypress run --spec "cypress/integration/pruebas-de-regresion/4.47/*.spec.js"`

### Kraken
1. Ingrese a la carpeta kraken desde la terminal 
2. Ejecute el comando `npm install`
3. Ejecute el comando `npm run start` para empezar con la ejecucion
<br>
*Nota: en caso de que aparezca este error al ejecutar handleErrorFromBinding(ctx) se deben ejecutar las pruebas individualmente. no ejecutar los archivos con nombres ghost3_42.feature ghos4_47.feature*

# Pruebas de regresion
Si ya ejecuto las pruebas e2e anteriormente ejecutar el comando `cypress run --spec "cypress/integration/delete/*.spec.js"` para eliminar todo el contenido para que la comparacion sea lo mas parecido posible
[Escenarios version 3.42](https://github.com/idominguezb/estrategia-pruebas/tree/main/3-Pruebas-E2E#escenario-de-pruebasghost-342)
### Cypress 

Para hacer las pruebas de regresion se recomienda ejecutar las pruebas de ghost 3.42 primero
1. Ejecute el comando `npm install` en la carpeta 3-Pruebas-E2E (Si no ha ejecutado este comando antes)
2. Para ejecutar las pruebas:
   * Ejecutar solos las pruebas de ghost 3.42 `cypress run --spec "cypress/integration/pruebas-de-regresion/3.42/*.spec.js"`
### Kraken
1. Ingrese a la carpeta kraken desde la terminal 
2. Ejecute el comando `npm install` (Si no ha ejecutado este comando antes)
3. Ejecutar el comando `npm run enablev4`
4. Ejecute el comando `npm run start` para empezar con la ejecucion
### VRT
[Estrategia](https://github.com/idominguezb/estrategia-pruebas/blob/main/3-Pruebas-E2E/README.md#Estrategia)<br>
Antes debe realizar los pasos anteriormente descritos
1. Ir a la carpeta resemblejs
2. Ejecutar `npm install`
3. Ejecutar el comando `node index.js`
4. Dirigirse a la carpeta results generada
5. Abrir el archivo index.html

# Pruebas de Aceptacion
### cypress
[Estretagia](https://github.com/idominguezb/estrategia-pruebas/tree/main/4-Pruebas-Aceptacion#distribucion)
1. Ejecute el comando `npm install` en la carpeta 4-Pruebas-Aceptacion
2. Para ejecutar las pruebas:
  * Ejecutar solo Members `cypress run --spec cypress/integration/members/*/**.js`
  * Ejecutar solo Integrations `cypress run --spec cypress/integration/integrations/*/*.js`
  * Ejecutar Solo Tags `cypress run --spec cypress/integration/tags/*/**.js`
  * Ejecutar solo Pages `cypress run --spec cypress/integration/pages/*/**.js`
  * Ejecutar solo Posts `cypress run --spec cypress/integration/posts/*/**.js`
  

