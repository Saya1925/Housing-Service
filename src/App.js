import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes from react-router-dom
import Header from "./Header";
import HomePage from "./HomePage";
import Membership from "./Membership";
import Professionals from "./Professionals";
import CreateTask from "./CreateTask";
import ViewTask from "./ViewTask";
import SignUp from "./SignUp";

function App() {
  return (
    <div>
      <Header />
      <Routes> {/* Wrap your routes in a <Routes> component */}
        <Route path="/" element={<HomePage />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/Professionals" element={<Professionals />} />
        <Route path="/CreateTask" element={<CreateTask />} />
        <Route path="/ViewTask/:id" element={<ViewTask />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
