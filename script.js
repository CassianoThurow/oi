function openYouTube() {
    window.open('https://www.youtube.com/watch?v=MM2mOsxJU4Q', '_blank');
}

const movingButton = document.querySelector('.moving-button');

movingButton.style.position = 'absolute';

movingButton.addEventListener('mouseover', () => {
    let randomX = Math.floor(Math.random() * (window.innerWidth - movingButton.clientWidth));
    let randomY = Math.floor(Math.random() * (window.innerHeight - movingButton.clientHeight));
    movingButton.style.left = randomX + 'px';
    movingButton.style.top = randomY + 'px';
});
