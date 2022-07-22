import axios from "axios";
import { useState, useEffect } from "react";
import Navbar2 from "../templates/Nav2";

const Profile = (props) => {
  const [details, setDetails] = useState([]);
  var p = localStorage.getItem("y");

  const newBuyer = {
    name: name,
    email: email,
    date: Date.now(),
    age: age,
    contact_number: contact_number,
    Batch_name: Batch_name,
    username: username,
    password: password,
};
  
  useEffect(() => {
    axios
      .post("http://localhost:4000/user/buyerpage/:username", p) // unimplemented
      .then((response) => {
        setDetails(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return <div><Navbar2/></div>;
};

export default Profile;
