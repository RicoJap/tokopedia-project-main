import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ListIcon from "@material-ui/icons/List";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import PokemonsList from "../PokemonsList/PokemonsList";
import MyPokemonList from "../MyPokemonList/MyPokemonList";
import useHome from "./Home.hook";


const styles = {
  wrapper: {
    backgroundColor: "#eaeaea",
    margin: "0 0 60px 0",
  },

  content: {
    maxWidth: 400,
    minHeight:
      "calc(100vh - 60px)" /* margin of global wrapper to take into account bottom navigation */,
    margin: "0 auto",
    backgroundColor: "#f9f9fb",
  },
};

const Home = () => {
  const { onChangeBottomNavigationAction, selectedBottomAction } = useHome();

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
    <div style={styles.wrapper}>
      {renderBottomTab()}
      <BottomNavigation
        selectedAction={selectedBottomAction}
        onChange={onChangeBottomNavigationAction}
        actions={[
          { label: "Pokemons List", icon: <ListIcon /> },
          { label: "My Pokemons", icon: <FavoriteIcon /> },
        ]}
      />
    </div>
  );
};

export default Home;
