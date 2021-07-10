import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import battleLogList from "./BattleLog/battleLogList";
import Home from "./Home/Home";
import nightmareList from "./Nightmare/nightmareList";
import PageA from "./PageA";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/page_a" exact component={PageA} />
        <Route path="/battlelog" exact component={battleLogList} />
        <Route path="/nightmare" exact component={nightmareList} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default App;