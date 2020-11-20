import { isEmpty } from "./check-if-empty.utils";

export const POKEMON_LOCAL_STORAGE_KEY = "MY_POKEMONS";

/**
 * getItemFromLocalStorage Function
 *
 * @since  17/11/2020
 * @access (public)
 *
 * @type     getItemFromLocalStorage Function
 * @description Get item from local storage
 * @param {String}  localStorageKey  Local storage key
 *
 */
export const getItemFromLocalStorage = (localStorageKey) => {
  const itemFromLocalStorage = localStorage.getItem(localStorageKey);
  if (!isEmpty(itemFromLocalStorage)) {
    return JSON.parse(itemFromLocalStorage);
  }
  return null;
};

/**
 * setItemToLocalStorage Function
 *
 * @since  17/11/2020
 * @access (public)
 *
 * @type     setItemToLocalStorage Function
 * @description Set item to local storage
 * @param {String}  localStorageKey  Local storage key
 * @param {Any}  valueForLocalStorage  Value to be pushed to local storage
 *
 */
export const setItemToLocalStorage = (localStorageKey, valueForLocalStorage) =>
  localStorage.setItem(localStorageKey, JSON.stringify(valueForLocalStorage));

/**
 * removeItemFromLocalStorage Function
 *
 * @since  18/11/2020
 * @access (public)
 *
 * @type     removeItemFromLocalStorage Function
 * @description Remove item from local storage
 * @param {String}  localStorageKey  Local storage key
 *
 */
export const removeItemFromLocalStorage = (localStorageKey) =>
  localStorage.removeItem(localStorageKey);

/**
 * checkIfPokemonNicknameAlreadyExists Function
 *
 * @since  18/11/2020
 * @access (public)
 *
 * @type     checkIfPokemonNicknameAlreadyExists Function
 * @description Check if pokemon nickname already exists in local storage
 * @param {String}  localStorageKey  Local storage key
 * @param {String}  pokemonNickname  Pokemon's nickname
 *
 */
export const checkIfPokemonNicknameAlreadyExists = (
  localStorageKey,
  pokemonNickname
) => {
  const myPokemons = getItemFromLocalStorage(localStorageKey);
  if (!isEmpty(myPokemons) && myPokemons.pokemons[pokemonNickname]) {
    return true;
  }
  return false;
};
