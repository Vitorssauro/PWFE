document.addEventListener("DOMContentLoaded", function () {
    const lights = document.querySelectorAll(".light");

    function toggleLights() {
        lights.forEach((light) => {
            light.classList.toggle("active");
        });
    }

    setInterval(toggleLights, 5000);
});
