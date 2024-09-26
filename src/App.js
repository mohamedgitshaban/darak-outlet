import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./scss/style.css";
import { useState,useEffect, createContext } from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import ContactUsPage from './pages/ContactUsPage';
import FAUCETS from './pages/FAUCETS';
import CardPage from './pages/CardPage';
import ThankUPage from './pages/ThankUPage';
import CheckOutPage from './pages/CheckOutPage';
import AboutUsPage from './pages/AboutUsage';
import VANITIES from './pages/VANITIES';
import MIRRORS from './pages/MIRRORS';
import ACCESSORIES from './pages/ACCESSORIES';
import Sink from './pages/Sink';
import VANITIESSingleProductPage from './pages/VANITIESSingleProductPage';
import AccessoriesSingleProductPage from './pages/AccessoriesSingleProductPage';
import SinkSingleProductPage from './pages/SinkSingleProductPage';
import MIRRORSSingleProductPage from './pages/MIRRORSSingleProductPage';
import FAUCETSSingleProductPage from './pages/FAUCETSSingleProductPage';
import Payment from './pages/Payment';
import Profile from './pages/Profile';


function App() {

  const [user, setUser] = useState({
    userid:1,
    cart:[]
  });


  return (
 

     <BrowserRouter>

       <Header user={user} />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/aboutus' element={<AboutUsPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/contactus' element={<ContactUsPage/>}/>
          <Route path='/VANITIES' element={<VANITIES/>}/>
          <Route path='/Mirror' element={<MIRRORS/>}/>
          <Route path='/ACCESSORIES' element={<ACCESSORIES/>}/>
          <Route path='/sinks' element={<Sink/>}/>
          <Route path='/FAUCETS' element={<FAUCETS/>}/>
          <Route path='/card' element={<CardPage/>}/>
          <Route path='/checkout' element={<CheckOutPage/>}/>
          <Route path='/VANITIES/:id' element={<VANITIESSingleProductPage/>}/>
          <Route path='/ACCESSORIES/:id' element={<AccessoriesSingleProductPage/>}/>
          <Route path='/sinks/:id' element={<SinkSingleProductPage/>}/>
          <Route path='/Mirror/:id' element={<MIRRORSSingleProductPage/>}/>
          <Route path='/FAUCETS/:id' element={<FAUCETSSingleProductPage/>}/>
          <Route path='/thanks' element={<ThankUPage/>}/>
          <Route path='/*' element={<HomePage/>}/>
        </Routes>
        <Footer/>
         {/* <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/aboutus' element={<AboutUsPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contactus' element={<ContactUsPage/>}/>
          <Route path='/VANITIES' element={<VANITIES/>}/>
          <Route path='/Mirror' element={<MIRRORS/>}/>
          <Route path='/ACCESSORIES' element={<ACCESSORIES/>}/>
          <Route path='/sinks' element={<Sink/>}/>
          <Route path='/FAUCETS' element={<FAUCETS/>}/>
          <Route path='/card' element={<CardPage/>}/>
          <Route path='/checkout' element={<CheckOutPage/>}/>
          <Route path='/VANITIES/:id' element={<VANITIESSingleProductPage/>}/>
          <Route path='/ACCESSORIES/:id' element={<AccessoriesSingleProductPage/>}/>
          <Route path='/sinks/:id' element={<SinkSingleProductPage/>}/>
          <Route path='/Mirror/:id' element={<MIRRORSSingleProductPage/>}/>

          <Route path='/FAUCETS/:id' element={<FAUCETSSingleProductPage/>}/>
          <Route path='/thanks' element={<ThankUPage/>}/>
          <Route path='/*' element={<HomePage/>}/>
        </Routes>
        <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
