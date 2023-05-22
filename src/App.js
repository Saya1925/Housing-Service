import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import HeaderRegistered from "./HeaderRegistered";
import HeaderMembership from "./HeaderMembership";
import HeaderProfessional from "./HeaderProfessional";
import HomePage from "./HomePage";
import HomePageRegistered from "./HomePageRegistered";
import CreateTask from "./CreateTask";
import SignUp from "./SignUp";
import SignUp2 from "./SignUp2";
import MembershipCustomer from "./MembershipCustomer";
import MembershipCustomer2 from "./MembershipCustomer2";
import MembershipCustomer3 from "./MembershipCustomer3";
import ServicePublised from "./ServicePublised";
import Professionals from "./Professionals";
import Professionals2 from "./Professionals2";
import Professionals3 from "./Professionals3";
import Account from "./Account";
import logoHeader from './images/logoHeader.jpg';
import RegisteredServices from "./RegisteredServices";
import MembershipServices from "./MembershipServices";
import ProfessionalServices from "./ProfessionalServices";
import PaymentPage from './PaymentPage';
import './payment.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
const App = () => {
  return (
    <div className="app">
      <PaymentPage />
    </div>
  );
};
  
  return (
    <div>
      
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/HomePageRegistered" element={<HomePageRegistered />} />
        <Route path="/Header" element={<Header logoHeader={logoHeader} />} />
        <Route path="/HeaderRegistered" element={<Header logoHeader={logoHeader} />} />
        <Route path="/HeaderMembership" element={<Header logoHeader={logoHeader} />} />
        <Route path="/HeaderProfessional" element={<Header logoHeader={logoHeader} />} />
        <Route path="/MembershipCustomer" element={<MembershipCustomer />} />
        <Route path="/MembershipCustomer2" element={<MembershipCustomer2 />} />
        <Route path="/MembershipCustomer3" element={<MembershipCustomer3 />} />
        <Route path="/Professionals" element={<Professionals />} />
        <Route path="/Professionals2" element={<Professionals2 />} />
        <Route path="/Professionals3" element={<Professionals3 />} />
        <Route path="/CreateTask" element={<CreateTask />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUp2" element={<SignUp2 />} />
        <Route path="/ServicePublised" element={<ServicePublised />} />  
        <Route path="/Account" element={<Account />} />
        <Route path="/RegisteredServices" element={<RegisteredServices />} />
        <Route path="/MembershipServices" element={<MembershipServices />} />  
        <Route path="/ProfessionalServices" element={<ProfessionalServices />} />
      </Routes>
    </div>
  );
}

export default App;
