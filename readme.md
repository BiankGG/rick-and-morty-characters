# Ejercicio: Página de Rick and Morty con Paginación e Imágenes

Este ejercicio consiste en crear una página web que muestra los personajes de la serie de televisión "Rick and Morty". Los personajes se obtienen de la API de Rick and Morty y se muestran en una lista paginada con imágenes, nombres y especies.

## Captura de Pantalla
Debería quedar algo parecido a esto

![Captura de Pantalla](./assets/img/rickandmorty-screenshot.png)

## Características

- Lista de personajes con imágenes, nombres y especies.
- Paginación para navegar entre las páginas de personajes. Los botónes de `Previous page` y `Next page` están creados
- Uso de la API de Rick and Morty para obtener datos de personajes. Este es el end point `https://rickandmortyapi.com/api/character/?page=(aquí añade el numero de la página)` 

## Instrucciones

1. Abre el archivo `index.html` en tu navegador para ver la página web.
2. La página mostrará una lista de personajes con sus imágenes, nombres y especies.
3. Puedes utilizar los botones "Previous Page" y "Next Page" para navegar entre las páginas de personajes.
4. Los personajes se obtienen de la API de Rick and Morty (https://rickandmortyapi.com/). Y aquí las documentación https://rickandmortyapi.com/documentation
5. Las imágenes de los personajes se muestran junto a sus nombres y especies.

## Código

El código del ejercicio se divide en tres archivos:

- `index.html`: Contiene la estructura HTML de la página. Tendrá la cabecera creada y los botones para pasar las páginas.
- `styles.css`: Contiene estilos CSS para dar formato a la página. Hay algunos de inicio.
- `script.js`: Contiene el código JavaScript para obtener y mostrar los personajes, así como para la paginación. Aquí introducirás todo tu código, está vacio.

## CONSEJOS

- Incia viendo que trae el fetch https://rickandmortyapi.com/api/character/?page=1. Los console.log() son tus amigos!
- Una vez sepamos que trae cada página muéstrala en navegador. 
- Pon los estilos para que se vea similar al ejemplo
- Haz el páginado. Piensa como añadir +1 a tu página al pulsar "Next Page" o -1 al pulsar "Previous Page" a la página en la que está para hacer el páginado.
- Revisa la documentación si tienes dudas  

Let´s CODE

--------------------------english


Exercise: Rick and Morty Page with Pagination and Images
This exercise involves creating a web page that displays characters from the TV series "Rick and Morty". The characters are obtained from the Rick and Morty API and are displayed in a paginated list with images, names, and species.

Screenshot
It should look something like this

Screenshot

Features
List of characters with images, names, and species.
Pagination to navigate between character pages. The Previous page and Next page buttons are created.
Use of the Rick and Morty API to obtain character data. This is the endpoint https://rickandmortyapi.com/api/character/?page=(add the page number here)
Instructions
Open the index.html file in your browser to see the web page.
The page will display a list of characters with their images, names, and species.
You can use the "Previous Page" and "Next Page" buttons to navigate between character pages.
The characters are obtained from the Rick and Morty API (https://rickandmortyapi.com/). And here is the documentation https://rickandmortyapi.com/documentation
The images of the characters are displayed alongside their names and species.
Code
The code for the exercise is divided into three files:

index.html: Contains the HTML structure of the page. It will have the header created and the buttons to pass the pages.
styles.css: Contains CSS styles to format the page. There are some to start with.
script.js: Contains the JavaScript code to retrieve and display the characters, as well as for pagination. Here you will enter all your code, it's empty.
TIPS
Start by seeing what the fetch https://rickandmortyapi.com/api/character/?page=1 brings. The console.log() are your friends!
Once we know what each page brings, display it in the browser.
Apply styles so that it looks similar to the example.
Do the pagination. Think about how to add +1 to your page when pressing "Next Page" or -1 when pressing "Previous Page" to the page you are on to do the pagination.
Review the documentation if you have doubts.
