const characters = document.querySelectorAll('.character');

function updateCharacters() {
    characters.forEach(character => {
        const rect = character.getBoundingClientRect();
        const centerY = window.innerHeight / 2;
        const distanceToCenter = centerY - rect.top - rect.height / 2;

        // Adjust the scale based on the distance to the center
        const scale = 1 - Math.abs(distanceToCenter) / (window.innerHeight / 2);

        // Use GSAP for smooth animations
        gsap.to(character, { scale: scale, duration: 0.5 });
    });
}

document.addEventListener('scroll', updateCharacters);

// Initial positioning of characters
updateCharacters();
