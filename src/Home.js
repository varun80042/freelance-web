import React from 'react';
import './App.css'

import im from './logo.png'
import vid from './bg_vid2.mp4'

import SearchBar from './search_bar';
import WhiteBox from './white_box';
import NavBar from './nav_bar';
import WebBox from './web_box';
import FeatureBlock from './features';
import TileChoiceBlock from './tile_choice';
import ProBlock from './pro_version';
import FootBar from './foot_bar';

class App extends React.Component {

  render() {
    return (
      <>
        <video src={vid} type="video/mp4" muted loop id="myVideo" height='698px' autoPlay></video>

        <NavBar />

        <img src={im} alt="Logo" height='290px' id='im' />

        <SearchBar />

        <br /><br /><br /><br /><br /><br /><br /><br /><br />

        <WhiteBox />

        <TileChoiceBlock />

        <WhiteBox />

        <FeatureBlock />

        <WhiteBox />

        <ProBlock />

        <WhiteBox />

        <div class='web_dev' style={{ backgroundColor: "grey" }}>
          <br />
          <h1 style={{ fontFamily: "Secular One", fontSize: "45px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>1. Web Development</i></h1>
          <WebBox name="Mark" desc="free" cost="₹100" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <WebBox name="Mark" desc="free" cost="₹100" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <WebBox name="Mark" desc="free" cost="₹100" /> <div style={{ height: "50px" }}></div>
          <WebBox name="Mark" desc="free" cost="₹100" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <WebBox name="Mark" desc="free" cost="₹100" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <WebBox name="Mark" desc="free" cost="₹100" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br /><br /><br />
        </div>

        <WhiteBox />

        <div class='web_dev' style={{ backgroundColor: "grey" }}>
          <br />
          <h1 style={{ fontFamily: "Secular One", fontSize: "45px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>2. Music and Audio</i></h1>
          <WebBox name="Mark" desc="free" cost="₹100" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <WebBox name="Mark" desc="free" cost="₹100" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <WebBox name="Mark" desc="free" cost="₹100" /> <div style={{ height: "50px" }}></div>
          <WebBox name="Mark" desc="free" cost="₹100" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <WebBox name="Mark" desc="free" cost="₹100" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <WebBox name="Mark" desc="free" cost="₹100" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br /><br /><br />
        </div>

        <WhiteBox />

        <div class='web_dev' style={{ backgroundColor: "grey" }}>
          <br />
          <h1 style={{ fontFamily: "Secular One", fontSize: "45px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>3. Video and Animation</i></h1>
          <WebBox name="Mark" desc="free" cost="₹100" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <WebBox name="Mark" desc="free" cost="₹100" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <WebBox name="Mark" desc="free" cost="₹100" /> <div style={{ height: "50px" }}></div>
          <WebBox name="Mark" desc="free" cost="₹100" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <WebBox name="Mark" desc="free" cost="₹100" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <WebBox name="Mark" desc="free" cost="₹100" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br /><br /><br />
        </div>

        <WhiteBox />

        <FootBar />

      </>
    );
  }
}

export default App;
