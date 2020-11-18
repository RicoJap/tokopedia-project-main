import React from "react";
import MuiCard from "@material-ui/core/Card";
import MuiCardActions from "@material-ui/core/CardActions";
import MuiCardContent from "@material-ui/core/CardContent";

import "./Card.css";
import Typography from "../Typography/Typography";
import { Divider } from "@material-ui/core";

const Card = ({ label, labelVariant = "p", children, styles = {}, separateContentAndButtons = false, ...attributes }) => {
    const cardActionsChildren = children;
    return (
        <MuiCard className="Card-wrapper" {...attributes}>
            <MuiCardContent style={styles.cardContent}>
                <Typography label={label} variant={labelVariant} />
                {separateContentAndButtons &&<Divider style={styles.divider} />}
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
