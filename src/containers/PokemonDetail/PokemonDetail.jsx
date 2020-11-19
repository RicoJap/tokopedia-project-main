import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button/Button";
import FormDialog from "../../components/FormDialog/FormDialog";
import Image from "../../components/Image/Image";
import List from "../../components/List/List";
import Snackbar from "../../components/Snackbar/Snackbar";
import Typography from "../../components/Typography/Typography";

import { catchPokemon, fetchPokemonDetail } from "../../actions/actions";
import { isEmpty } from "../../utilities/check-if-empty.utils";
import { toTitleCase } from "../../utilities/string.utils";
import {
  checkIfPokemonNicknameAlreadyExists,
  POKEMON_LOCAL_STORAGE_KEY,
} from "../../utilities/local-storage.utils";
import { isSuccess } from "../../utilities/catch-probability";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../utilities/theme.const";

const styles = {
  pokemonDetailWrapper: {
    marginBottom: 0,
  },
  avatar: {
    margin: "0 auto",
    width: 120,
    height: 120,
    backgroundColor: SECONDARY_COLOR,
    padding: "0.5em",
    opacity: 0.75,
  },
  typesSection: {
    margin: "1em",
  },
  movesSection: {
    margin: "1em",
    maxHeight: 500,
    overflow: "auto",
  },
  pokemonNameTitle: { textAlign: "center", color: PRIMARY_COLOR },
  catchPokemonButton: {
    display: "block",
    width: "95%",
    margin: "0 auto",
  },
};

const PokemonDetail = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [snackbarStatus, setSnackbarStatus] = useState({
    open: false,
    severity: "",
    message: "",
  });
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [formDialogTextField, setFormDialogTextField] = useState("");

  const currentPokemon = useSelector((state) => {
    return state.PokemonReducer.currentPokemon;
  });

  const pokemonNameFromSlug = match.params.pokemonName;
  const pokemonName = !isEmpty(currentPokemon)
    ? toTitleCase(currentPokemon.name)
    : "-";

  // Get the pokemon render when this component first mounted
  useEffect(() => {
    if (isEmpty(currentPokemon)) {
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

  return (
    <div className="Global-wrapper" style={styles.pokemonDetailWrapper}>
      <div className="Global-content">
        {!isEmpty(currentPokemon) && (
          <div>
            <Image
              url={currentPokemon.sprites.front_default}
              alt={currentPokemon.name}
              style={styles.avatar}
            />
            <Typography
              label={pokemonName}
              variant={"h3"}
              style={styles.pokemonNameTitle}
            />
            <div style={styles.typesSection}>
              <Typography label={"Types"} variant={"h4"} />
              <List listItems={currentPokemon.types} labelSelector="name" />
            </div>
            <div style={styles.movesSection}>
              <Typography label={"Moves"} variant={"h4"} />
              <List listItems={currentPokemon.moves} labelSelector="name" />
            </div>
            <Button
              onClick={onCatchPokemonClick}
              style={styles.catchPokemonButton}
              label={`Catch ${pokemonName}`}
            />
          </div>
        )}

        <FormDialog
          open={formDialogOpen}
          setOpen={setFormDialogOpen}
          dialogTitle="Set Nickname"
          dialogSubTitle="Set nickname for your newly caught pokemon"
          textFieldLabel="Nickname"
          textFieldValue={formDialogTextField}
          textFieldOnChange={onChangeNicknameField}
          dialogConfirmButtonLabel="Save Nickname"
          onSubmit={onSubmitNewNickname}
        />

        <Snackbar
          snackbarStatus={snackbarStatus}
          autoHideDuration={5000}
          handleClose={setSnackbarStatus}
          variant="filled"
        />
      </div>
    </div>
  );
};

export default PokemonDetail;
