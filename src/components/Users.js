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
      <div className='cards'>
        {filteredData.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>

    </>
  );
};

const UserCard = (userobj, index) => {
  const { user } = userobj
  return (
    <div className='card-wrapper' key={index}>
      <h5>{user.name}</h5>
      <div className='emailWrap'>
        <div className='label'>Email </div>
        <div className='name'>: {user?.name}</div>
      </div>
      <div className='websiteWrap'>
        <div className='label'>Website </div>
        <div className='website'>: {user?.website}</div>
      </div>
      <div className='companyWrap'>
        <div className='label'>Company</div>
        <div className='website'>: {user?.company?.name}</div>
      </div>
    </div>
  )
}

export default Users;
