document.addEventListener('hidden.bs.modal', function (event) {
    if (event.target.id === 'modalGta6') {
            const iframe = document.getElementById('videoTrailer');
            if (iframe) {
                const currentSrc = iframe.src;
                iframe.src = ""; gt
                iframe.src = currentSrc;
                console.log("Video detenido con éxito");
            }
        }
});
