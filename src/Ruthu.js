import React, { useState } from "react";

function Lgn(){
    const[user,setUser]=useState({
        name:'',
        email:''
    });
    const handleInputChange=(e,keyName)=>{
        setUser({...user,[keyName]:e.target.value})
    }

    return(
        <div>
            <input type="text" value={user.name} onChange={(e)=>handleInputChange(e,'name')}/>
            <h1>{user.name}</h1>
            <input type="text" value={user.email} onChange={(e)=>handleInputChange(e,'email')}/>
            <h2>{user.email}</h2>
         
        </div>
    );
}
export default Lgn;