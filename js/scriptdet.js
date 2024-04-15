// Seleziona tutti i pulsanti "Dettagli"
const detailButtons = document.querySelectorAll('.details-btn');

// Aggiungi un gestore di eventi a ciascun pulsante
detailButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Ottieni l'ID del progetto associato al pulsante
        const targetId = this.getAttribute('data-target');
        
        // Mostra i dettagli corrispondenti e nascondi gli altri
        document.querySelectorAll('.fullscreen-content > div').forEach(detail => {
            if (detail.id === targetId) {
                detail.style.display = 'block';
            } else {
                detail.style.display = 'none';
            }
        });

        // Mostra la schermata di overlay a schermo intero
        document.querySelector('.fullscreen-overlay').classList.add('active');
    });
});

// Aggiungi un gestore di eventi al pulsante "Chiudi"
document.querySelector('.close-btn').addEventListener('click', function() {
    // Nascondi la schermata di overlay a schermo intero
    document.querySelector('.fullscreen-overlay').classList.remove('active');
});
