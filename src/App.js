import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import Login from "./Login";
import Membership from "./Membership";
import Professionals from "./Professionals";
import CreateTask from "./CreateTask";
import ViewTask from "./ViewTask";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={Login} />
        <Route path="/Membership" component={Membership} />
        <Route path="/Professionals" component={Professionals} />
        <Route path="/Create-task" component={CreateTask} />
        <Route path="/View-task/:id" component={ViewTask} />
      </div>
    </Router>
  );
}

export default App;
