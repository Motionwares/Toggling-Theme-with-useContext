import React, { useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
