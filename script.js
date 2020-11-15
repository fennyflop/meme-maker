const imageInput = document.querySelector('#image');
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');

const memeImage = document.querySelector('.meme__image');
const memeTop = document.querySelector('#meme-top');
const memeBottom = document.querySelector('#meme-bottom');

const form = document.querySelector('.form');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    memeImage.src = imageInput.value;
    memeTop.textContent = topText.value;
    memeBottom.textContent = bottomText.value;

    console.log(memeBottom.value)
} )