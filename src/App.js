import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Community from './Components/Community/Community';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import HeroPage from './Components/HeroPage/heroPage';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';
import Navbar from './Components/Navbar';
import ProductPage from './Components/ProductPage/ProductPage';
import { ClerkProvider } from "@clerk/clerk-react";
import Help from './Components/Help/Help';
import ContactPage from './Components/Contact/ContactPage';
// import {cors} from 'connect-history-api-fallback'


// if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }


const App = () => {
//   const corsOptions = {
//     origin: '*',
//     allowedHeaders: ['Content-Type', 'X-Requested-With'],
//   };
  return (
    <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}>
      <Router hashbang={true}>
        <Routes>
          <Route path="/help" Component={Help} />
          <Route path="/product" Component={ProductPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/community" Component={Community} />
          <Route path="/faq" Component={FAQ} />
          <Route path="/home" Component={HomePage} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="/" Component={HeroPage} />
        </Routes>
    </Router>
    </ClerkProvider>
  );
};

export default App;
