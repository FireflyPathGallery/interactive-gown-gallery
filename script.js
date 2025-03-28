document.addEventListener("DOMContentLoaded", function () {
    const firefliesContainer = document.querySelector(".fireflies");

    function createFirefly() {
        const firefly = document.createElement("div");
        firefly.classList.add("firefly");

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        firefly.style.left = `${x}px`;
        firefly.style.top = `${y}px`;

        firefliesContainer.appendChild(firefly);

        setTimeout(() => {
            firefly.remove();
        }, 3000);
    }

    setInterval(createFirefly, 500);
});
