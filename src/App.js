import React from 'react';
import { Routes, Route ,useLocation,useNavigate} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Login from './components/Login';
import Signup from './components/Signup';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';

const App = () => {

 const location=useLocation() 

  return (

    <div className=" w-full sm:max-w-[80%] mx-auto bg-white ">
      <Header />
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
