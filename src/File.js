import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function File() {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profile: '',
        errors:{
            errorFirst:'',
            errorLast: '',
            errorEmail: '',
            errorProfile: '',        }
    })

    const handleInput=(e)=>{
        setData({...data,[e.target.name]: e.target.value})
    }




    return (
        <div>
            <Button variant="primary" onChange={handleInput}>Add Users</Button>
        </div>
    );
}
export default File;