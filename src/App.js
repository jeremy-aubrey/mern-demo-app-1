import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Users from "./user/pages/Users";

const App = () => {
  return (
    <Router>
      <Route path="/" exact>
        <h1>Home page</h1>
      </Route>
      <Route path="/users" exact>
        <Users />
      </Route>
    </Router>
  );
};

export default App;
