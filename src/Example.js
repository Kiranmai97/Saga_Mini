import React,{useState} from 'react';

function Example(){
    const [state,setState] = useState({
        name: '',
        email: '',
    })
    const handleInput=(e)=>{

setState({...state,[e.target.name]: e.target.value})

    }
    return (
        <div>
            <input type = 'text' value={state.name} placeholder="Name" name="name" onChange={handleInput}/>
            <h1>{state.name}</h1>
            <input type = 'email' value={state.email} placeholder="Email" name="email" onChange={handleInput}/>
            <h1>{state.email}</h1>
           
    
        </div>
    )
} 
export default Example;