import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Canteen Portal
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/order")}>
            Order-List
          </Button>
          <Button color="inherit" onClick={() => navigate("/favourites")}>
            Favourites
          </Button>
          <Button color="inherit" onClick={() => navigate("/logout")}>
            LogOut
          </Button>
          <Button color="inherit" onClick={() => navigate("/myprofile2")}>
            My Profile
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar2;
