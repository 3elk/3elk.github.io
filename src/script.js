document.getElementById('enterButton').addEventListener('click', function() {
    document.getElementById('overlay').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
    }, 500);
});
