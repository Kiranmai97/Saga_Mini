import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

function AddUser() {
    const [userslist, setUserslist] = useState(
        {
            data: []
        }
    )
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
    const handleAdd = () => {
        const { data } = userslist;
        if (isAdd) {
            data.push(modal);
            // setUserslist({ ...userslist, data: data });
            handleClose();
        }
        console.log("Add in table", userslist.data);


    }





    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    const handleInput = (e) => {
        console.log(modal)
        setModal({ ...modal, [e.target.name]: e.target.value })

    }


    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                AddUser
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
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


                    <Button variant="info" onClick={handleAdd}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default AddUser;