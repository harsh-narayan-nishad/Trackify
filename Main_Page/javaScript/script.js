document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loader');

    // Add 'hide' class after a short delay to trigger the animation
    setTimeout(() => {
        loader.classList.add('hide');
    }, 2000);
});

setTimeout(() => {
    document.querySelectorAll('.dot').forEach(el => el.style.display = 'none');
}, 2000);

function moveCircle(circleId) {
    const circle = document.getElementById(circleId);
    const maxX = window.innerWidth - circle.clientWidth;
    const maxY = window.innerHeight - circle.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    circle.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function moveCircles() {
    moveCircle('movingCircle');
    moveCircle('movingCircle2');
}

// Call the moveCircles function initially and set it to repeat at intervals for both circles
moveCircles();
setInterval(moveCircles, 5000); // Adjust the interval as needed (5000 milliseconds = 5 seconds)