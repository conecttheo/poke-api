
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}$&limit=${limit}$`

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">Bulbasaur</span>
    
        <div class="detail">
            <ol class="types">
                <li class="type">GRASS</li>
                <li class="type">POISON</li>
            </ol>
            <img src="https://serebii.net/art/th/1.png" alt="Bulbasaur">
        </div>
        </li>`
}
const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons) => { 
        const listaItems = []

    pokemons.map()

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            listaItems.push(convertPokemonToLi(pokemon))
        }
        console.log(listaItems)
})

    

