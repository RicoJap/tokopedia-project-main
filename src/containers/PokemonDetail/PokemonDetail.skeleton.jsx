import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const styles = {
    skeletonAvatar: {
        margin: '0 auto',
        padding: '0.5em'
    },
    skeletonList: {
        margin: '1em',
    }
}

const PokemonDetailSkeleton = () => {
    return (
        <>
        <Skeleton style={styles.skeletonAvatar} variant="circle" width={120} height={120} />
        <Skeleton variant="text" />
        <Skeleton style={styles.skeletonList} variant="rect" height={150} />
        <Skeleton style={styles.skeletonList} variant="rect" height={500} />
        <Skeleton variant="rect" width="100%" height={36} />
        </>
    )
}

export default PokemonDetailSkeleton;