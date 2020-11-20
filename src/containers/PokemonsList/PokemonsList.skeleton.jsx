import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const styles = {
  skeletonCard: {
    marginBottom: "1em",
  },
};

const PokemonsListSkeleton = () => {
  return (
    <>
      {Array(20)
        .fill()
        .map((_, i) => {
          return (
            <Skeleton
              style={styles.skeletonCard}
              key={i}
              variant="rect"
              width="100%"
              height={72}
            />
          );
        })}
    </>
  );
};

export default PokemonsListSkeleton;
