
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import { Modal, Form, Row, Col } from "react-bootstrap";
// import EditUser from '../src/File_editor';
// import AddUser from "../src/File_modal"
// import Imagefrom from "react-bootstrap/Image";
import "./File.css";

function File() {
    //Table functionalty
    const [userslist, setUserslist] = useState(
        {
            data: []
        }
    )
    useEffect(() => {

        console.log("useEffect")
        axios.get('https://reqres.in/api/users?page=1')
            .then(function (response) {
                console.log(response);
                setUserslist(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const deleteUser = (user) => {
        console.log(user)

        const filterUserslist = userslist.data.filter((each) => each.id !== user.id)
        console.log(filterUserslist)
        alert("Delete from this table")
        setUserslist({ ...userslist, data: filterUserslist })
    }
    //Table Functionality till here

    //Modal Functionality

    const [modal, setModal] = useState({
        first_name: ' ',
        last_name: '',
        email: '',
    })
    const [show, setShow] = useState(false);
    const [isAdd, setIsAdd] = useState(true)
    const [validated, setValidated] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    // const handleAdd = () => {
    //     const { data } = userslist;
    //     if (isAdd) {
    //         data.push(modal);

    //         handleClose();
    //     }
    //     console.log("Add in table", userslist.data);


    // }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            // event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    const handleInput = (e) => {
        console.log(modal)
        setModal({ ...modal, [e.target.name]: e.target.value })

    }
    const addUser = (e) => {
        e.preventDefault()
        const { data } = userslist;
        if (isAdd) {
            data.push(modal)
            console.log("add the values", data)
            setUserslist({ ...userslist, data: data });
            handleClose();
        }
        //edit user
        else {
            const getEdit = data.findIndex((each) => each.id === modal.id)
            console.log("getEdit", getEdit);
            data[getEdit] = modal
            setUserslist({ ...userslist, data: data })
            handleClose();
        }
        setModal({
           modal:'',
        })}
    const editUser = (user) => {
        console.log("user", user);
        setModal(user);
        setShow(true)
        setIsAdd(false)
    }

    console.log("add the values", userslist.list)


    return (

        <div className="mt-9">

            <Button variant="primary" onClick={handleShow}>AddUser </Button>


            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        <th>Profile pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>

                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        userslist.data.map((user, index) => {
                            return (

                                <tr key={index}>
                                    <td><img src={user.avatar} className="rounded-circle sm-2" alt="avatar" /></td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Button variant="success" onClick={() => editUser(user)}>Edit</Button>{''}
                                        <Button variant="danger" onClick={() => deleteUser(user)}>Delete</Button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

            {/* ADD -- Modal   */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>

                    <Modal.Title>ADD Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">

                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                <Form.Label>First name</Form.Label>
                                <Form.Control required type="text" placeholder="First name" value={modal.first_name} onChange={handleInput} name="first_name" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control required type="text" placeholder="Last name" value={modal.last_name} onChange={handleInput} name="last_name" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type="text" placeholder="Email" value={modal.email} onChange={handleInput} name="email" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button variant='primary' type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close </Button>                       
                        {
                            isAdd ?
                                <Button type="submit" onClick={addUser}> Add User</Button>
                                :
                                <Button type="submit" onClick={addUser}> Save Change</Button>
                        }
                    </Modal.Footer>
            </Modal>
        </div>
    )
}
export default File;
