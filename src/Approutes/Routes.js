
import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Login  from '../components/Login';





export default function Router() {
//  const token= localStorage.getItem('token')

    return (
      <BrowserRouter>
        <Routes>

        <Route path="/login" element={<Login/>} />  
          

        </Routes>
      </BrowserRouter>
    );
  }
 