import React from "react";
import MuiList from "@material-ui/core/List";
import MuiListItem from "@material-ui/core/ListItem";
import MuiListItemIcon from "@material-ui/core/ListItemIcon";
import MuiListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

import { isEmpty } from "../../utilities/check-if-empty.utils";
import { toTitleCase } from "../../utilities/string.utils";
import { PRIMARY_COLOR } from "../../utilities/theme.const";

const useListItemStyles = makeStyles({
  root: {
    backgroundColor: PRIMARY_COLOR,
    color: "#ffffff",
    opacity: 0.75,
  },
});

/**
 * List Component
 *
 * @since  15/11/2020
 * @access (public)
 *
 * @type     Functional Component
 * @param {Array}  listItems  Items to be rendered by the list
 * @param {NUMBER}  iconSelector  the key selector of each item object to get the icon for that particular item
 * @param {Function}  labelSelector  the key selector of each item object to get the label for that particular item
 *
 */

const List = ({
  listItems,
  iconSelector = "icon",
  labelSelector = "label",
}) => {
  const listItemStyles = useListItemStyles();

  return (
    <MuiList>
      {listItems.map((listItem, i) => {
        return (
          <MuiListItem key={i} classes={listItemStyles} divider>
            {!isEmpty(listItem[iconSelector]) && (
              <MuiListItemIcon>{listItem[iconSelector]}</MuiListItemIcon>
            )}
            <MuiListItemText data-testid={listItem[labelSelector]} primary={toTitleCase(listItem[labelSelector])} />
          </MuiListItem>
        );
      })}
    </MuiList>
  );
};

export default List;
