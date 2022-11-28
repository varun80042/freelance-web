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

function Seller() {
    return (
        <>
            <img src={bg} class="sign_in_bg" style={{ position: "absolute", height: "100%", width: "100%" }} />

            <NavBar />

            <br />

            <p style={{position:'relative', top:"20px", left:"160px", fontSize:"50px", fontFamily:"Secular One", color:"white",WebkitTextStroke:"1px black", WebkitTextStrokeColor:"black"}}>Personal Details</p>
            <p style={{position:'relative', bottom:"102px", left:"925px", fontSize:"50px", fontFamily:"Secular One", color:"white",WebkitTextStroke:"1px black", WebkitTextStrokeColor:"black"}}>Professional Details</p>


            <div class="seller1_box">
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

                    <label for="phone" style={{ fontFamily: "Courier", fontSize: "22px", fontWeight: "bold" }}>Phone: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="tel" id="phone" name="phone" style={{ fontSize: "20px", padding: "2%" }} /><br /><br />

                </form>
            </div>

            <div class="seller2_box">
                <form>
                    <label for="description" style={{ fontFamily: "Courier", fontSize: "22px", fontWeight: "bold" }}>Description: </label><br/><br/>
                    <textarea type="text" id="description" name="description" style={{ fontSize: "20px", padding: "2%" }} /><br /><br /><br />

                    <label for="cost" style={{ fontFamily: "Courier", fontSize: "22px", fontWeight: "bold" }}>Cost of Service (in INR): </label><br/><br/>
                    <input type="number" id="cost" name="cost" style={{ fontSize: "20px", padding: "2%" }} /><br /><br /><br />

                    <label for="cost" style={{ fontFamily: "Courier", fontSize: "22px", fontWeight: "bold" }}>Cover picture: </label><br/><br/>
                </form>
                <button type="submit" id="search_button" style={{top:"480px", left:"-180px", fontSize:"16px", height:"50px", width:"90px", padding:"10px", position:'absolute'}}>Submit</button>
            </div>
        </>
    );
}

export default Seller;
