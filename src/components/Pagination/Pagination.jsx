import React from "react";
import MuiPagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

const usePaginationStyles = makeStyles({
  ul: {
    justifyContent: "center",
  },
});

/**
 * Pagination Component
 *
 * @since  15/11/2020
 * @access (public)
 *
 * @type     Functional Component
 * @param {Number}  pages  No of pages to be rendered by the Pagination component
 *
 */

const Pagination = ({ pages, ...attributes }) => {
  const paginationClasses = usePaginationStyles();
  return (
    <MuiPagination
      classes={paginationClasses}
      count={pages}
      color="primary"
      siblingCount={1}
      {...attributes}
    />
  );
};

export default Pagination;
