import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Tutorials from "./pages/Tutorials";
import { GlobalStyles } from "./styles/GobalStyles";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Pricing" exact component={Pricing} />
          <Route path="/Courses" exact component={Courses} />
          <Route path="/Tutorials" exact component={Tutorials} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
