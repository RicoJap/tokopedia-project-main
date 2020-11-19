import React from "react";
import Image from "../Image/Image";
import Typography from "../Typography/Typography";

import Pokeball from "../../assets/pokeball-big.png";

const styles = {
  image: {
    height: 100,
    width: 100,
    display: "block",
    margin: "auto",
    paddingTop: "50%",
  },
  label: {
    display: "block",
    textAlign: "center",
    margin: "1em",
  },
};

const NothingToShow = ({ label }) => {
  return (
    <div>
      <Image src={Pokeball} variant="square" style={styles.image} />
      <Typography
        variant="p"
        color="textSecondary"
        label={label}
        style={styles.label}
      />
    </div>
  );
};

export default NothingToShow;
