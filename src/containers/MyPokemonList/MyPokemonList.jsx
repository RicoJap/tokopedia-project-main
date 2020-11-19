import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import NothingToShow from "../../components/NothingToShow/NothingToShow";

import {
  fetchMyPokemons,
  fetchPokemonDetail,
  releaseMyPokemon,
  setCurrentMyPokemonsListPage,
} from "../../actions/actions";
import { ceiling } from "../../utilities/number.utils";
import Button from "../../components/Button/Button";
import { isEmpty } from "../../utilities/check-if-empty.utils";

const styles = {
  cardContent: {
    paddingBottom: 0,
  },
  cardActions: {
    paddingLeft: 0,
    float: "right",
  },
  releaseButton: {
    color: "#f44336",
    borderColor: "#f44336",
  },
  divider: {
    marginTop: 20,
  },
};

const MyPokemonList = () => {
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

  return (
    <div className="Global-content">
      {!isEmpty(currentlyDisplayedMyPokemonsList) ? (
        <div>
          {Object.keys(currentlyDisplayedMyPokemonsList).map(
            (pokemonNickname) => {
              return (
                <Card
                  label={pokemonNickname}
                  labelVariant="h6"
                  onClick={() =>
                    onPokemonClick(myPokemonsList[pokemonNickname])
                  }
                  styles={styles}
                  separateContentAndButtons
                >
                  <Button
                    size="small"
                    label="Release"
                    style={styles.releaseButton}
                    onClick={(evt) => {
                      evt.preventDefault();
                      evt.stopPropagation();
                      onReleasePokemon(pokemonNickname);
                    }}
                  />
                </Card>
              );
            }
          )}
          <Pagination
            onChange={onChangePage}
            page={currentMyPokemonsListPage}
            pages={ceiling(myPokemonsListCount / pageLimit)}
          />
        </div>
      ) : (
        <NothingToShow label={"Sorry, you have not caught any pokemon yet"} />
      )}
    </div>
  );
};

export default MyPokemonList;
