
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all card buttons to prevent immediate disappearance
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            let button = card.querySelector('button');
            if (button) {
                button.style.opacity = '1';
            }
        });

        card.addEventListener('mouseleave', () => {
            let button = card.querySelector('button');
            if (button) {
                button.style.opacity = '1';
            }
        });
    });
});
