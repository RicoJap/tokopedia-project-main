import React from 'react';
import MuiAvatar from '@material-ui/core/Avatar';


const Image = ({url, ...attributes}) => {
    return (
        <MuiAvatar src={url} {...attributes} />
    )
}

export default Image;