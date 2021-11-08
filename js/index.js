

// function fetchShikiName(){
//     fetch("http://localhost:3000/typeLuminaCharacter")
//     .then(resp => resp.json())
//     .then(data => data[0].name)
// }
    
function fetchCharacters(){
    fetch("http://localhost:3000/typeLuminaCharacter")
    .then(resp => resp.json())
    .then(data => data.forEach(handleCharacter))
}

// what to include under DOMContentloaded
document.addEventListener("DOMContentLoaded", handlePageLoaded)

function handlePageLoaded(){
    fetchCharacters()
    shiki.addEventListener("click", handleShiki)
    arcueid.addEventListener("click", handleArcueid)
    akiha.addEventListener("click", handleAkiha)
    ciel.addEventListener("click", handleCiel)
    hisui.addEventListener("click", handleHisui)
    kohaku.addEventListener("click", handleKohaku)
    miyako.addEventListener("click", handleMiyako)
    kouma.addEventListener("click", handleKouma)
    noel.addEventListener("click", handleNoel)
    roa.addEventListener("click", handleRoa)
    vlov.addEventListener("click", handleVlov)
    redArc.addEventListener("click", handleRedArc)
    saber.addEventListener("click", handleSaber)
}
function handleCharacter(character){
    // make elements
    const shikiCard = document.createElement("div")
    const shikiName = document.createElement("h3")
    const shikiImg = document.createElement("img")
    const shikiStory = document.createElement("p")

    shikiName.textContent = character.name
    console.log(shikiName)
    // append shikiName to #single-character Div
    document.querySelector("#single-character").appendChild(shikiName)
    
}
// What I want to do for each character
// create element CharacterCard
// append CharacterCard to page
    // what do i target

// What does CharacterCard contain?
    // name, story, movelist with frame data
// How do i use Fetch to GET what i need
// work on name and story first

