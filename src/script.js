document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const enterButton = document.getElementById('enterButton');
    const bgMusic = document.getElementById('bgMusic');

    enterButton.addEventListener('click', function() {
        bgMusic.play();
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    });
});
