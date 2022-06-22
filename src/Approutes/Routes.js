
import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Login  from '../components/Login';
import Dashboard from '../components/Dashboard';
import File from '../File';
import Users from '../padma';
import Ruthu from '../Ruthu';
import Example from '../Example';
import Actions from '../Rahul';
import EditUser from '../File_editor';






 function Router() {
//  const token= localStorage.getItem('token')

    return (
      <BrowserRouter>
        <Routes>

        <Route path="/login" element={<Login/>} /> 
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path = "/file" element = {<File/>}/> 
        <Route path="/users" element = {<Users/>}/>
        <Route path = "/ruthu" element = {<Ruthu/>}/>
        <Route path = "/example" element = {<Example/>}/>
        <Route path = "/rahul" element = {<Actions/>}/>
        <Route path = "/edit" element = {<EditUser/>}/>
        
          

        </Routes>
      </BrowserRouter>
    );
  }
  export default Router;
 