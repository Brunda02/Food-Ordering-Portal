import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Dropdown} from 'react-bootstrap';
import Navbar from "../templates/Navbar";


const Page = (props) => {
  return(
    <div>
    <Navbar/>
  <Dropdown as={ButtonGroup} size="lg">
    <Button variant="primary">Select</Button>

    <Dropdown.Toggle split variant="primary" />

    <Dropdown.Menu>
    <Dropdown.Item href="/RegisterBuyer">Buyer</Dropdown.Item>
   <Dropdown.Item href="/RegisterVendor">Vendor</Dropdown.Item>
   </Dropdown.Menu>
  </Dropdown>
  </div>
  );
};
export default Page;