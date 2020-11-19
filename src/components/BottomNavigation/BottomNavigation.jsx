import React from "react";
import MuiBottomNavigation from "@material-ui/core/BottomNavigation";
import MuiBottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";

const useBottomNavigationStyles = makeStyles({
  root: {
		position: 'fixed',
    bottom: 0,
    width: '100%',
  },
});

const useBottomNavigationActionStyles = makeStyles({
  root: {
    "&$selected": {
      color: "#7D4CDB",
    },
  },
  selected: {
    color: "#7D4CDB",
  },
});

/**
 * BottomNavigation Component
 *
 * @since  16/11/2020
 * @access (public)
 *
 * @type     Functional Component
 * @param {Array}  actions  Actions inside the bottom navigation for users to select which action
 * @param {Number}  selectedAction  The selected action in the form of index of the actions array
 * @param {Function}  onChange  onChange handler
 *
 */

const BottomNavigation = ({ actions, selectedAction, onChange, ...props }) => {

	const bottomNavigationStyles = useBottomNavigationStyles();
	const bottomNavigationActionClasses = useBottomNavigationActionStyles();

  return (
    <MuiBottomNavigation
      value={selectedAction}
      onChange={onChange}
      showLabels
      classes={bottomNavigationStyles}
      {...props}
    >
      {actions.map((action, i) => {
        return (
          <MuiBottomNavigationAction
            classes={bottomNavigationActionClasses}
            key={i}
            label={action.label}
            icon={!!action.icon && action.icon}
            data-testid={action.label}
          />
        );
      })}
    </MuiBottomNavigation>
  );
};

export default BottomNavigation;
