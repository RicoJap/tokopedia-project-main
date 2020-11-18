import React, { useState } from "react";
import PokeballIcon from "../../assets/pokeball.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ListIcon from "@material-ui/icons/List";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import PokemonsList from "../PokemonsList/PokemonsList";

import "../../global.css";
import MyPokemonList from "../MyPokemonList/MyPokemonList";

const Home = () => {
    const [selectedAction, setSelectedAction] = useState(0);

    const renderBottomTab = () => {
        switch(selectedAction) {
            case 0:
                return <PokemonsList />
            case 1:
                return <MyPokemonList />
            default:
                return <PokemonsList />
        }
    }

    return (
        <div className="Global-wrapper">
            {renderBottomTab()}
            <BottomNavigation
                selectedAction={selectedAction}
                onChange={(_, newAction) => setSelectedAction(newAction)}
                actions={[
                    { label: "Pokemons List", icon: <ListIcon /> },
                    { label: "My Pokemons", icon: <FavoriteIcon /> },
                ]}
            />
        </div>
    );
};

export default Home;
