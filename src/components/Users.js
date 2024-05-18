import React, { useState, useEffect } from 'react';
import axios from "axios"
const Users = () => {
  const [userData, setUserData] = useState([])
  const fetchUsers = async () => {
    const results = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUserData(results.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  return (<>
    <h2>Users</h2>
    {userData.map((user) => {
      return (<p>{user.name}</p>)
    })}

  </>

  )
};

export default Users;
