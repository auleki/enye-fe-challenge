import React, { useState } from 'react'
// import axios from 'axios'
import { fetchUsers } from "../services/operations";

const ProfileList = () => {
  const [users, setUsers] = useState([])
  const fetchedUsers = fetchUsers()
    
    return (
      <div>
        <h1>Profile List</h1>
      </div>
  )
}

export default ProfileList