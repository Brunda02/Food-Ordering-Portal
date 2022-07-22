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


const Mypage2 = (props) => {

   const [users, setUsers] = useState([]);  

  var z = localStorage.getItem("y");

  let newUser = {
    username1: localStorage.getItem("y"),
  };

  //console.log(z);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(null);
  const [contact_number, setContact] = useState("");
  const [age, setAge] = useState("");
  const [Batch_name, setBatch] = useState("");
  const [username, setUserName1] = useState("");
  const [password, setPassword] = useState("");

  const resetInputs = () => {
    setName("");
    setEmail("");
    setDate(null);
    setContact("");
    setAge("");
    setBatch("");
    setUserName1("");
    setPassword("");
    //setUsers("");
  };


  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeContact = (event) => {
    setContact(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeBatchname = (event) => {
    setBatch(event.target.value);
  };
  const onChangeUsername1 = (event) => {
    setUserName1(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeUser = (event) =>{
      setUsers(event.target.value);
  }


  useEffect(() => {

    axios
      .post("http://localhost:4000/user/buyerpage", newUser)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        setName(response.data.name);
        console.log(response.data.name);
        setAge(response.data.age);
        setContact(response.data.contact_number);
        console.log(response.data.contact_number);
        setBatch(response.data.Batch_name);
        setUserName1(response.data.username);
        setEmail(response.data.email);
        setPassword(response.data.password);
        alert("Success!!!");
        let buy = {
          username: response.data.username,
          password: response.data.password,
          name: response.data.name,
          age: response.data.age,
          contact_number:response.data.contact_number,
          Batch_name: response.data.Batch_name,
          email: response.data.email,

        }

      }); 
  }, []);


  const OnSubmit = (event) => {

    event.preventDefault();

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

    axios
      .post("http://localhost:4000/user/editb", buy)
      .then((response) => {
        // alert("Created\t" + response.data.name;
        //setUsers(response.data);
        console.log(users.name);
        console.log(response.data);
      });

    resetInputs();
  };


  return (
    <div>
      <Navbar2 />
      <h1> Welcome {z}</h1>
       <br></br>
       Name: {name}<br></br>
       Email: {email}<br></br>
       Age: {age}<br></br>
       Contact: {contact_number}<br></br>
       Batch_name: {Batch_name}<br></br>
      <Grid container align={"center"} spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={onChangeUsername}
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
        <Grid item xs={12}>
          <TextField
            label="Age"
            variant="outlined"
            value={age}
            onChange={onChangeAge}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Batch"
            variant="outlined"
            value={Batch_name}
            onChange={onChangeBatchname}
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

export default Mypage2;
