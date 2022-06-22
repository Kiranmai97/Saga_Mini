import React, { useState } from 'react';
import { Button, Modal, Form, Col, Row } from 'react-bootstrap';


function EditUser() {
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
  const addBtn = (e) => {
    if (handleSubmit(e)) {
      if (isAdd) {
        const getEdit = data.findIndex((each) => each.id === addmodal.id)
        console.log("getEdit", getEdit);
        data[getEdit] = addmodal
        setUsersdata({ ...usersdata, data: data })
        handleClose();

      }
    }
    const editUser = (user) => {
      console.log("user", user);
      setAddModal(user);
      setShow(true)
      setIsAdd(false)
    }
  }


  return (
    <div>
      <Button variant="success" onClick={() => editUser(user)}>Edit</Button>



      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">

              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" placeholder="Last name" value={modal.first_name} onChange={handleInput} name="first_name" />
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


          <Button variant="info" onClick={addBtn}>Save</Button>
        </Modal.Footer>


      </Modal>
    </div>
  );

}
export default EditUser;