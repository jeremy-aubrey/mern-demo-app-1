import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "1",
      name: "Jeremy Aubrey",
      image:
        "https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-mobileMasterAt3x-v2.jpg",
      places: 10
    },
  ];

  return <UsersList users={USERS} />;
};
export default Users;
