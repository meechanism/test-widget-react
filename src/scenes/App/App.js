import React from "react";
import Purchase from "../Purchase/Purchase";
import ThankYou from "../ThankYou/ThankYou";
import { Switch, Route } from "react-router-dom";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Purchase} />
      <Route path="/thank-you" component={ThankYou} />
    </Switch>
  </div>
);

export default App;
