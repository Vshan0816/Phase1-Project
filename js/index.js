
let characters = []  

function fetchCharacters(){
    fetch("http://localhost:3000/typeLuminaCharacters")
    .then(resp => resp.json())
    .then(data => {
        characters = data
        data.forEach(handleCharacter)
    })
    .catch((error)=>{
        console.log(error.message)
    })
}

document.addEventListener("DOMContentLoaded", handlePageLoaded)

function handlePageLoaded(){
    fetchCharacters()
    document.querySelector("#form").addEventListener("submit", handleSubmit)
    document.querySelector("#clear").addEventListener("click", handleClear)   
}
function handleCharacter(character){
    const charImg1 = document.createElement("img")
    
    const charDiv = document.createElement("div")
    const charName = document.createElement("h2")
    const charImg2 = document.createElement("img")
    const storyTitle = document.createElement("h2")
    const charStory = document.createElement("p")
    const table = document.createElement("table")

    charImg1.src = character.image1

    charName.textContent = character.name
    charImg2.src = character.image2
    charStory.textContent = character.story
    storyTitle.textContent = "Story"
    table.innerHTML =  `
    <tr>
        <th>MoveName</th>
        <th>Startup</th>
        <th>Frame Advantage on Block</th>
    </tr>`
    
    character.moveset.forEach(move => {
        const keyName = Object.keys(move)[0]
        table.innerHTML += tableFunction(move, keyName)
    })
    
    charDiv.id = "charDivID"
    charName.className = "h2"
    charImg2.className = "singleCharacter"
    storyTitle.className = "h2"
    charStory.id = "charStoryID"
    table.id = "tableID"
    
    document.querySelector("#character-list").appendChild(charImg1)

    charImg1.addEventListener("click", handleOneCharacter)

    function handleOneCharacter(){
    charDiv.append(charName,charImg2,storyTitle,charStory, table)
    document.querySelector("#single-character").innerHTML=""
    document.querySelector("#single-character").appendChild(charDiv)
    }
}

function handleSubmit(e){
    e.preventDefault()
    const p = document.createElement("p")
    const formText = document.querySelector("#form-input").value
    characters.forEach(handleChar)  

    function handleChar(char){
            char.moveset.forEach(move => {
            let moveName = Object.keys(move)[0]
            if (moveName === formText){
            p.textContent = `${formText} has a startup of ${move[moveName].startup} and is
             ${move[moveName].onBlock} on block`
            document.querySelector("#paragraph").appendChild(p)
            }           
        })
    }
    document.querySelector("#form").reset()
}
function handleClear(){
    document.querySelector("#paragraph").innerHTML = ""
}
const tableFunction = (move, keyName) => {
    return `<tr>
        <td>${keyName}</td>
        <td>${move[keyName].startup}</td>
        <td>${move[keyName].onBlock}</td>
    </tr>`
}