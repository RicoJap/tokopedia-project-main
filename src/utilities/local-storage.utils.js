import { isEmpty } from "./check-if-empty.utils";

export const POKEMON_LOCAL_STORAGE_KEY = 'MY_POKEMONS';

export const getItemFromLocalStorage = (localStorageKey) => {
    const itemFromLocalStorage = localStorage.getItem(localStorageKey);
    if (!isEmpty(itemFromLocalStorage)) {
        return JSON.parse(itemFromLocalStorage);
    }
    return null;
};

export const setItemToLocalStorage = (localStorageKey, valueForLocalStorage) =>
    localStorage.setItem(localStorageKey, JSON.stringify(valueForLocalStorage));

export const removeItemFromLocalStorage = (localStorageKey) =>
    localStorage.removeItem(localStorageKey);

export const checkIfPokemonNicknameAlreadyExists = (localStorageKey, pokemonNickname) => {
    const myPokemons = getItemFromLocalStorage(localStorageKey);
    if(!isEmpty(myPokemons) && myPokemons.pokemons[pokemonNickname]) {
        return true;
    }
    return false;
}