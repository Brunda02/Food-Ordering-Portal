import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Page from "./components/common/page";
import RegisterBuyer from "./components/common/RegisterBuyer";
import RegisterVendor from "./components/common/RegisterVendor";
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
import Login from "./components/common/Login";
import Mypage from "./components/common/myprofile";
import Mypage2 from "./components/common/myprofile2";
import Logout from "./components/common/Logout";
import Mypage3 from "./components/common/myprofile3";
import OrderList from "./components/users/Orderlist";
import AddFood from "./components/common/addfood";
// import BasicSelect from "./components/common/Select";

const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UsersList />} />
          <Route path="register" element={<Page />} />
          <Route path="registerbuyer" element={<RegisterBuyer />} />
          <Route path="registervendor" element={<RegisterVendor />} />
          <Route path="login" element={<Login />} />
          <Route path="myprofile" element={<Mypage />} />
          <Route path="myprofile2" element={<Mypage2 />} />
          <Route path="myprofile3" element={<Mypage3 />} />
          <Route path="logout" element={<Logout />} />
          <Route path="profile" element={<Profile />} />
          <Route path="addfood" element={<AddFood />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
