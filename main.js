const pokemon = ['charmander', 'bulbasaur', 'squirtle']
const pokemonIds = ['001', '002', '003']

//loop over id 
// create html elemt
// set elem
//append elem

pokemonIds.map((id)  => {
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
    console.log('imgUrl', imgUrl)
    let img = document.createElement('img')
    img.src = imgUrl
   img.setAttribute('height', '100px')
   img.setAttribute('width', '100px')
    document.body.append(img)
})
