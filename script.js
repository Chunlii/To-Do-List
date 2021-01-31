const inputArea = document.querySelector('.input-area');
const inputText = document.querySelector('.input-text');
const inputButton = document.querySelector('.input-button');

function createNewInput(){
    const newP = document.createElement('p');
    const pContent = document.createTextNode(inputText.value);
    newP.appendChild(pContent)
    inputArea.appendChild(newP);
    newP.classList.add('paragraph')
    inputText.value = '';
    newP.addEventListener('click', function(){
    newP.style.textDecoration='line-through';
})
    newP.addEventListener('dblclick', function(){
    inputArea.removeChild(newP)
})
}

inputButton.addEventListener('click', function(){
    createNewInput();
})
