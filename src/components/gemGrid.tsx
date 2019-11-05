import React from "react";
import { Grid, Container } from "@material-ui/core";
import * as _ from "lodash";

import { GemCard } from "./gemCard";
import { Gem } from "../models";
import { useSelector } from "react-redux";
import { areGemsLoading } from "../store/selectors";
import { useStyles } from "./classes";

import { SkeletonCard } from "./skeletonCard";

export const GemGrid = ({ gems }: { gems: Gem[] }) => {
  const classes = useStyles();

  const loadingList = useSelector(areGemsLoading);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {loadingList
          ? _.range(0, 6).map(key => <SkeletonCard key={key}></SkeletonCard>)
          : gems.map((gem, key) => (
              <Grid item key={key} xs={12} sm={6} md={4}>
                <GemCard gem={gem}></GemCard>
              </Grid>
            ))}
      </Grid>
    </Container>
  );
};
