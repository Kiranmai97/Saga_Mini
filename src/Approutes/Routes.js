
import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Login  from '../components/Login';
import Dashboard from '../components/Dashboard';
import File from '../File';
import Refer from '../Refer';





export default function Router() {
//  const token= localStorage.getItem('token')

    return (
      <BrowserRouter>
        <Routes>

        <Route path="/login" element={<Login/>} /> 
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path = "/file" element = {<File/>}/> 
        <Route path = "/refer" element = {<Refer/>}/>
          

        </Routes>
      </BrowserRouter>
    );
  }
 