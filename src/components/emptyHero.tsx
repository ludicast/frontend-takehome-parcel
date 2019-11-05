import React, { useContext } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button
} from "@material-ui/core";
import { SearchContext } from "../searchContext";
import { fetchGemsAsync } from "../store/actions";

export const EmptyHero = ({ msg }: { msg: string }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { setQuery } = useContext(SearchContext);

  const search = (gem: string) => () => {
    setQuery(gem);
    history.push("/");
    dispatch(fetchGemsAsync.request(gem));
  };

  return (
    <Card>
      <CardHeader>
        <Typography variant="h5" component="h5">
          {msg}
        </Typography>
      </CardHeader>
      <CardContent>
        <Typography>
          Type in the search above the name of a Gem that interests you. If you
          want a head start, you may search for
          <Button onClick={search("rails")} variant="outlined" color="primary">
            rails
          </Button>
          ,
          <Button
            onClick={search("capybara")}
            variant="outlined"
            color="primary"
          >
            capybara
          </Button>
          , or
          <Button onClick={search("rspec")} variant="outlined" color="primary">
            rspec
          </Button>
          .
        </Typography>
      </CardContent>
    </Card>
  );
};
