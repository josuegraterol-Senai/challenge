const toggleButton = document.getElementById("toggle-mode");
const body = document.body;
const icon = toggleButton.querySelector("i");

function updateIcon() {
    if (body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}

// Atualiza o ícone ao carregar a página
updateIcon();

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    updateIcon();
});