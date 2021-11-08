let characters = []   
function fetchCharacters(){
    fetch("http://localhost:3000/typeLuminaCharacter")
    .then(resp => resp.json())
    .then(data => {
        characters = data
        data.forEach(handleCharacter)
    })
}

// what to include under DOMContentloaded
document.addEventListener("DOMContentLoaded", handlePageLoaded)

function handlePageLoaded(){
    fetchCharacters()
    // shiki.addEventListener("click", handleShiki)
    // arcueid.addEventListener("click", handleArcueid)
    // akiha.addEventListener("click", handleAkiha)
    // ciel.addEventListener("click", handleCiel)
    // hisui.addEventListener("click", handleHisui)
    // kohaku.addEventListener("click", handleKohaku)
    // miyako.addEventListener("click", handleMiyako)
    // kouma.addEventListener("click", handleKouma)
    // noel.addEventListener("click", handleNoel)
    // roa.addEventListener("click", handleRoa)
    // vlov.addEventListener("click", handleVlov)
    // redArc.addEventListener("click", handleRedArc)
    // saber.addEventListener("click", handleSaber)
}
function handleCharacter(character){
    // make elements
    const charImg1 = document.createElement("img")
    const charImg2 = document.createElement("img")
    const charDiv = document.createElement("div")
    const charName = document.createElement("h3")
    const charStory = document.createElement("p")
    const table = document.createElement("table")

    // set information to elements
    charImg1.src = character.image1
    table.innerHTML = `
    <tr>
        <th>MoveName</th>
        <th>Startup</th>
        <th>Frame Advantage on Block</th>
    </tr>
    `
    character.moveset.forEach(move => {
        const keyName = Object.keys(move)[0]
        table.innerHTML += `
    <tr>
        <td>${keyName}</td>
        <td>${move[keyName].startup}</td>
        <td>${move[keyName].onBlock}</td>
    </tr>`
    })
    // add event listeners
    charImg1.addEventListener("click", handleOneCharacter)
    // append to page
    document.querySelector("#character-list").appendChild(charImg1)

    function handleOneCharacter(){
    // set information to elements
    charName.textContent = character.name
    charImg2.src = character.image2
    charStory.textContent = character.story
    // append to charDiv
    charDiv.append(charName,charImg2, charStory, table)
    // clear #single-character
    document.querySelector("#single-character").innerHTML=""
    // append to page
    document.querySelector("#single-character").appendChild(charDiv)
    }
}




    

// What I want to do for each character
// create div for each Character
// append CharacterCard to page
    // what do i target
        // #character-list

// What does CharacterCard contain?
    // name, story, movelist with frame data
// How do i use Fetch to GET what i need
// work on name and story first

// add images to db.json,
// render images on DOMContentLoaded, through function
// DOMContentLoaded -> handlePageLoaded -> fetchCharacters -> handleCharacter

// for each move we should create a row in the table

