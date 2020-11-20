import React from "react";

import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import NothingToShow from "../../components/NothingToShow/NothingToShow";

import Button from "../../components/Button/Button";
import { isEmpty } from "../../utils/check-if-empty.utils";
import { toTitleCase } from "../../utils/string.utils";
import useMyPokemonList from "./MyPokemonList.hook";

const styles = {
  content: {
    maxWidth: 400,
    minHeight:
      "calc(100vh - 60px)" /* margin of global wrapper to take into account bottom navigation */,
    margin: "0 auto",
    backgroundColor: "#f9f9fb",
  },
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

  const {
    currentlyDisplayedMyPokemonsList,
    myPokemonsList,
    currentMyPokemonsListPage,
    pagesCount,
    onPokemonClick,
    onChangePage,
    onReleasePokemon,
  } = useMyPokemonList();

  return (
    <div style={styles.content}>
      {!isEmpty(currentlyDisplayedMyPokemonsList) ? (
        <div>
          {Object.keys(currentlyDisplayedMyPokemonsList).map(
            (pokemonNickname) => {
              const pokemonName = myPokemonsList[pokemonNickname];
              return (
                <Card
                  key={pokemonNickname}
                  label={pokemonNickname}
                  labelVariant="h6"
                  subLabel={toTitleCase(pokemonName)}
                  onClick={() => onPokemonClick(pokemonName)}
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
            pages={pagesCount}
          />
        </div>
      ) : (
        <NothingToShow label={"Sorry, you have not caught any pokemon yet"} />
      )}
    </div>
  );
};

export default MyPokemonList;
