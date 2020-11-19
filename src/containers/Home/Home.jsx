import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ListIcon from "@material-ui/icons/List";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import PokemonsList from "../PokemonsList/PokemonsList";
import MyPokemonList from "../MyPokemonList/MyPokemonList";

import { useDispatch, useSelector } from "react-redux";
import { setSelectedBottomAction } from "../../actions/actions";

import "../../global.css";

const Home = () => {
  const dispatch = useDispatch();

  const selectedBottomAction = useSelector((state) => {
    return state.PokemonReducer.selectedBottomAction;
  });

	// Render the bottom navigation
  const renderBottomTab = () => {
    switch (selectedBottomAction) {
      case 0:
        return <PokemonsList />;
      case 1:
        return <MyPokemonList />;
      default:
        return <PokemonsList />;
    }
  };

  return (
    <div className="Global-wrapper">
      {renderBottomTab()}
      <BottomNavigation
        selectedAction={selectedBottomAction}
        onChange={(_, newAction) =>
          dispatch(setSelectedBottomAction(newAction))
        }
        actions={[
          { label: "Pokemons List", icon: <ListIcon /> },
          { label: "My Pokemons", icon: <FavoriteIcon /> },
        ]}
      />
    </div>
  );
};

export default Home;
