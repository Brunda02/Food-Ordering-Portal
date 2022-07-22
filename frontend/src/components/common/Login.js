import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../templates/Navbar";

const Login = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(null);
  const nav = useNavigate();

  const onChangeUsername = (event) => {
    setUserName(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const resetInputs = () => {
    setUserName("");
    setPassword("");
    setDate(null);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser1 = {
      username: username,
      password: password,
      date: Date.now(),
    };


    axios
      .post("http://localhost:4000/user/login", newUser1)
      .then((response) => {
          var x = response.data.Element.username;
          //console.log(response.data.Element.email);
        alert("Logged in as\t" + response.data.Element.username );
        localStorage.setItem("y", response.data.Element.username); 
        var bru = response.data.dum;
        if(bru===1){
        nav("/myprofile2");
        }
        if(bru===2){
        nav("/myprofile3");
        }
        console.log(response.data.Element);
      });

    resetInputs();

     
  };

  return (
    <div>
    <Navbar/>
    <Grid container align={"center"} spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="User_Name"
          variant="outlined"
          value={username}
          onChange={onChangeUsername}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Password"
          variant="outlined"
          value={password}
          onChange={onChangePassword}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Login
        </Button>
      </Grid>
    </Grid>
    </div>
  );
};

export default Login;