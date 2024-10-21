document.querySelectorAll('.song').forEach(function(container) {
    container.addEventListener('click', function() {
        const audio = this.querySelector('.song-audio');
        const img = this.querySelector('.song-image');
        const button = this.querySelector('.btn');

        if (audio.paused) {
            /* Play Audio */
            audio.play();
            /* Hide Image */
            img.style.opacity = 0;
            /* Change button text to Pause */
            button.textContent = "Pause";
        } else {
            /* Pause Audio */
            audio.pause();
            /* Show Image */
            img.style.opacity = 1;
            /* Change button text to Play */
            button.textContent = "Play";
        }
    });
});