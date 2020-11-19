import * as types from "../actions/types";
import { isEmpty } from "../utilities/check-if-empty.utils";
import {
    getItemFromLocalStorage,
    POKEMON_LOCAL_STORAGE_KEY,
    removeItemFromLocalStorage,
    setItemToLocalStorage,
} from "../utilities/local-storage.utils";

const initialState = {
    pokemonsListCount: null,
    pokemonsList: [],
    currentPokemon: null,
    myPokemonsList: {},
    searchTerm: "",
    myPokemonsListCount: null,
    pageOffset: 0,
    pageLimit: 20,
    currentPokemonsListPage: 1,
    currentMyPokemonsListPage: 1,
    selectedBottomAction: 0 // the index of the bottom action used by the Material-UI library to determine which destination is rendered
};

function PokemonReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_POKEMONS_LIST: {
            if (action.payload.status === 200) {
                return {
                    ...state,
                    pokemonsList: {
                        ...state.pokemonsList,
                        [state.currentPokemonsListPage]:
                            action.payload.data.results,
                    },
                    allPokemonsCount: action.payload.data.count,
                    pageOffset:
                        (state.currentPokemonsListPage - 1) * state.pageLimit,
                };
            }
        }
        case types.FETCH_POKEMON_DETAIL: {
            if (action.payload.status === 200) {
                return {
                    ...state,
                    currentPokemon: {
                        ...action.payload.data,
                        types: action.payload.data.types.map(
                            (type) => type.type
                        ),
                        moves: action.payload.data.moves.map(
                            (move) => move.move
                        ),
                    },
                };
            }
        }
        case types.FETCH_MY_POKEMONS: {
            let myPokemons = getItemFromLocalStorage(POKEMON_LOCAL_STORAGE_KEY);
            if (isEmpty(myPokemons)) {
                return {
                    ...state,
                    myPokemonsList: {},
                    myPokemonsListCount: 0,
                };
            }
            return {
                ...state,
                myPokemonsList: myPokemons.pokemons,
                myPokemonsListCount: myPokemons.count,
            };
        }
        case types.RELEASE_MY_POKEMON: {
            const pokemonNickname = action.payload;
            const myPokemons = getItemFromLocalStorage(
                POKEMON_LOCAL_STORAGE_KEY
            );
            if (myPokemons.pokemons[pokemonNickname]) {
                // (Logic): Check if the pokemon deleted is the last one
                if (myPokemons.count === 1) {
                    removeItemFromLocalStorage(POKEMON_LOCAL_STORAGE_KEY);
                    return {
                        ...state,
                        myPokemonsList: {},
                    };
                } else {
                    const {
                        [pokemonNickname]: nickname,
                        ...newMyPokemons
                    } = myPokemons.pokemons;
                    myPokemons.count -= 1;
                    setItemToLocalStorage(POKEMON_LOCAL_STORAGE_KEY, {
                        count: myPokemons.count,
                        pokemons: newMyPokemons,
                    });
                    return {
                        ...state,
                        myPokemonsList: newMyPokemons,
                    };
                }
            }
            return {
                ...state,
                myPokemonsList: myPokemons,
            };
        }
        case types.CATCH_POKEMON: {
            let newPokemonsList;
            const { pokemonNickname, pokemonName } = action.payload;
            const myPokemons = getItemFromLocalStorage(
                POKEMON_LOCAL_STORAGE_KEY
            );

            if (!isEmpty(myPokemons)) {
                // (Logic): Check if there is existing pokemon
                newPokemonsList = {
                    count: myPokemons.count + 1,
                    pokemons: {
                        ...myPokemons.pokemons,
                        [pokemonNickname]: pokemonName,
                    },
                };
            } else {
                newPokemonsList = {
                    count: 1,
                    pokemons: { [pokemonNickname]: pokemonName },
                };
            }

            setItemToLocalStorage(POKEMON_LOCAL_STORAGE_KEY, newPokemonsList);
            return {
                ...state,
                myPokemonsList: newPokemonsList,
            };
        }
        case types.SET_CURRENT_POKEMONS_LIST_PAGE: {
            const newPage = action.payload;
            return {
                ...state,
                currentPokemonsListPage: newPage,
            };
        }
        case types.SET_CURRENT_MY_POKEMONS_LIST_PAGE: {
            const newPage = action.payload;
            return {
                ...state,
                currentMyPokemonsListPage: newPage,
            };
        }
        case types.SET_SELECTED_BOTTOM_ACTION: {
            const selectedBottomAction = action.payload;
            return {
                ...state,
                selectedBottomAction
            }
        }
        default:
            return state;
    }
}

export default PokemonReducer;
