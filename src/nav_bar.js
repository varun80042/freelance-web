import logo from './nav_logo.png'

const NavBar = () => (
    <div class="nav_box">
        <div class="topnav">
            <a href='http://localhost:3000/'><img src={logo} alt="Logo" height='80px' id='logo' /> </a>
            <a><p>Sign Up</p></a>
            <a><p>Sign In</p></a>
            <a><p>Become a Seller</p></a>
        </div>
    </div>
);

export default NavBar;