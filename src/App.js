import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import HomePageReg from "./HomePageReg";
import CreateTask from "./CreateTask";
import ViewTask from "./ViewTask";
import SignUp from "./SignUp";
import SignUp2 from "./SignUp2";
import MembershipCustomer from "./MembershipCustomer";
import MembershipCustomer2 from "./MembershipCustomer2";
import MembershipCustomer3 from "./MembershipCustomer3";
import ServicePublised from "./ServicePublised";
import Professionals from "./Professionals";
import Professionals2 from "./Professionals2";
import Professionals3 from "./Professionals3";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MembershipCustomer" element={<MembershipCustomer />} />
        <Route path="/MembershipCustomer2" element={<MembershipCustomer2 />} />
        <Route path="/MembershipCustomer3" element={<MembershipCustomer3 />} />
        <Route path="/Professionals" element={<Professionals />} />
        <Route path="/Professionals2" element={<Professionals2 />} />
        <Route path="/Professionals3" element={<Professionals3 />} />
        <Route path="/CreateTask" element={<CreateTask />} />
        <Route path="/ViewTask" element={<ViewTask />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUp2" element={<SignUp2 />} />
        <Route path="/HomePageReg" element={<HomePageReg />} />
        <Route path="/ServicePublised" element={<ServicePublised />} />  
      </Routes>
     
    </div>
  );
}

export default App;
