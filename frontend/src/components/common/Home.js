import { useState, useEffect } from "react";
//import BasicSelect from "./Select";
import Navbar from "../templates/Navbar"

const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("Dass TAs");
  }, []);

  return (
  <div style={{ textAlign: "center" }}><Navbar/>  Happy Coding - {name}</div>);
};

export default Home;
