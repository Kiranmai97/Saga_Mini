import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/main.css';
// import { Table, Button, Form } from 'react-bootstrap';
import { Button, Modal, Form, Table, Row, Col, InputGroup } from "react-bootstrap";


const Dashboard = () => {
    const handleClose = () => setShow(false);
    const shandleShow = () => {
        setModal({ ...modal, first_name: '', last_name: '', email: '' });
        setIsAdd(true)
        setShow(true)
    }

    const [userData, setUserData] = useState({
        list: []
    })
    const Fetch = () => {
        axios.get('https://reqres.in/api/users?page=1')
            .then(function (response) {
                console.log(response.data.data)
                // setUserData(response.list)
                setUserData({ ...userData, list: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    useEffect(() => {
        console.log("useEffect")

        Fetch()

    }, [])

    // modal functionality
    const [modal, setModal] = useState({
        first_name: '',
        last_name: '',
        email: '',
        avatar: '',

    })

    const handleInputChange = (e) => {
        setModal({ ...modal, [e.target.name]: e.target.value })
    }
    // adding user
    const addUser = (e) => {
        e.preventDefault()
        const { list } = userData;
        if (isAdd) {
            list.push(modal)
            console.log("add the values", list)
            setUserData({ ...userData, list: list });
            handleClose();
        }
        //edit user
        else {
            const getEdit = list.findIndex((each) => each.id === modal.id)
            console.log("getEdit", getEdit);
            list[getEdit] = modal
            setUserData({ ...userData, list: list })
            handleClose();
        }
    }


    const [isAdd, setIsAdd] = useState(false)

    const editUser = (user) => {
        console.log("user", user);
        setModal(user);
        setShow(true)
        setIsAdd(false)
    }

    console.log("add the values", userData.list)


    // const { list } = userData

    // delete functionality
    // const deleteFn = (user) => {
    //     const getIndex = list.indexOf(user);
    //     list.splice(getIndex, 1)
    //     console.log("newlist", list);
    //     setUserData({ ...userData, list: list });
    //     handleClose();
    // }

    // dlete functionalty
    const [Deleteuser, setDeleteuser] = useState({})
    const [deleted, setDeleted] = useState(false);
    const handleClosedelete = () => setDeleted(false);

    const { list } = userData
    const deletedata = (user) => {
        setDeleted(true)
        setDeleteuser(user)
    }

    const deleteFn = () => {
        const getIndex = list.indexOf(Deleteuser);
        list.splice(getIndex, 1)
        console.log("newdata", list);
        setUserData({ ...userData, list: list });
        handleClosedelete();
    }

    const [show, setShow] = useState(false);

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };


    const handlePictureChange = (e) => {
        // const {file} = e.target;
        const { files } = e.target;
        const localImageUrl = window.URL.createObjectURL(files[0]);
        console.log("url", localImageUrl)
        setModal({ ...modal, avatar: localImageUrl })
    }
    console.log("url", modal.avatar);

    const handleShow = () => setShow(true);





    return (
        <div>
            <div className="mt-5">
                <Button variant="success" onClick={handleShow} className="add">Add User</Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>{
                        isAdd ?
                            <Modal.Title>ADD DETAILS</Modal.Title>
                            :
                            <Modal.Title>EDIT DETAILS</Modal.Title>

                    }
                    </Modal.Header>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    autocomplete='off'
                                    required
                                    type="text"
                                    name="first_name"
                                    placeholder="First name"
                                    value={modal.first_name}
                                    onChange={handleInputChange}

                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your First Name*
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    autocomplete='off'

                                    type="text"
                                    name='last_name'
                                    placeholder="Last name"
                                    value={modal.last_name}
                                    onChange={handleInputChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your Last Name *
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                    {/* <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text >  */}
                                    < Form.Control
                                        type="text"
                                        autocomplete='off'

                                        name='email'
                                        placeholder="Enter your email"
                                        value={modal.email}
                                        onChange={handleInputChange}

                                        // aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid email*
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                <Form.Label >Profile Pic </Form.Label>
                                <Form.Control
                                    required
                                    type="file"
                                    onChange={handlePictureChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    this filed is required*
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                        </Row>
                    </Form>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        {
                            isAdd ?
                                <Button type="submit" onClick={addUser}> Add User</Button>
                                :
                                <Button type="submit" onClick={addUser}> Save Change</Button>
                        }
                    </Modal.Footer>
                </Modal>

                {/*modal for delete  */}

                <Button variant="danger" onClick={() => deletedata()}>Delete</Button >

                < Modal show={deleted} onHide={handleClosedelete}>
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body> <b> Are you sure want to delete this user</b></Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClosedelete}>
                            cancel
                        </Button>
                        <Button variant="danger" onClick={deleteFn} >
                            Delete
                        </Button>

                    </Modal.Footer>



                </Modal >

                {/ edit modal /}


                <div>
                    <Table bordered striped hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Profile pic</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.list.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td><img className='propic' src={user.avatar} alt="avatar" /></td>
                                            <td>{user.email}</td>
                                            <td>
                                                <Button variant="success" onClick={() => editUser(user)}>Edit</Button>{' '}
                                                <Button variant="danger" onClick={() => deletedata(user)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div >
            </div>
            )

}

            export default Dashboard;