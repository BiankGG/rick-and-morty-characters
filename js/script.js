const nextPageButton = document.getElementById('next-page');
const prevPageButton = document.getElementById('prev-page');
const characterList = document.getElementById('character-list');


let currentPage = 1;
let totalPages = 0;

const listCharacters = (page) => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            return response.json();
        })
        .then((data) => {
            totalPages = data.info.pages;
            displayCharacters(data.results);
        })
        .catch((error) => {
            console.error('Problema con la API:', error);
        });
};


const displayCharacters = (characters) => {

    characterList.innerHTML = '';

    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('character-card');
        
        card.innerHTML = `
            <img src='${character.image}' alt='${character.name}' />
            <h2>Nombre: ${character.name}</h2>
            <p>Especie: ${character.species}</p>
        `;
        
        characterList.appendChild(card);
    });
};


nextPageButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        listCharacters(currentPage);
    }
});

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        listCharacters(currentPage);
    }
});


listCharacters(currentPage);