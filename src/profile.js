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

function Profile(props) {
    return (
        <>
            <img src="https://wallpaperaccess.com/full/1567674.jpg" class="sign_in_bg" style={{ position: "absolute", height: "100%", width: "100%" }} />

            <NavBar />

            <br />

            <p style={{ position: 'relative', top: "20px", left: "160px", fontSize: "50px", fontFamily: "Secular One", color: "white", WebkitTextStroke: "1px black", WebkitTextStrokeColor: "black" }}>{[props.name]}</p>
        </>
    );
}

export default Profile;
