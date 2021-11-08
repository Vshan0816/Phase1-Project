// Arrays to create to make code less dry
const characterImgs = [
    shiki, arcueid, akiha, ciel, hisui, kohaku, miyako, kouma, noel, roa, vlov, redArc, saber
]

// what to include under DOMContentloaded
document.addEventListener("DOMContentLoaded", handlePageLoaded)

function handlePageLoaded(){
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
function handleShiki(){
    
}
// What I want to do for each character
// create element CharacterCard
// append CharacterCard to page
    // what do i target

// What does CharacterCard contain?
    // name, story, movelist with frame data
// How do i use Fetch to GET what i need
// work on name and story first

