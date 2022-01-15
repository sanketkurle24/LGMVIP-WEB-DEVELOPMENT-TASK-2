import React from 'react';
import { useState } from 'react';
import './gettingUserData.css';


function GettingUserData() {

  const [userData, setuserData] = useState([]);

  const getUsers = async () => {

    const res = await fetch('https://reqres.in/api/users/');
    const json = await res.json();
    setuserData(json.data);
  };

  return (
    <div className="myUserData">
      <nav className="navbar">
        <p className="navbarBrand">User Data</p>
        <button onClick={getUsers} className="btnGetUsers">Get User Data</button>
      </nav>
      <div className="userDataHolder">
        {userData.map((user) => {
          return (
            <div className="userInfo">
              <img src={user.avatar} key={user.avatar} className="userImg" />
              <h4 key={user.first_name} className="userName">{user.first_name} {user.last_name}</h4>
              <p key={user.email} className="userEmail">{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default GettingUserData;
