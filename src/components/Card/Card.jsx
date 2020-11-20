import React from "react";
import MuiCard from "@material-ui/core/Card";
import MuiCardActions from "@material-ui/core/CardActions";
import MuiCardContent from "@material-ui/core/CardContent";
import Typography from "../Typography/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useCardStyles = makeStyles({
  root: {
    marginBottom: '1em',
    cursor: 'pointer'
  },
});

/**
 * Card Component
 *
 * @since  15/11/2020
 * @access (public)
 *
 * @type     Functional Component
 * @param {String}  label  Card label
 * @param {NUMBER}  labelVariant  Label HTML text tag variant e.g. h1, h2, h3, p
 * @param {ReactNode}  children  Children DOM node of the card
 * @param {Object}  styles  UYser defined styles
 * @param {Boolean}  separateContentAndButtons  Add a divider to separate content and buttons
 *
 */

const Card = ({
  label,
  labelVariant = "h6",
  subLabel,
  children,
  styles = {},
  separateContentAndButtons = false,
  ...attributes
}) => {

	const cardActionsChildren = children;
	const cardStyles = useCardStyles();

  return (
    <MuiCard classes={cardStyles} {...attributes}>
      <MuiCardContent style={styles.cardContent}>
        <Typography label={label} variant={labelVariant} data-testid="card-label" />
        {!!subLabel && <Typography label={subLabel} variant="subtitle2" color="textSecondary" data-testid="card-sub-label" />}
        {separateContentAndButtons && <Divider style={styles.divider} />}
        {!!cardActionsChildren ? (
          <MuiCardActions style={styles.cardActions}>
            {cardActionsChildren}
          </MuiCardActions>
        ) : null}
      </MuiCardContent>
    </MuiCard>
  );
};

export default Card;
