import { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Navbar3 from "../templates/Nav3"

const AddFood = (props) => {
  const [users, setUsers] = useState([]);
    const [item_name, setItemName] = useState([]);
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState(null);
    const [veg_or_nonveg, setVeg] = useState("");
    const [shop_name, setShop] = useState("");
    const [interests, setInterest] = useState("");
    const [add_on, setAddon] = useState("");
    const [sortName, setSortName] = useState(true);
    const [sortedUsers, setSortedUsers] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
      axios
        .get("http://localhost:4000/user/food")
        .then((response) => {
          setUsers(response.data);
          setSortedUsers(response.data);
           setSearchText("");
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const sortChange = () => {
      let usersTemp = users;
      const flag = sortName;
      usersTemp.sort((a, b) => {
        if (a.date != undefined && b.date != undefined) {
          return (1 - flag * 2) * (new Date(a.date) - new Date(b.date));
        } else {
          return 1;
        }
      });
      setUsers(usersTemp);
      setSortName(!sortName);
    };

    const customFunction = (event) => {
      console.log(event.target.value);
      setSearchText(event.target.value);
    };

    const onChangeItemName = (event) => {
        setItemName(event.target.value);
      };
    
      const onChangePrice = (event) => {
        setPrice(event.target.value);
      };
    
      const onChangeRating = (event) => {
        setRating(event.target.value);
      };
    
      const onChangeVeg = (event) => {
        setVeg(event.target.value);
      };
    
      const onChangeShopname = (event) => {
        setShop(event.target.value);
      };
      const onChangeInterest = (event) => {
        setInterest(event.target.value);
      };
    
      const onChangeAddon = (event) => {
        setAddon(event.target.value);
      };

  const resetInputs = () => {
    setItemName("");
    setInterest("");
    setRating(null);
    setPrice("");
    setVeg("");
    setShop("");
    setAddon([]);
    // setPassword("");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newItem = {
        item_name: item_name,
        shop_name: shop_name,
        price: price,
        rating: rating,
        veg_or_nonveg: veg_or_nonveg,
        interests: interests,
        add_on: add_on,
    };

    axios
      .post("http://localhost:4000/user/addfood", newItem)
      .then((response) => {
        alert("Created\t" + response.data.name);
        console.log(response.data);
      });

    resetInputs();
  };

  return (
    <div>
      <Navbar3/>
    <Grid container align={"center"} spacing={2}>
    <Grid item xs={12} md={3} lg={3}>
          <List component="nav" aria-label="mailbox folders">
            <ListItem text>
              <h1>Filters</h1>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
          <List component="nav" aria-label="mailbox folders">
            <TextField
              id="standard-basic"
              label="Search"
              fullWidth={true}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              // onChange={customFunction}
            />
          </List>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={3} lg={3}>
          <List component="nav" aria-label="mailbox folders">
            <ListItem>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  Salary
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="standard-basic"
                    label="Enter Min"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="standard-basic"
                    label="Enter Max"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
            </ListItem>
            <Divider />
            <ListItem divider>
              <Autocomplete
                id="combo-box-demo"
                options={users}
                getOptionLabel={(option) => option.name}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Names"
                    variant="outlined"
                  />
                )}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
          <Paper>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell> Sr No.</TableCell>
                  <TableCell>
                    {" "}
                    <Button onClick={sortChange}>
                      {sortName ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                    </Button>
                    Date
                  </TableCell>
                  <TableCell>ItemName</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Veg_or_Non Veg</TableCell>
                  <TableCell>Interests</TableCell>
                  <TableCell>ShopName</TableCell>
                  <TableCell>AddOn</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, ind) => (
                  <TableRow key={ind}>
                    <TableCell>{ind}</TableCell>
                    <TableCell>{user.item_name}</TableCell>
                    <TableCell>{user.price}</TableCell>
                    <TableCell>{user.rating}</TableCell>
                    <TableCell>{user.veg_or_nonveg}</TableCell>
                    <TableCell>{user.interests}</TableCell>
                    <TableCell>{user.shop_name}</TableCell>
                    <TableCell>{user.add_on}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      
      <Grid item xs={12}>
        <TextField
          label="ItemName"
          variant="outlined"
          value={item_name}
          onChange={onChangeItemName}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Price"
          variant="outlined"
          value={price}
          onChange={onChangePrice}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Rating"
          variant="outlined"
          value={rating}
          onChange={onChangeRating}
        />
      </Grid>
     <Grid item xs={12}>
        <TextField
          label="Veg_or_Nonveg"
          variant="outlined"
          value={veg_or_nonveg}
          onChange={onChangeVeg}
        />
      </Grid>
    <Grid item xs={12}>
        <TextField
          label="Interests"
          variant="outlined"
          value={shop_name}
          onChange={onChangeShopname}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Add_On"
          variant="outlined"
          value={add_on}
          onChange={onChangeAddon}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Interests"
          variant="outlined"
          value={interests}
          onChange={onChangeInterest}
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

export default AddFood;