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

function SignIn() {
    return (
      <>
        <img src={bg} class="sign_in_bg" style={{position:"absolute", height:"100%", width:"100%"}}/>

        <NavBar />

        <img src={im} alt="Logo" height='350px' style={{ position: "relative", top: "120px", left: "200px" }} />
        <p>
                <span className="search_text" style={{position:"relative", top: "85px", left:"80px"}}>Find the perfect <i>freelance</i> <br /> services for your business <br /></span>
        </p>

        <p class="signIn">Sign In</p>

        <div class="sign_in_box">
          <form>
            <label for="email" style={{fontFamily:"Courier", fontSize:"20px", fontWeight:"bold"}}>Email:</label><br />
            <input type="text" id="email" name="email" style={{fontSize:"23px", padding:"2%"}} /><br /><br /><br />

            <label for="password" style={{fontFamily:"Courier", fontSize:"20px", fontWeight:"bold"}}>Password:</label><br />
            <input type="text" id="password" name="password" style={{fontSize:"23px", padding:"2%"}}/><br />

            <button type="submit" id="search_button" style={{top:"55px", left:"200px", fontSize:"16px", height:"50px", width:"90px", padding:"10px"}}>Submit</button>

            <a style={{position:"relative", bottom:"55px", left:"1px"}}> <p>Forgot Password</p></a>

          </form>
        </div>
      </>
    );
}

export default SignIn;
