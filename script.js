const form = document.querySelector('#memeGenerator')
const memeLibrary = document.querySelector('#memeLibrary')
const imgLink = document.querySelector('#imageURL');
const topText = document.querySelector('#topText')
const bottomText = document.querySelector('#bottomText')

memeLibrary.addEventListener("click", function(e){
    e.preventDefault
    console.log(e.target.tagName)
    if (e.target.className === "remove") {
        e.target.parentElement.remove();
        console.log('you clicked')}
      
})

form.addEventListener("submit", function(e){
    e.preventDefault();

    const newMeme = document.createElement('div');
    newMeme.className = 'newMeme'

    const memeImg = document.createElement('img');
    memeImg.src = imgLink.value;

    const newMemeTopText = document.createElement('div');
    newMemeTopText.innerText = topText.value;
    newMemeTopText.className = 'topFont'

    const newMemeBtmText = document.createElement('div');
    newMemeBtmText.innerText = bottomText.value;
    newMemeBtmText.className = 'btmFont'

    const removeButton = document.createElement('button');
    removeButton.className = 'remove'
    removeButton.innerText = 'REMOVE'


    newMeme.appendChild(newMemeTopText);
    newMeme.appendChild(memeImg);
    newMeme.appendChild(newMemeBtmText);
    newMeme.appendChild(removeButton);
    
   
    
    memeLibrary.prepend(newMeme);
    imgLink.value = ''
    topText.value = ''
    bottomText.value = ''
})

