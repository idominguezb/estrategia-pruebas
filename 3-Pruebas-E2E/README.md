# e2e-testing 
[Estrategia](#Estrategia)
# Escenario de pruebas(ghost 3.42)
| Identificador | Nombre escenario      | Tipo     |
|---------------|-----------------------|----------|
|  ECPT1        | Crear post            | Positivo |
| ECPG1         | Crear pagina          | Positivo |
| ECT1          | Crear tag             | Positivo |
| ECI1          | Crear integracion     | Positivo |
| ECPT2         | Crear post programado | Positivo |
## Funcionalidades probadas 
| Funcionalidad | Detalle                                                                                                            | Escenarios |
|---------------|--------------------------------------------------------------------------------------------------------------------|------------|
| Crear post    | Crear un post manera inmediata o de forma programada para que los miembros puedan ver la información.              | [Escenarios](#Escenarios-para-crear-post)           |
| Crear página  | Crear una pagina manera inmediata o de forma programada para que los miembros puedan ver la información.           |    [Escenarios](#Escenarios-para-crear-pagina)        |
| Crear tags    | Crear tags para relacionar los posts con el propósito de informar a los lectores de que se trata la publicación.   | [Escenarios](#Escenarios-para-crear-tag)           |
| Integraciones | Se requiere adiministrar las integraciones de la pagina                                                            | [Escenarios](#Escenarios-para-intergacion)           |
| Membresia     | Administrar los miembros que se suscriben al blog                                                                  |      [Escenarios](#Escenarios-para-miembros)      |

## Escenarios de pruebas(Ghost 4.47)
### Escenarios para crear post
| Identificador | Nombre                        | Tipo de escenario |
|---------------|-------------------------------|-------------------|
| ECPT1         | Crear post                    | Positivo          |
| ECPT2         | Programar post                | Positivo          |
| ECPT3         | Titulo mayor a 255 caracteres | MIX               |
| ECPT4         | Crear post con link repetido  | MIX               |

### Escenarios para crear pagina
| Identificador | Nombre                            | Tipo de escenario |
|---------------|-----------------------------------|-------------------|
| ECPG1         | Crear pagina                      | Positivo          |
| ECPG2         | Crear pagina programada           | Positivo          |
| ECPG3         | Crear pagina a partir de un draft | Positivo          |
| ECPG4         | Crear pagina con titulo extenso   | MIX               |

### Escenarios para crear tag
| Identificador | Nombre                                               | Tipo de escenario |
|---------------|------------------------------------------------------|-------------------|
| ECT1          | Crear tag                                            | Positivo          |
| ECT2          | Crear tag con color invalido                         | Negativo          |
| ECT3          | Crear un internal tag y leer lista de internals tags | MIX               |
| ECT4          | Crear tag con descripción mayor a 500 caracteres     | Negativo          |

### Escenarios para intergacion
| Identificador | Nombre               | Tipo de escenario |
|---------------|----------------------|-------------------|
| EIT1          | Crear integracion    | Positivo          |
| EIT2          | Eliminar Integracion | Positivo          |
| EIT3          | Editar Integracion   | Positivo          |
| EIT4          | Agregar webhook      | Positivo          |

### Escenarios para miembros
| Identificador | Nombre                                                  | Tipo de escenario |
|---------------|---------------------------------------------------------|-------------------|
| EMB1          | Crear miembro                                           | Positivo          |
| EMB2          | Crear miembro con email invalido                        | Positivo          |
| EMB3          | Crear miembro con descripcion con mas de 500 caracteres | Positivo          |
| EMB4          | Borrar miembro                                          | Positivo          |
# Estrategia
Para realizar el VRT comparamos los screenshot generado con cypress en la version 3.42 con las de kraken que tomaba screenshot en la version 4.47, tratando siempre de tomar screenshot en los mismos pasos
# Cypress
Para tomar captura en cypress utilizamos el comando cy.screenshot()
# Kraken
Se decidió utilizar esta el comando saveScreenshot() de webdriver debido a que era muy difícil encontrar los screenshot que generaba kraken automáticamente, De igual manera se unieron los escenarios que se irían a comparar debido a que si se ejecutaban en feature separadas, las screenshot podrían variar mas debido a que estos se ejecutan paralelamente y algunos escenarios podrian cambiar la informacion que se mostraba al momento de realizar la screenshot para realizar la comparación.

Antes de la ejecucion de cada prueba utilizando el hook before de cucumber definíamos la ruta a la cual queríamos que fuera la imagen, creando una carpeta llamada results con dos subcarpetas 4.47 y 3.42 que contenían el nombre del escenario a ejecutar de tal manera que el directorio que genera es "results/version/nombre-escenario/step#.png", el nombre de la screenshot tomaba el valor de una variable llamada step la cual iría incrementando a medida que se ejecutaba el paso de _"I take a screenshot"_. 

# VRT
El reporte generado se ve de la siguiente manera donde cada tab tiene el nombre de los escenarios comparados.
![image](https://user-images.githubusercontent.com/98716277/168504119-0c486b21-7982-407a-8908-717a4fbe53e7.png)


