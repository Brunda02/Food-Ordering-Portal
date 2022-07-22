import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
//import Button from "@mui/material/Button";
//import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Navbar2 from "../templates/Nav2";
import Navbar3 from "../templates/Nav3";


const Mypage3 = (props) => {

   const [users, setUsers] = useState([]);  

  var z = localStorage.getItem("y");

  let newUser = {
    username1: localStorage.getItem("y"),
  };

  //console.log(z);
  const [contact_number, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(null);
  const [shop_name, setShop] = useState("");
  const [opening_time, setOpentime] = useState("");
  const [closing_time, setClosingtime] = useState("");
  const [manager_name, setManager] = useState("");
  const [username, setUserName1] = useState("");
  const [password, setPassword] = useState("");

  const onChangeContact = (event) => {
    setContact(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangeManagername = (event) => {
    setManager(event.target.value);
  };

  const onChangeShopname = (event) => {
    setShop(event.target.value);
  };

  const onChangeOpentime = (event) => {
    setOpentime(event.target.value);
  };

  const onChangeClosetime = (event) => {
    setClosingtime(event.target.value);
  };

  const onChangeUsername1 = (event) => {
    setUserName1(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const resetInputs = () => {
    setEmail("");
    setDate(null);
    setShop("");
    setManager("");
    setOpentime("");
    setClosingtime("");
    setContact("");
    setUserName1("");
    setPassword("");

  };


  useEffect(() => {

    axios
      .post("http://localhost:4000/user/buyerpage", newUser)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        setManager(response.data.manager_name);
        console.log(response.data.name);
        setShop(response.data.shop_name);
        setContact(response.data.contact_number);
        console.log(response.data.contact_number);
        setOpentime(response.data.opening_time);
        setClosingtime(response.data.closing_time);
        setUserName1(response.data.username);
        setEmail(response.data.email);
        setPassword(response.data.password);
        alert("Success!!!");
      });
  }, []);


  const OnSubmit = (event) => {

    event.preventDefault();

    const newVendor = {
        email: email,
        date: Date.now(),
        contact_number: contact_number,
        shop_name: shop_name,
        manager_name: manager_name,
        opening_time: opening_time,
        closing_time: closing_time,
        username: username,
        password: password,
      };

    axios
      .post("http://localhost:4000/user/editv", newUser)
      .then((response) => {
        // alert("Created\t" + response.data.name;
        setUsers(response.data);
        console.log(response.data);
      });

    resetInputs();
  };


  return (
    <div>
      <Navbar3 />
      <h1> Welcome {z}</h1>
       <br></br>
       ManagerName: {users.manager_name}<br></br>
       Shopname: {users.shop_name}<br></br>
       Email: {users.email}<br></br>
       Contact: {users.contact_number}<br></br>
       Opening_time: {users.opening_time}<br></br>
       Closing_time: {users.closing_time}<br></br>
      <Grid container align={"center"} spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Manager_name"
          variant="outlined"
          value={manager_name}
          onChange={onChangeManagername}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Shop_name"
          variant="outlined"
          value={shop_name}
          onChange={onChangeShopname}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
        />
      </Grid>
       <Grid item xs={12}>
        <TextField
          label="Contact"
          variant="outlined"
          value={contact_number}
          onChange={onChangeContact}
        />
      </Grid>
      < Grid item xs={12}>
      <TextField
        label="Opening_time"
        variant="outlined"
        value={opening_time}
        onChange={onChangeOpentime}
      />
    </Grid>


    <Grid item xs={12}>
    <TextField
      label="Closing_time"
      variant="outlined"
      value={closing_time}
      onChange={onChangeClosetime}
    />
   </Grid>
   <Grid item xs={12}>
        <Button variant="contained" onClick={OnSubmit}>
          Edit
        </Button>
      </Grid>

      </Grid>
    </div>
  );

};

export default Mypage3;
