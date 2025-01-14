import React from "react";
import { Heart } from "./heart";
import { Gem } from "../models";
import { useStyles } from "./classes";
import {
  Card,
  CardContent,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface GemCardProps {
  gem: Gem;
}

export const GemCard = ({ gem }: GemCardProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.cardHeader} variant="h5" component="h5">
          <Heart gem={gem}></Heart>
          <span>{gem.name}</span>
        </Typography>
        <hr />
        <Typography>
          <b>Current Version:</b> {gem.version}
        </Typography>
        <Typography>
          <b>Authors:</b> {gem.authors}
        </Typography>
      </CardContent>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <b>More Details</b>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{gem.info}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Card>
  );
};
