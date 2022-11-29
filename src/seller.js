import React from 'react';
import './App.css'

import im from './logo.png'
import bg from './sign_bg.jpeg'

import SearchBar from './search_bar';
import WhiteBox from './white_box';
import NavBar from './nav_bar';
import WebBox from './web_box';
import FeatureBlock from './features';
import TileChoiceBlock from './tile_choice';
import ProBlock from './pro_version';
import FootBar from './foot_bar';

function Seller() {
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
    return (
        <>

            {/* <div class="seller1_box">
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
            </div> */}

            {/* <div class="seller2_box">
                <form>
                    <label for="category" style={{ fontFamily: "Courier", fontSize: "22px", fontWeight: "bold" }}>Category: &nbsp;</label>
                    <select id="category" name="category" style={{ fontFamily: "Arial", fontSize: "15px" }}>
                        <option value="choice_web">Web Development</option>
                        <option value="choice_aud">Music and Audio</option>
                        <option value="choice_vid">Video and Animation</option>
                    </select>
                    <br /><br />

                    <label for="description" style={{ fontFamily: "Courier", fontSize: "22px", fontWeight: "bold" }}>Description: </label><br /><br />
                    <textarea type="text" id="description" name="description" style={{ fontSize: "15px", padding: "2%", height: "100px", width: "432px", resize: "none" }} /><br /><br /><br />

                    <label for="cost" style={{ fontFamily: "Courier", fontSize: "22px", fontWeight: "bold" }}>Cost of Service (in INR): </label><br /><br />
                    <input type="number" id="cost" name="cost" style={{ fontSize: "20px", padding: "2%" }} /><br /><br /><br />

                    <label for="pic" style={{ fontFamily: "Courier", fontSize: "22px", fontWeight: "bold" }}>Cover picture: </label><br />
                    <input type="file" id="pic" name="pic" accept="image/png, image/gif, image/jpeg" style={{ fontSize: "15px", padding: "2%" }} />
                </form>
                <button type="submit" id="search_button" style={{ top: "480px", left: "-180px", fontSize: "16px", height: "50px", width: "90px", padding: "10px", position: 'absolute' }}>Submit</button>
            </div> */}

            <img src={bg} class="sign_up_bg" style={{ position: "fixed", top: "70px", height: "100%", width: "100%" }} />

            <NavBar />
            <br />

            {/* <img src={im} alt="Logo" height='350px' style={{ position: "relative", top: "120px", left: "200px" }} /> */}
            <p>
                <span className="search_text" style={{ position: "relative", top: "70px", left: "80px", fontFamily: "Silkscreen", color: "darkblue", fontSize: "35px" }}>1. Personal Details</span>
            </p>

            <p class="signIn">Seller</p>

            <div class="seller1_box">
                <form>
                    <label for="firstname" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>First Name</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="firstname" name="firstname" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} /><br /><br />

                    <label for="lastname" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Last Name</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="lastname" name="lastname" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} /><br /><br />

                    <label for="username" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Username</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="username" name="username" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} /><br /><br />

                    <label for="email" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Email</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="email" id="email" name="email" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} /><br /><br />

                    <label for="age" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Age</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="number" id="age" name="age" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} /><br /><br />

                    <label for="country" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Country</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="country" name="country" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} /><br /><br />

                    <label for="phone" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Phone</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="tel" id="phone" name="phone" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} /><br /><br />
                </form>
            </div>

            <br /><br />

            <p>
                <span className="search_text" style={{ position: "relative", top: "-80px", left: "80px", fontFamily: "Silkscreen", color: "darkblue", fontSize: "35px" }}>2. Professional Details</span>
            </p>

            <div class="seller2_box">
                <form>
                    <label for="category" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Category</label> <br/>
                    <select id="category" name="category" style={{ fontFamily: "Secular One", fontSize: "18px", width:"230px", height:"40px" }}>
                        <option value="choice_web">&nbsp;&nbsp;Web Development</option>
                        <option value="choice_aud">&nbsp;&nbsp;Music and Audio</option>
                        <option value="choice_vid">&nbsp;&nbsp;Video and Animation</option>
                    </select> <br/><br/>

                    <label for="description" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Description</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <textarea type="text" id="description" name="description" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", height: "100px", width:"458px", resize:"none" }} /><br /><br />

                    <label for="cost" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Cost of Service (in INR)</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="number" id="cost" name="cost" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} /><br /><br />

                    <label for="cover_file" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Cover Picture</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="file" id="cover_file" name="cover_file" accept="image/png, image/jpeg" style={{ fontSize: "15px", padding: "2%",  width: "250px", height: "15px" }} /><br /><br />
                    
                    <button type="submit" id="search_button" style={{ top: "6px", left: "170px", fontSize: "16px", height: "60px", width: "110px", padding: "10px", fontFamily: "Silkscreen", fontWeight: "bold" }}>Apply</button>

                </form>
            </div>
        </>
    );
}

export default Seller;
