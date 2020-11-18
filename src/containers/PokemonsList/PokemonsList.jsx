import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";

import { toTitleCase } from "../../utilities/string.utils";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    fetchPokemonDetail,
    fetchPokemonsList,
    setCurrentPokemonsListPage,
} from "../../actions/actions";
import { ceiling } from "../../utilities/number.utils";
import { isEmpty } from "../../utilities/check-if-empty.utils";

const PokemonsList = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [
        currentlyDisplayedPokemonsList,
        setCurrentlyDisplayedPokemonsList,
    ] = useState([]);

    const allPokemonsList = useSelector((state) => {
        return state.PokemonReducer.pokemonsList;
    });

    const currentPokemonsListPage = useSelector((state) => {
        return state.PokemonReducer.currentPokemonsListPage;
    });
    const pageOffset = useSelector((state) => {
        return state.PokemonReducer.pageOffset;
    });
    const pageLimit = useSelector((state) => {
        return state.PokemonReducer.pageLimit;
    });
    const allPokemonsCount = useSelector((state) => {
        return state.PokemonReducer.allPokemonsCount;
    });


    useEffect(() => {
        const initialise = async () => {
            await dispatch(
                fetchPokemonsList({ offset: pageOffset, limit: pageLimit })
            );

            console.log("abcabc", allPokemonsList);
        };
        initialise();
    }, []);

    useEffect(() => {
        console.log('abcabc', allPokemonsList)
        if(!isEmpty(allPokemonsList[currentPokemonsListPage])) {
            setCurrentlyDisplayedPokemonsList(allPokemonsList[currentPokemonsListPage]);
        }
    }, [allPokemonsList]);

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

    const onPokemonClick = (pokemonName) => {
        dispatch(fetchPokemonDetail(pokemonName));
        history.push(`/pokemon/${pokemonName}`);
    };

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