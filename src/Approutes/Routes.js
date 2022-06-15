
import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Login  from '../components/Login';
import File from '../File';





export default function Router() {
//  const token= localStorage.getItem('token')

    return (
      <BrowserRouter>
        <Routes>

        <Route path="/login" element={<Login/>} /> 
        <Route path = "/file" element = {<File/>}/> 
          

        </Routes>
      </BrowserRouter>
    );
  }
 