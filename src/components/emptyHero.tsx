import React from "react";
import { useHistory } from "react-router";

import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button
} from "@material-ui/core";
import { useStyles } from "./classes";

export const EmptyHero = ({ msg }: { msg: string }) => {
  const history = useHistory();
  const classes = useStyles();
  const search = (gem: string) => () => {
    history.push(`/gems/${gem}`);
  };

  return (
    <Card className={classes.hero}>
      <CardContent>
        <Typography variant="h5" component="h5">
          {msg}
        </Typography>
        <hr />
        <Typography>
          Type in the search above the name of a Gem that interests you. If you
          want a head start, click to search for &nbsp;
          <Button onClick={search("rails")} variant="outlined" color="primary">
            rails
          </Button>
          , &nbsp;
          <Button
            onClick={search("capybara")}
            variant="outlined"
            color="primary"
          >
            capybara
          </Button>
          , or &nbsp;
          <Button onClick={search("rspec")} variant="outlined" color="primary">
            rspec
          </Button>
          .
        </Typography>
      </CardContent>
    </Card>
  );
};
