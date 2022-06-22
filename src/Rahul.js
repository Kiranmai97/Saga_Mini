import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form, Col, Row, InputGroup } from "react-bootstrap";


const Actions = () => {

    const [usersdata, setUsersdata] = useState(
        {
            data: [],

        }
    )
    useEffect(() => {

        axios.get('https://reqres.in/api/users?page=1')
            .then(function (response) {
                console.log(response);
                setUsersdata(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    // delete functionality

    const [Deleteuser, setDeleteuser] = useState({})
    const [deleted, setDeleted] = useState(false);
    const handleClosedelete = () => setDeleted(false);

    const { data } = usersdata
    const deletedata = (user) => {
        setDeleted(true)
        setDeleteuser(user)
    }

    const deleteFn = () => {
        const getIndex = data.indexOf(Deleteuser);
        data.splice(getIndex, 1)
        console.log("newdata", data);
        setUsersdata({ ...usersdata, data: data });
        handleClosedelete();
    }
    // add modal function
    const [addmodal, setAddModal] = useState({
        first_name: '',
        last_name: '',
        email: '',
        avatar: '',

    })
    const handleInputChange = (e) => {
        setAddModal({ ...addmodal, [e.target.name]: e.target.value })
    }

    const addBtn = (e) => {
        if (handleSubmit(e)) {
            if (isAdd) {
                console.log("add the values")
                const { data } = usersdata;
                data.push(addmodal)
                setUsersdata({ ...usersdata, data: data });
                handleClose();
            }
            // edit functionality
            else {
                const getEdit = data.findIndex((each) => each.id === addmodal.id)
                console.log("getEdit", getEdit);
                data[getEdit] = addmodal
                setUsersdata({ ...usersdata, data: data })
                handleClose();

            }
        }

    }

    const [isAdd, setIsAdd] = useState(false)

    const editUser = (user) => {
        console.log("user", user);
        setAddModal(user);
        setShow(true)
        setIsAdd(false)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setAddModal({ ...addmodal, first_name: '', last_name: '', email: '', avatar: '' })
        setIsAdd(true)
        setShow(true);
    }
    // validations
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        console.log("validation Fn");
        if (!addmodal.first_name && !addmodal.last_name && !addmodal.email) {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            setValidated(true);
            return false
        }
        else {
            return true
        }

    };


    // profilepic functionality

    const imageFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.name) {
            const { files } = e.target;
            const localImageUrl = window.URL.createObjectURL(files[0]);
            console.log("url", localImageUrl)
            setAddModal({ ...addmodal, avatar: localImageUrl })
            setUsersdata({ ...usersdata, profilePic: file, profilePicUrl: URL.createObjectURL(file) })
        }
        console.log(file)
    }

    const imageRemoveProfile = () => {
        setAddModal({ ...addmodal, avatar: '' })
    }

    const imageUpload = () => {
        document.getElementById("profile-pic").click();
    }



    return (
        <div className="container">
            <h2>Dashboard</h2>
            <Button variant="success m-2" onClick={handleShow} className="btn">Add Users</Button>
            <Table striped bordered hover>
                <thead className="text-center">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Profile pic</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">

                    {
                        usersdata.data.map((user, index) => {
                            return (

                                <tr key={index}>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td><img className="rounded-circle text-center" src={user.avatar} alt="avatar" height="50" width="50" /></td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Button variant="primary m-2" onClick={() => editUser(user)}>Edit</Button>
                                        <Button variant="danger" onClick={() => deletedata(user)}>Delete</Button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

            {/*modal for delete  */}
            <Modal show={deleted} onHide={handleClosedelete}>
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
            </Modal>


            {/*Modal for add and edit  */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {
                            isAdd ? "Add New User" : "Edit user"
                        }
                    </Modal.Title>
                </Modal.Header>
                <Form noValidate validated={validated} >
                    <Row className="mb-2 container">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="first_name"
                                placeholder="First name"
                                value={addmodal.first_name} onChange={handleInputChange}

                            />
                            <Form.Control.Feedback type="invalid">
                                this filed is required*
                            </Form.Control.Feedback>
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="last_name"
                                placeholder="Last name"
                                value={addmodal.last_name} onChange={handleInputChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                this filed is required*
                            </Form.Control.Feedback>
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                {/* <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text> */}
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="name@example"
                                    // aria-describedby="inputGroupPrepend"
                                    required
                                    value={addmodal.email} onChange={handleInputChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email*
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <div className="col-6">
                            {
                                addmodal.avatar ?
                                    <div>
                                        <img src={addmodal.avatar} height="50" />
                                        <div onClick={imageUpload}>Upload new image</div>
                                        <button className="btn btn-primary" onClick={imageRemoveProfile}>Remove</button>
                                    </div>
                                    :

                                    <div> <Button className="mt-2 container" onClick={imageUpload} >image upload</Button></div>
                            }
                            <input type="file" hidden name="profilePic" id="profile-pic" onChange={imageFileChange} />
                        </div>
                    </Row>
                </Form>


                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" onClick={addBtn}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

            {/* Logout button */}
            <div className="text-center ">
                <button className='btn btn-success'>Logout</button>
            </div>
        </div >
    )
}

export default Actions;
