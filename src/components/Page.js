import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "./Search";

const Page = () => {
  return (
    <div className="page">
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/mybooks"></Route>
      </Switch>
    </div>
  );
};

export default Page;
