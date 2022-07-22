import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../templates/Navbar";

const Logout = (props) => {
  return (
    <div>
    <Navbar/>
    </div>
  );
};

export default Logout;