import React from "react";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";

import { toTitleCase } from "../../utils/string.utils";
import { ceiling } from "../../utils/number.utils";
import usePokemonsList from "./PokemonsList.hook";

const PokemonsList = () => {

  const {
    currentlyDisplayedPokemonsList,
    currentPokemonsListPage,
    pageLimit,
    allPokemonsCount,
    onChangePage,
    onPokemonClick,
  } = usePokemonsList();

  return (
    <div className="Global-content">
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
    </div>
  );
};

export default PokemonsList;
