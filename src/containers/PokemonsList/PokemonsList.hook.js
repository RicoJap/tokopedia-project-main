import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  fetchPokemonDetail,
  fetchPokemonsList,
  setCurrentPokemonsListPage,
} from "../../actions/actions";
import { toTitleCase } from "../../utils/string.utils";
import { ceiling } from "../../utils/number.utils";
import { isEmpty } from "../../utils/check-if-empty.utils";

const usePokemonsList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [
    currentlyDisplayedPokemonsList,
    setCurrentlyDisplayedPokemonsList,
  ] = useState([]);

  const {
    allPokemonsList,
    currentPokemonsListPage,
    pageOffset,
    pageLimit,
    allPokemonsCount,
  } = useSelector((state) => {
    return {
      allPokemonsList: state.PokemonReducer.pokemonsList,
      currentPokemonsListPage: state.PokemonReducer.currentPokemonsListPage,
      pageOffset: state.PokemonReducer.pageOffset,
      pageLimit: state.PokemonReducer.pageLimit,
      allPokemonsCount: state.PokemonReducer.allPokemonsCount,
    };
  });

  // To get the pokemons list from API in the first component mount
  useEffect(() => {
    dispatch(fetchPokemonsList({ offset: pageOffset, limit: pageLimit }));
  }, []);

  useEffect(() => {
    if (!isEmpty(allPokemonsList[currentPokemonsListPage])) {
      setCurrentlyDisplayedPokemonsList(
        allPokemonsList[currentPokemonsListPage]
      );
    }
  }, [allPokemonsList]);

  /* When the user changes page, it first checks if the pokemon data set for that page exists
   * if not then, calls the API for the next data set
   */
  const onChangePage = (_, newPage) => {
    dispatch(setCurrentPokemonsListPage(newPage));
    if (isEmpty(allPokemonsList[newPage])) {
      dispatch(
        fetchPokemonsList({
          offset: (newPage - 1) * pageLimit,
          limit: pageLimit,
        })
      );
    } else {
      setCurrentlyDisplayedPokemonsList(allPokemonsList[newPage]);
    }
  };

  // On click event handler when the user clicks on a pokemon card
  const onPokemonClick = (pokemonName) => {
    dispatch(fetchPokemonDetail(pokemonName));
    history.push(`/pokemon/${pokemonName}`);
  };

  return {
    currentlyDisplayedPokemonsList,
    setCurrentlyDisplayedPokemonsList,
    allPokemonsList,
    currentPokemonsListPage,
    pageOffset,
    pageLimit,
    allPokemonsCount,
    onChangePage,
    onPokemonClick,
  };
};

export default usePokemonsList;