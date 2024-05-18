import React, { useState, useEffect } from 'react';
import axios from "axios"
const Users = () => {
  const [userData, setUserData] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const fetchUsers = async () => {
    const results = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUserData(results.data)
    setFilteredData(results.data);
  }

  const handleSearch = (query) => {
    if (!query) {
      setFilteredData(userData);
    } else {
      const filtered = userData.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  
  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery, userData]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <h2>Users</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      {filteredData.map((user,index) => (
        <p key={index}>{user.name}</p>
      ))}
    </>
  );
};

export default Users;
