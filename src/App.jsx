import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/home';



const App = () => {

  const token = JSON.parse(localStorage.getItem("token"));
const Navigate = useNavigate();
  const LoadUser = ()=>{
    if(token){
      if(token?.email && token?.password){
        console.log("User Login success")
      }else{
         Navigate("/login")
         console.log("UnAutenticate")
      }
    }else{
      Navigate("/login")
      console.log("UnAutenticate")
    }
  }

  useEffect(()=>{
    LoadUser();
  },[token,Navigate])
  return (
  
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/login" element={<Login />} />
      </Routes>
   
  );
};

export default App;
