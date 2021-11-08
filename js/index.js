// Arrays to create to make code less dry
const characterImgs = [
    shiki, arcueid, akiha, ciel, hisui, kohaku, miyako, kouma, noel, roa, flov, redArc, saber
]

// what to include under DOMContentloaded
document.addEventListener("DOMContentLoaded", handlePageLoaded)
function handlePageLoaded(){
    characterImgs.forEach(characterImg => {addEventListener("click", handleCharacter)
})}

function handleCharacter{

}

// What I want to do for each character
// create element CharacterCard
// append CharacterCard to page
    // what do i target

// What does CharacterCard contain?
    // name, story, movelist with frame data
// How do i use Fetch to GET what i need
// work on name and story first

