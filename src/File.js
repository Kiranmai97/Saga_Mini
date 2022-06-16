
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
// import Imagefrom from "react-bootstrap/Image";
import "./File.css";
import AddUser from "../Componnets/File_modal";

function File() {

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

    return (

        <div className="mt-9">

           <AddUser/>
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
                                    <td><img src={user.avatar} class="img-rounded" sm-3 className="img" alt="avatar" /></td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Button variant="primary">edit</Button> {''}
                                        <Button variant="success" onClick={() => deleteUser(user)}>Delete</Button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default File;
