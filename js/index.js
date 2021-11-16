//global array for fetch data
let characters = []  

//fetch function
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

// functions under DOMContentloaded
function handlePageLoaded(){
    fetchCharacters()
    document.querySelector("#form").addEventListener("submit", handleSubmit)
    document.querySelector("#clear").addEventListener("click", handleClear)   
}
function handleCharacter(character){
    // make elements
    const charImg1 = document.createElement("img")
    
    const charDiv = document.createElement("div")
    const charName = document.createElement("h2")
    const charImg2 = document.createElement("img")
    const storyTitle = document.createElement("h2")
    const charStory = document.createElement("p")
    const table = document.createElement("table")

    // set information to elements
    charImg1.src = character.image1

    charName.textContent = character.name
    charImg2.src = character.image2
    charStory.textContent = character.story
    storyTitle.textContent = "Story"
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
    // set attributes
    charDiv.id = "charDivID"
    charName.className = "h2"
    charImg2.className = "singleCharacter"
    storyTitle.className = "h2"
    charStory.id = "charStoryID"
    table.id = "tableID"
    
    // append character images to page on launch
    document.querySelector("#character-list").appendChild(charImg1)

    // add event listeners to each image
    charImg1.addEventListener("click", handleOneCharacter)


    function handleOneCharacter(){
    // append to charDiv
    charDiv.append(charName,charImg2,storyTitle,charStory, table)
    // clear #single-character
    document.querySelector("#single-character").innerHTML=""
    // append to page
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

// What I want to do for each character
// create div for each Character
// append CharacterCard to page
    // what do i append to
        // #character-list

// What does CharacterCard contain?
    // name, story, movelist with frame data
// How do i use Fetch to GET what i need
    // Fire fetch on DOMContentLoaded
    // use data with forEach, to render characters on page
    // render images on DOMContentLoaded, through function
    // DOMContentLoaded -> handlePageLoaded -> fetchCharacters -> handleCharacter

// How do i create a table  
    // use innerHTML
    // for each move we should create a row in the table

// what does a find function do
    // The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
    // If no values satisfy the testing function, undefined is returned.
// Do i need a find function? If so why?
// How do i create a find function? 
// what do i need to return?
    // character move name, frame data
// what i need to be in the input
    // Movedata
// Thoughts
    // Do i need to iterate? Yes in order to find each movename
    // If input.value = movename, append movename, startup and onblock

// why an array of objects, versus, an object with seperate keys. 

