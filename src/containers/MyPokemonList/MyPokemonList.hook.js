import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  fetchMyPokemons,
  fetchPokemonDetail,
  releaseMyPokemon,
  setCurrentMyPokemonsListPage,
} from "../../actions/actions";
import { ceiling } from "../../utils/number.utils";

const useMyPokemonList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [
    currentlyDisplayedMyPokemonsList,
    setCurrentlyDisplayedMyPokemonsList,
	] = useState([]);
	
  const {
    myPokemonsList,
    myPokemonsListCount,
    currentMyPokemonsListPage,
    pageLimit,
  } = useSelector((state) => {
    return {
      myPokemonsList: state.PokemonReducer.myPokemonsList,
      myPokemonsListCount: state.PokemonReducer.myPokemonsListCount,
      currentMyPokemonsListPage: state.PokemonReducer.currentMyPokemonsListPage,
      pageLimit: state.PokemonReducer.pageLimit,
    };
	});
	
	const pagesCount = ceiling(myPokemonsListCount / pageLimit);


  // Get the user's pokemons list and divide them into per page
  useEffect(() => {
    dispatch(fetchMyPokemons());
    setCurrentlyDisplayedMyPokemonsList(
      Object.keys(myPokemonsList)
        .slice(0, pageLimit)
        .reduce((result, key) => {
          result[key] = myPokemonsList[key];
          return result;
        }, {})
    );
  }, []);

  // Get the next set of pokemons when user changes page
  useEffect(() => {
    setCurrentlyDisplayedMyPokemonsList(
      Object.keys(myPokemonsList)
        .slice(
          (currentMyPokemonsListPage - 1) * pageLimit,
          (currentMyPokemonsListPage - 1) * pageLimit + pageLimit
        )
        .reduce((result, key) => {
          result[key] = myPokemonsList[key];
          return result;
        }, {})
    );
  }, [currentMyPokemonsListPage, myPokemonsList]);

  // On click event handler when the user clicks on a pokemon card
  const onPokemonClick = (pokemonName) => {
    dispatch(fetchPokemonDetail(pokemonName));
    history.push(`/pokemon/${pokemonName}`);
  };

  // On click event handler when the user changes the page
  const onChangePage = (_, newPage) =>
    dispatch(setCurrentMyPokemonsListPage(newPage));

  // On click event handler when the user clicks on the release pokemon button
  const onReleasePokemon = (pokemonNickname) =>
		dispatch(releaseMyPokemon(pokemonNickname));
		

  return {
		currentlyDisplayedMyPokemonsList,
		myPokemonsList,
    myPokemonsListCount,
    currentMyPokemonsListPage,
		pageLimit,
		pagesCount,
		onPokemonClick,
		onChangePage,
		onReleasePokemon,
	};
};

export default useMyPokemonList;