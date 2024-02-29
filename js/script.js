
const nextPageBotton = document.getElementById('next-page');
const prevPageBotton = document.getElementById('prev-page')
const characterList = document.getElementById('character-list');

//page variable
let currentPage = 1;
let totalPages=0;




// call api

let listCharacters = (page) => {
    fetch('https://rickandmortyapi.com/api/character')
    .then((response) => {
        if (!response.ok) {
            throw new Error('not working');
        }
        return response.json();
    })
    .then((data)=> {
        totalPages= data.info.pages;
        displayCharacters(data.results);
    })
    .catch((error) => {
        console.error('problem at api');
    })

};


// function elementos dom y create .card/img/nombre/species

let displayCharacters = (characters) => {

    characters.forEach(character => {
  const card = document.createElement('div');
card.classList.add('character-card');
        console.log('name of profile:' + character.name);
     characterList.appendChild(card);
     
     
     card.innerHTML= `
     <img src = '${character.image}'/>
     <h2> Name:${character.name}</h2>
     <p>Especie: ${character.species}</p>
     `;

    });

    characterList.appendChild(card);

};
listCharacters();



  nextPageBotton.addEventListener('click' , ()=> {
    if(currentPage < totalPages){
        currentPage ++;
        listCharacters(currentPage);
    }
})
   prevPageBotton.addEventListener('click' , () =>{
    if ( currentPage > 1){
        currentPage --;
        listCharacters(currentPage)
    }
});
    listCharacters(currentPage);