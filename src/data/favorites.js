// Simple favorites storage
let favorites = [];

export const addToFavorites = (product) => {
    if (!favorites.some(item => item.id === product.id)) {
        favorites.push(product);
    }
};

export const removeFromFavorites = (productId) => {
    favorites = favorites.filter(item => item.id !== productId);
};

export const isFavorite = (productId) => {
    return favorites.some(item => item.id === productId);
};

export const getFavorites = () => {
    return [...favorites]; // Return copy
};

export const toggleFavorite = (product) => {
    if (isFavorite(product.id)) {
        removeFromFavorites(product.id);
    } else {
        addToFavorites(product);
    }
};

