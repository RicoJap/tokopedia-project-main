import React from "react";
import MuiBottomNavigation from "@material-ui/core/BottomNavigation";
import MuiBottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";

import "./BottomNavigation.css";

const useBottomNavigationActionStyles = makeStyles({
    root: {
        // color: "#fff",
        "&$selected": {
            color: "#7D4CDB",
        },
    },
    selected: {
        color: "#7D4CDB",
    },
});

const BottomNavigation = ({ actions, selectedAction, onChange, ...props }) => {
    const bottomNavigationActionClasses = useBottomNavigationActionStyles();
    return (
        <MuiBottomNavigation
            value={selectedAction}
            onChange={onChange}
            showLabels
            className="BottomNavigation-wrapper"
            {...props}
        >
            {actions.map((action, i) => {
                return (
                    <MuiBottomNavigationAction
                        classes={{
                            root: bottomNavigationActionClasses.root,
                            selected: bottomNavigationActionClasses.selected,
                        }}
                        key={i}
                        label={action.label}
                        icon={action.icon}
                        // className="BottomNavigation-action"
                    />
                );
            })}
        </MuiBottomNavigation>
    );
};

export default BottomNavigation;
