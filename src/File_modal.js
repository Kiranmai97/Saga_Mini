import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import "./File.css";
function AddUser() {
    const [validated, setValidated] = useState(false);
    const [data, setData] = ({
        firstName: '',
        lastName: '',
        email: '',
        profile: '',
        error: {
            firstNameerror: '',
            firstNameMessage: '',
            lastNameerror: '',
            lastNameMessage: '',
            email: '',
            profile: '',
        }

    })
    const { error } = data;
    const handleInput = () => {
        console.log()
    }
    const add = () => {
        console.log("add the values")
        const { list } = state;
        list.push(modal)
        setState({ ...state, list: list });
        const obj = {

            first_name: '',
            last_name: '',
            email: ''
        }
        setModal(obj);
        handleCloseAdd();
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
  
    return (
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">AddUser</button>




            {/* <!-- The Modal --> */}
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div class="modal-header">
                            <h4 class="modal-title">Add New User</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div class="modal-body">

                            <Form noValidate validated={validated} onSubmit={submit} >
                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control required type="text" name="data.firstName" value={data.firstName} onChange={handleInput} placeholder="First name" />
                                </Form.Group>

                                <Form.Group as={Col} md="12" controlId="validationCustom02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control required type="text" name="lastName" value={data.lastName} onChange={handleInput} placeholder="Last name" />
                                </Form.Group>

                                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="email" value={data.email} onChange={handleInput} placeholder="Enter Email" aria-describedby="inputGroupPrepend" required />
                                </Form.Group>

                                {
                                    !error.profile ?
                                        <Form.Group className="mb-3" >
                                            <Form.Control type="file" name='profile' value={data.profile} placeholder="Enter Profile" onChange={handleInput} Add ProfilePicture />
                                        </Form.Group>
                                        :
                                        <Form.Group className="mb-3" >
                                            <Form.Control type="file" className="border border-danger" name='profile' value={data.profile} placeholder="Enter Profile" onChange={handleInput} />
                                        </Form.Group>
                                }

                                {
                                    error.email &&
                                    <span style={{ color: "red" }}>{error.email}</span>
                                }
                            </Form>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={add}>Submit</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddUser;