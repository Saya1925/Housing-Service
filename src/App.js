import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Membership from "./components/Membership";
import Professionals from "./components/Professionals";
import CreateTask from "./components/CreateTask";
import ViewTask from "./components/ViewTask";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/membership" component={Membership} />
        <Route path="/professionals" component={Professionals} />
        <Route path="/create-task" component={CreateTask} />
        <Route path="/view-task/:id" component={ViewTask} />
      </div>
    </Router>
  );
}

export default App;
