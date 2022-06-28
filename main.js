const containerDiv = document.querySelector('#container')
const newBtn = document.querySelector('#new-pokemon-btn')
const rosterDiv = document.querySelector('#roster')

newBtn.addEventListener('click', async() => {
   let num = prompt('Enter a Pokemon number')
   let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`
   let dataUrl = `https://pokeapi.co/api/v2/pokemon/${num}`
   let req = await fetch(dataUrl)
   let res = await req.json()
   let name = res.forms[0].name
     let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.mp3`
        let audio = document.createElement('audio')
        let source =  document.createElement('source')
        source.setAttribute('src', audioUrl)
        source.setAttribute('type', 'audio/mpeg')
        audio.append(source)
   let h3 = document.createElement('h3')
   h3.innerText = name
    let img = document.createElement('img')
    img.setAttribute('src', imgUrl)
    img.setAttribute('class', 'roster-img')
    let position = document.querySelector(`#pokemon-${userRoster.length+1}`)
    position.addEventListener('click', () =>{
         position.classList.add('animate__animated')
            position.classList.add('animate__shakeX')
             setTimeout(() => {
                position.classList.remove('animate__shakeX')
            },1000)
        audio.play()
    })
    position.append(img, h3)
    userRoster.push(num)
})



const pokemon = [
    {name: 'Bulbasaur', id:'001'},
    {name: 'Charmander', id:'004'},
    {name: 'Squirtle', id:'007'}   
]

const userRoster = []

//loop over id 
// create html elemt
// set elem
//append elem

const createPokemon = (pokemonName, imgUrl) => {
let div = document.createElement('div')
    div.setAttribute('class', 'pokemon-card')
    let h3 = document.createElement('h3')
    h3.innerText = pokemonName
    let img = document.createElement('img')
    img.src = imgUrl
        let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${pokemonName.toLowerCase()}.mp3`
        let audio = document.createElement('audio')
        let source =  document.createElement('source')
        source.setAttribute('src', audioUrl)
        source.setAttribute('type', 'audio/mpeg')
        audio.append(source)
        div.addEventListener('click', () => {
            div.classList.add('animate__animated')
            div.classList.add('animate__shakeX')
            setTimeout(() => {
                div.classList.remove('animate__shakeX')
            },1000)
        audio.play()
    })
    div.append(img, h3, audio)
    return div;
}

pokemon.map((element, index)  => {
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png` 
    const pokemonElement = createPokemon(element.name, imgUrl)
    containerDiv.append(pokemonElement)
})



/*
function toFormat(num){
    if (num.length < 2){
        return newNum = `00${num}`
    } else if (num.length == 2){{
        return `0${num}`}
    }else {
        return num
    }
}*/