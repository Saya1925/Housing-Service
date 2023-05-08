import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes from react-router-dom
import Header from "./Header";
import HomePage from "./HomePage";
import Login from "./Login";
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
        <Route path="/Login" element={<Login />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/Professionals" element={<Professionals />} />
        <Route path="/Create-task" element={<CreateTask />} />
        <Route path="/View-task/:id" element={<ViewTask />} />
      </Routes>
    </div>
  );
}

export default App;
