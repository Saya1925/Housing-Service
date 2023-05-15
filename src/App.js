import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import HomePageReg from "./HomePageReg";
import Professionals from "./Professionals";
import CreateTask from "./CreateTask";
import ViewTask from "./ViewTask";
import SignUp from "./SignUp";
import MembershipCustomer1 from "./MembershipCustomer1";
import MembershipCustomer2 from "./MembershipCustomer2";
import MembershipCustomer3 from "./MembershipCustomer3";
import ServicePublised from "./ServicePublised";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MembershipCustomer1" element={<MembershipCustomer1 />} />
        <Route path="/MembershipCustomer2" element={<MembershipCustomer2 />} />
        <Route path="/MembershipCustomer3" element={<MembershipCustomer3 />} />
        <Route path="/Professionals" element={<Professionals />} />
        <Route path="/CreateTask" element={<CreateTask />} />
        <Route path="/ViewTask" element={<ViewTask />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/HomePageReg" element={<HomePageReg />} />
        <Route path="/ServicePublised" element={<ServicePublised />} />  
      </Routes>
     
    </div>
  );
}

export default App;
