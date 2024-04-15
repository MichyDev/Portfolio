document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.carousel-img');
    const captions = ["Descrizione 1", "Descrizione 2", "Descrizione 3"]; // Array delle descrizioni
    
    let index = 0; // Indice corrente dell'immagine visualizzata
    
    function showImage(i) {
        images.forEach((image, idx) => {
            if (idx === i) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
        document.querySelector('.carousel-caption').textContent = captions[i]; // Aggiorna la descrizione
    }
    
    function nextImage() {
        index = (index + 1) % images.length; // Incrementa l'indice con il resto per fare in modo che ritorni al primo dopo l'ultimo
        showImage(index);
    }
    
    function prevImage() {
        index = (index - 1 + images.length) % images.length; // Decrementa l'indice con la gestione dei valori negativi
        showImage(index);
    }
    
    // Mostra la prima immagine e la relativa descrizione all'avvio
    showImage(index);
    
    // Aggiungi event listeners per i bottoni di scorrimento
    document.querySelector('#prev-btn').addEventListener('click', prevImage);
    document.querySelector('#next-btn').addEventListener('click', nextImage);
});
