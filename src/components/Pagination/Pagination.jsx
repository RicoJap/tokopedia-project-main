import React from "react";
import MuiPagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

const usePaginationStyles = makeStyles({
    ul: {
        justifyContent: 'center',
    }
});

const Pagination = ({ pages, ...attributes }) => {
    const paginationClasses = usePaginationStyles();
    return <MuiPagination classes={paginationClasses} count={pages} color="primary" siblingCount={1} {...attributes} />;
};

export default Pagination;