   
function fetchCharacters(){
    fetch("http://localhost:3000/typeLuminaCharacter")
    .then(resp => resp.json())
    .then(data => data.forEach(handleCharacter))
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
    const charDiv = document.createElement("div")
    const charName = document.createElement("h3")
    const charImg1 = document.createElement("img")
    const charImg2 = document.createElement("img")
    const charStory = document.createElement("p")

    // set information to elements
    charImg1.src = character.image1
    // add event listeners
    charImg1.addEventListener("click", handleSingleCharacter)
    // append to page
    document.querySelector("#character-list").appendChild(charImg1)
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



