import axios from "axios"; //import axios library for performing ajax request
import * as types from "../actions/types";
import { isEmpty } from "../utilities/check-if-empty.utils";

const ROOT_URL = `https://pokeapi.co/api/v2`;

export const fetchPokemonsList = async (params) => {
    let url = `${ROOT_URL}/pokemon`;
    if (!isEmpty(params)) {
        const additionalParams = Object.keys(params)
            .map((key) => key + "=" + params[key])
            .join("&");
        if (additionalParams) {
            url += `?${additionalParams}`;
        }
    }
    const request = axios.get(url).catch((error) => {
        return error.response;
    });
    return {
		type: types.FETCH_POKEMONS_LIST,
		payload: request
	};
};

export const fetchPokemonDetail = (pokemonName) => {
	let url = `${ROOT_URL}/pokemon/${pokemonName}`;
    const request = axios.get(url).catch((error) => {
        return error.response;
    });
    return {
		type: types.FETCH_POKEMON_DETAIL,
		payload: request
	};;
}

export const fetchMyPokemons = () => {
	return {
		type: types.FETCH_MY_POKEMONS,
	}
}

export const catchPokemon = (pokemonNickname, pokemonName) => {
	return {
		type: types.CATCH_POKEMON,
		payload: {pokemonNickname, pokemonName}
	}
}

export const releaseMyPokemon = (pokemonNickname) => {
	return {
		type: types.RELEASE_MY_POKEMON,
		payload: pokemonNickname
	}
}

export const setCurrentPokemonsListPage = (newPage) => {
	return {
		type: types.SET_CURRENT_POKEMONS_LIST_PAGE,
		payload: newPage
	}
}

export const setCurrentMyPokemonsListPage = (newPage) => {
	return {
		type: types.SET_CURRENT_MY_POKEMONS_LIST_PAGE,
		payload: newPage
	}
}

export const setSelectedBottomAction = (bottomAction) => {
	return {
		type: types.SET_SELECTED_BOTTOM_ACTION,
		payload: bottomAction
	}
}