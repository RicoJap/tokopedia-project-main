import React from "react";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";

import { toTitleCase } from "../../utils/string.utils";
import { ceiling } from "../../utils/number.utils";
import usePokemonsList from "./PokemonsList.hook";
import PokemonsListSkeleton from "./PokemonsList.skeleton";

const styles = {
  content: {
    maxWidth: 400,
    minHeight:
      "calc(100vh - 60px)" /* margin of global wrapper to take into account bottom navigation */,
    margin: "0 auto",
    backgroundColor: "#f9f9fb",
  },
};

const PokemonsList = () => {
  const {
    currentlyDisplayedPokemonsList,
    currentPokemonsListPage,
    pageLimit,
    allPokemonsCount,
    onChangePage,
    onPokemonClick,
    loading,
  } = usePokemonsList();

  return (
    <div style={styles.content}>
      {!loading ? (
        <>
          {currentlyDisplayedPokemonsList.map((pokemon) => {
            return (
              <Card
                label={toTitleCase(pokemon.name)}
                labelVariant="h6"
                onClick={() => onPokemonClick(pokemon.name)}
              />
            );
          })}
          <Pagination
            onChange={onChangePage}
            page={currentPokemonsListPage}
            pages={ceiling(allPokemonsCount / pageLimit)}
          />
        </>
      ) : (
        <PokemonsListSkeleton />
      )}
    </div>
  );
};

export default PokemonsList;
