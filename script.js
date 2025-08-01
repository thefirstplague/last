// Create floating hearts
document.addEventListener('DOMContentLoaded', function() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heartCount = 6;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 90 + 'vw';
        heart.style.top = Math.random() * 90 + 'vh';
        heart.style.animationDuration = (6 + Math.random() * 6) + 's';
        heart.style.animationDelay = (Math.random() * 5) + 's';
        heartsContainer.appendChild(heart);
    }

    // Button interactions
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const specialBtn = document.getElementById('specialBtn');
    const message = document.getElementById('message');

    if (noBtn) {
        noBtn.addEventListener('mouseover', () => {
            if (!message.style.display || message.style.display === 'none') {
                moveButton(noBtn);
            }
        });

        noBtn.addEventListener('touchstart', (e) => {
            if (!message.style.display || message.style.display === 'none') {
                e.preventDefault();
                moveButton(noBtn);
            }
        }, {passive: false});
    }

    function moveButton(btn) {
        const x = Math.random() * (window.innerWidth - btn.offsetWidth - 40);
        const y = Math.random() * (window.innerHeight - btn.offsetHeight - 40);
        btn.style.position = 'absolute';
        btn.style.left = Math.max(20, x) + 'px';
        btn.style.top = Math.max(20, y) + 'px';
    }

    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            // Show the message
            message.style.display = 'block';

            // Hide the yes/no buttons
            document.querySelector('.button-row').style.display = 'none';

            // Show the special message button with a nice animation
            setTimeout(() => {
                specialBtn.style.display = 'block';
            }, 500);

            // Change the question text
            document.querySelector('h1').textContent = "I love you too!";
        });
    }
});