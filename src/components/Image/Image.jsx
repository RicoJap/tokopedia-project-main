import React from "react";
import MuiAvatar from "@material-ui/core/Avatar";

/**
 * Image Component
 *
 * @since  16/11/2020
 * @access (public)
 *
 * @type     Functional Component
 * @param {String}  url the url or location of the image
 *
 */

const Image = ({ url, ...attributes }) => {
  return <MuiAvatar data-testid="image" src={url} {...attributes} />;
};

export default Image;
