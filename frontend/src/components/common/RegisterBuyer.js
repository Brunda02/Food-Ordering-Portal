import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../templates/Navbar"

const RegisterBuyer = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState(null);
    const [contact_number, setContact] = useState("");
    const [age, setAge] = useState("");
    const [Batch_name, setBatch] = useState("");
    const [username, setUserName1] = useState("");
    const [password, setPassword] = useState("");


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

  const resetInputs = () => {
    setName("");
    setEmail("");
    setDate(null);
    setContact("");
    setAge("");
    setBatch("");
    setUserName1("");
    setPassword("");
  };

  const onSubmit = (event) => {
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
      .post("http://localhost:4000/buyer/register", newBuyer)
      .then((response) => {
        alert("Created\t" + response.data.name);
        console.log(response.data);
      });

    resetInputs();
  };

  return (
    <div>
      <Navbar/>
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
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={onChangeUsername1}
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
          Register
        </Button>
      </Grid>
    </Grid>
    </div>
  );
};

export default RegisterBuyer;