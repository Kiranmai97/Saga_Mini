
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";





export default function Router() {
 const token= localStorage.getItem('token')

    return (
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Login/>} />  
          

        </Routes>
      </BrowserRouter>
    );
  }
 