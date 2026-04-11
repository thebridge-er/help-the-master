export function saveFavorite(type, data) {
    const user = localStorage.getItem("user");

    const favorites =
        JSON.parse(localStorage.getItem(`favorites_${user}`)) || [];

    favorites.push({
        type,
        data
    });

    localStorage.setItem(
        `favorites_${user}`,
        JSON.stringify(favorites)
    );
}

export function getFavorites() {
    const user = localStorage.getItem("user");

    return JSON.parse(
        localStorage.getItem(`favorites_${user}`)
    ) || [];
}

export function removeFavorite(index) {
    const user = localStorage.getItem("user");

    const favorites =
        JSON.parse(localStorage.getItem(`favorites_${user}`)) || [];

    favorites.splice(index, 1);

    localStorage.setItem(
        `favorites_${user}`,
        JSON.stringify(favorites)
    );
}