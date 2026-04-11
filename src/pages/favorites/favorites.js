import { getFavorites, removeFavorite } from "../../services/favorites.js";

const container = document.getElementById("favoritesContainer");

function renderFavorites() {

    if (!container) return;

    container.innerHTML = "";

    const favorites = getFavorites();

    favorites.forEach((fav, index) => {

        const div = document.createElement("div");
        div.classList.add("favorite-card");

        const text = document.createElement("div");
        text.textContent = fav.data;

        const deleteBtn = document.createElement("i");
        deleteBtn.classList.add("fa-solid", "fa-xmark", "delete-icon");

        deleteBtn.addEventListener("click", () => {
            removeFavorite(index);
            renderFavorites();
        });

        div.appendChild(text);
        div.appendChild(deleteBtn);

        container.appendChild(div);

    });
}

renderFavorites();