import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  catchPokemon,
  fetchPokemonDetail,
  setLoading,
} from "../../actions/actions";
import { isEmpty } from "../../utils/check-if-empty.utils";
import { toTitleCase } from "../../utils/string.utils";
import {
  checkIfPokemonNicknameAlreadyExists,
  POKEMON_LOCAL_STORAGE_KEY,
} from "../../utils/local-storage.utils";
import { isSuccess } from "../../utils/catch-probability";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../utils/theme.const";

const usePokemonDetail = (match) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [snackbarStatus, setSnackbarStatus] = useState({
    open: false,
    severity: "",
    message: "",
  });
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [formDialogTextField, setFormDialogTextField] = useState("");

  const { currentPokemon, loading } = useSelector((state) => {
    return {
      currentPokemon: state.PokemonReducer.currentPokemon,
      loading: state.PokemonReducer.loading,
    };
  });

  const pokemonNameFromSlug = match.params.pokemonName;
  const pokemonName = !isEmpty(currentPokemon)
    ? toTitleCase(currentPokemon.name)
    : "-";

  // Get the pokemon render when this component first mounted
  useEffect(() => {
    if (isEmpty(currentPokemon)) {
      dispatch(setLoading());
      dispatch(fetchPokemonDetail(pokemonNameFromSlug));
    }
  }, []);

  // On click handler when the Catch Pokemon button is clicked
  const onCatchPokemonClick = () => {
    if (isSuccess()) {
      setFormDialogOpen(true);
      setSnackbarStatus({
        open: true,
        severity: "success",
        message: `Congratulations you have caught ${pokemonName}`,
      });
    } else {
      setSnackbarStatus({
        open: true,
        severity: "error",
        message: `Too bad! You did not caught ${pokemonName}`,
      });
    }
  };

  // Change the nickname of the pokemon
  const onChangeNicknameField = (evt) =>
    setFormDialogTextField(evt.target.value);

  // On submit handler when the user clicked on the Submit button in the form dialog
  const onSubmitNewNickname = () => {
    if (formDialogTextField !== "") {
      if (
        !checkIfPokemonNicknameAlreadyExists(
          POKEMON_LOCAL_STORAGE_KEY,
          formDialogTextField
        )
      ) {
        dispatch(catchPokemon(formDialogTextField, currentPokemon.name));
        setFormDialogOpen(false);
        history.goBack();
      } else {
        setSnackbarStatus({
          open: true,
          severity: "error",
          message: `Nickname already exists, please give another nickname`,
        });
      }
    }
  };

  return {
    snackbarStatus,
    setSnackbarStatus,
    formDialogOpen,
    setFormDialogOpen,
    formDialogTextField,
    setFormDialogTextField,
    currentPokemon,
    pokemonNameFromSlug,
    pokemonName,
    onCatchPokemonClick,
    onChangeNicknameField,
    onSubmitNewNickname,
    loading,
  };
};

export default usePokemonDetail;
