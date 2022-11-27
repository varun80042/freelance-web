import React from 'react';
import './App.css'

import im from './logo.png'
import bg from './signin.png'

import SearchBar from './search_bar';
import WhiteBox from './white_box';
import NavBar from './nav_bar';
import WebBox from './web_box';
import FeatureBlock from './features';
import TileChoiceBlock from './tile_choice';
import ProBlock from './pro_version';
import FootBar from './foot_bar';

function SignUp() {
    return (
      <>
        <img src={bg} class="sign_in_bg" style={{ position: "absolute", height: "100%", width: "100%" }} />

        <NavBar />

        <img src={im} alt="Logo" height='350px' style={{ position: "relative", top: "120px", left: "200px" }} />
        <p>
          <span className="search_text" style={{ position: "relative", top: "85px", left: "80px" }}>Find the perfect <i>freelance</i> <br /> services for your business <br /></span>
        </p>

        <p class="signUp">Sign Up</p>

        <div class="sign_up_box">
          <form>
            <label for="firstname" style={{ fontFamily: "Courier", fontSize: "22px", fontWeight: "bold" }}>First Name: &nbsp;</label>
            <input type="text" id="firstname" name="firstname" style={{ fontSize: "20px", padding: "2%" }} /><br /><br />

            <label for="lastname" style={{ fontFamily: "Courier", fontSize: "22px", fontWeight: "bold" }}>Last Name: &nbsp;&nbsp;</label>
            <input type="text" id="lastname" name="lastname" style={{ fontSize: "20px", padding: "2%" }} /><br /><br />

            <label for="age" style={{ fontFamily: "Courier", fontSize: "22px", fontWeight: "bold" }}>Age: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="number" id="age" name="age" style={{ fontSize: "20px", padding: "2%" }} /><br /><br />

            <label for="country" style={{ fontFamily: "Courier", fontSize: "22px", fontWeight: "bold" }}>Country: &nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="number" id="country" name="country" style={{ fontSize: "20px", padding: "2%" }} /><br /><br />

            <label for="email" style={{ fontFamily: "Courier", fontSize: "22px", fontWeight: "bold" }}>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" id="email" name="email" style={{ fontSize: "20px", padding: "2%" }} /><br /><br />

            <label for="password" style={{ fontFamily: "Courier", fontSize: "22px", fontWeight: "bold" }}>Password: &nbsp;&nbsp;&nbsp;</label>
            <input type="text" id="password" name="password" style={{ fontSize: "20px", padding: "2%" }} />

            <button type="submit" id="search_button" style={{ top: "40px", left: "180px", fontSize: "16px", height: "60px", width: "100px", padding: "10px" }}>Register</button>


          </form>
        </div>
      </>
    );
}

export default SignUp;
