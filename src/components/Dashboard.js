import React from 'react'
import { Table } from 'react-bootstrap'

const Dashboard = () => {

  
  return (
    <div><Table>
      <thead>
        <tr>
          <th>firstName</th>
          <th>lastName</th>
          <th>Email</th>
        </tr>
      </thead>
      {/* <tbody>
        
        <tr>
          <td>{each.firstName}</td>
          <td>{each.lastName}</td>
          <td>{each.Email}</td>
        </tr>
      </tbody> */}
      </Table>
    </div>
  )
}

export default Dashboard