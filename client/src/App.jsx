import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Card from "./components/Card/Card";
import SideNav from "./components/sidenav/SideNav";
import Home from "./pages/Home";
import Contact from "./pages/contactus";
import Wish from "./components/WishCard/WishCard";
import FullCard from "./components/FullCard/FullCard";
import HotelProvider from "./HotelContext";
import BookHotel from "./components/FullCard/BookHotel";
import WishList from "./components/WishList/wishList";

const App = () => {
  return (
    <HotelProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/signup" />} />
          <Route path="/contactus" element={<Contact />}></Route>
          <Route path="/fullcard" element={<FullCard />}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/wishlist" element={<WishList></WishList>}></Route>
        </Routes>
      </Router>
    </HotelProvider>
  );
};

export default App;
