import React from "react";

import Button from "../../components/Button/Button";
import FormDialog from "../../components/FormDialog/FormDialog";
import Image from "../../components/Image/Image";
import List from "../../components/List/List";
import Snackbar from "../../components/Snackbar/Snackbar";
import Typography from "../../components/Typography/Typography";

import { isEmpty } from "../../utils/check-if-empty.utils";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../utils/theme.const";
import usePokemonDetail from "./PokemonDetail.hook";

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
  const {
    snackbarStatus,
    setSnackbarStatus,
    formDialogOpen,
    setFormDialogOpen,
    formDialogTextField,
    currentPokemon,
    pokemonName,
    onCatchPokemonClick,
    onChangeNicknameField,
    onSubmitNewNickname,
  } = usePokemonDetail(match);

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
