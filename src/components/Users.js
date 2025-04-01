import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "../customHooks/useDebounce";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const debouncedSearch = useDebounce(searchQuery, 2000);

  useEffect(() => {
    const fetchUsers = async () => {
      const results = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUserData(results.data);
      setFilteredData(results.data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (!debouncedSearch) {
      setFilteredData(userData);
    } else {
      const filtered = userData.filter((user) =>
        user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [debouncedSearch, userData]);

  return (
    <>
      <h2>Users</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="cards">
        {filteredData.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </>
  );
};

const UserCard = ({ user }) => {
  return (
    <div className="card-wrapper">
      <h5>{user.name}</h5>
      <div className="emailWrap">
        <div className="label">Email </div>
        <div className="name">: {user?.email}</div>
      </div>
      <div className="websiteWrap">
        <div className="label">Website </div>
        <div className="website">: {user?.website}</div>
      </div>
      <div className="companyWrap">
        <div className="label">Company</div>
        <div className="company">: {user?.company?.name}</div>
      </div>
    </div>
  );
};

export default Users;
