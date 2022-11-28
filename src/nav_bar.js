import logo from './nav_logo.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const NavBar = () => (
    <div class="nav_box">
        <div class="topnav">
            <nav>
                <Link to="/"><img src={logo} alt="Logo" height='80px' id='logo' /> </Link>
                <Link to="/signup"><p>Sign Up</p></Link>
                <Link to="/signin"><p>Sign In</p></Link>
                <Link to="/seller"><p>Become a Seller</p></Link>
            </nav>
        </div>
    </div>
);

export default NavBar;