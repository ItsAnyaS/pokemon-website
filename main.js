const containerDiv = document.querySelector('#container')
const newBtn = document.querySelector('#new-pokemon-btn')
const rosterDiv = document.querySelector('#roster')
newBtn.addEventListener('click', () => {
   let num = prompt('Enter a Pokemon number')
   console.log('Number entered', num)
   let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`
    let img = document.createElement('img')
    img.setAttribute('src', imgUrl)
    img.setAttribute('class', 'roster-img')
    let position = document.querySelector(`#pokemon-${userRoster.length+1}`)
    position.append(img)
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

pokemon.map((element, index)  => {
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
    let h3 = document.createElement('h3')
    h3.innerText = element.name
    let div = document.createElement('div')
    div.setAttribute('class', 'pokemon-card')
    console.log(element)
    let img = document.createElement('img')
    img.src = imgUrl
        let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${element.name.toLowerCase()}.mp3`
        let audio = document.createElement('audio')
        let source =  document.createElement('source')
        source.setAttribute('src', audioUrl)
        source.setAttribute('type', 'audio/mpeg')
        audio.append(source)
        div.addEventListener('click', () => {
        audio.play()
    })
    div.append(img, h3, audio)
    containerDiv.append(div)
})