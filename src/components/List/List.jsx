import React from 'react';
import MuiList from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import MuiListItemIcon from '@material-ui/core/ListItemIcon';
import MuiListItemText from '@material-ui/core/ListItemText';
import { isEmpty } from '../../utilities/check-if-empty.utils';
import { toTitleCase } from '../../utilities/string.utils';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../utilities/theme.const';

const styles = {
    listItem: {
        backgroundColor: PRIMARY_COLOR,
        color: '#ffffff',
        opacity: 0.75
    }
}

const List = ({listItems, iconSelector='icon', labelSelector='label'}) => {
    return (
        <MuiList>
            {listItems.map((listItem, i) => {
                return (
                    <MuiListItem key={i} style={styles.listItem} divider>
                        {!isEmpty(listItem[iconSelector]) ? <MuiListItemIcon>
                            {listItem[iconSelector]}
                        </MuiListItemIcon> : null}
                        <MuiListItemText primary={toTitleCase(listItem[labelSelector])} />
                    </MuiListItem>
                )
            })}
        </MuiList>
    )
}

export default List;