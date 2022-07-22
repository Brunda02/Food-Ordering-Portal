import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../templates/Navbar";

const RegisterVendor = (props) => {
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

  const onSubmit = (event) => {
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
      .post("http://localhost:4000/vendor/register", newVendor)
      .then((response) => {
        alert("Created\t" + response.data.email);
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

export default RegisterVendor;