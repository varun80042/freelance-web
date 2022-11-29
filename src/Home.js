import React from 'react';
import './App.css'

import im from './logo.png'
import vid from './bg_vid2.mp4'

import SearchBar from './search_bar';
import WhiteBox from './white_box';
import NavBar from './nav_bar';
import WebBox from './web_box';
import AudBox from './aud_box';
import VidBox from './vid_box';
import FeatureBlock from './features';
import TileChoiceBlock from './tile_choice';
import ProBlock from './pro_version';
import FootBar from './foot_bar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class App extends React.Component {

  render() {
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
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

        <div class='web_div' style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/1567674.jpg")', backgroundRepeat: "no-repeat", height: "100%", width: "100%", backgroundSize: "cover" }}>
          <br />
          <h1 style={{ fontFamily: "Secular One", fontSize: "50px", color: "white", WebkitTextStroke: "1px black" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Web Development</i></h1>
          <Carousel>
            <div>
              <WebBox name="Manoj Pandey" desc="I will create the best websites for you using MERN stack." cost="₹ 1,499" image="https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <WebBox name="Naren Srinivas" desc="I will make responsive webistes using ReactJS and Express." cost="₹ 990" image="https://www.webskittersacademy.in/wp-content/uploads/2015/08/Web-Developer-skill.jpg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <WebBox name="Swathi Kumar" desc="I will do the backend for your website using MongoDB." cost="₹ 1,299" image="https://cdn.columbiauniversitybootcamp.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_01-850x412.jpg" /> <div style={{ height: "50px" }}></div>
            </div>
            <div>
              <WebBox name="Manoj Pandey" desc="I will create the best websites for you using MERN stack." cost="₹ 1,499" image="https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <WebBox name="Naren Srinivas" desc="I will good at making responsive webistes using ReactJS." cost="₹ 990" image="https://www.webskittersacademy.in/wp-content/uploads/2015/08/Web-Developer-skill.jpg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <WebBox name="Swathi Kumar" desc="I will do the backend for your website using MongoDB." cost="₹ 1,299" image="https://cdn.columbiauniversitybootcamp.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_01-850x412.jpg" /> <div style={{ height: "50px" }}></div>
            </div>
          </Carousel>
          <br /><br /><br />
        </div>

        <WhiteBox />

        <div class='aud_div' style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/1567674.jpg")', backgroundRepeat: "no-repeat", height: "100%", width: "100%", backgroundSize: "cover" }}>
          <br />
          <h1 style={{ fontFamily: "Secular One", fontSize: "50px", color: "white", WebkitTextStroke: "1px black" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Music and Audio</i></h1>
          <Carousel>
            <div>
              <AudBox name="Ben Robinson" desc="I will clean up, edit, enhance or fix and restore your audio or music." cost="₹ 1,750" image="https://brybed.com/storage/img/681/854/7iyphGK6zayb3r07wWaBoUcgmF0jH0gySFauzdNM.jpeg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <AudBox name="Matt Howard" desc="I will create a professional DJ mix or mashup in any genre." cost="₹ 900" image="https://cdn.digitaldjtips.com/app/uploads/2019/05/08101601/fulltime-DJ-main.jpg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <AudBox name="Arun Lal" desc="I will produce accurate guitar transcriptions and create a sheet music." cost="₹ 799" image="https://rollingstoneindia.com/wp-content/uploads/2018/05/3-1.jpg" /> <div style={{ height: "50px" }}></div>
            </div>
            <div>
              <AudBox name="Ben Robinson" desc="I will clean up, edit, enhance or fix and restore your audio or music." cost="₹ 1,750" image="https://brybed.com/storage/img/681/854/7iyphGK6zayb3r07wWaBoUcgmF0jH0gySFauzdNM.jpeg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <AudBox name="Matt Howard" desc="I will create a professional DJ mix or mashup in any genre." cost="₹ 900" image="https://cdn.digitaldjtips.com/app/uploads/2019/05/08101601/fulltime-DJ-main.jpg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <AudBox name="Arun Lal" desc="I will produce accurate guitar transcriptions and create a sheet music." cost="₹ 799" image="https://rollingstoneindia.com/wp-content/uploads/2018/05/3-1.jpg" /> <div style={{ height: "50px" }}></div>
            </div>
          </Carousel>
          <br /><br /><br />
        </div>

        <WhiteBox />

        <div class='vid_div' style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/1567674.jpg")', backgroundRepeat: "no-repeat", height: "100%", width: "100%", backgroundSize: "cover" }}>
          <br />
          <h1 style={{ fontFamily: "Secular One", fontSize: "50px", color: "white", WebkitTextStroke: "1px black" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Video and Animation</i></h1>
          <Carousel>
            <div>
              <VidBox name="Naman Kulkarni" desc="I will do professional video editing and motion graphics." cost="₹ 1,999" image="https://www.reliablesoft.net/wp-content/uploads/2022/07/video-editing-courses.webp" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <VidBox name="Piyush Goyal" desc="I will make a professional 3D logo animation for your introductions." cost="₹ 999" image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/22527722/original/d9de303ea2f07efe1e75e1a67f657e33e6aa9b4f.jpg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <VidBox name="Nitin Reddy" desc="I will design any animated GIFs for you in less than 6 hours." cost="₹ 850" image="https://media.wired.com/photos/60dcea818a1e88a03ed5ce04/2:1/w_2399,h_1199,c_limit/Gear-Beef-Up-Video-Editing-PC-1124258613.jpg" /> <div style={{ height: "50px" }}></div>
            </div>
            <div>
              <VidBox name="Naman Kulkarni" desc="I will do professional video editing and motion graphics." cost="₹ 1,999" image="https://www.reliablesoft.net/wp-content/uploads/2022/07/video-editing-courses.webp" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <VidBox name="Piyush Goyal" desc="I will make a professional 3D logo animation for your introductions." cost="₹ 999" image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/22527722/original/d9de303ea2f07efe1e75e1a67f657e33e6aa9b4f.jpg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <VidBox name="Nitin Reddy" desc="I will design any animated GIFs for you in less than 6 hours." cost="₹ 850" image="https://media.wired.com/photos/60dcea818a1e88a03ed5ce04/2:1/w_2399,h_1199,c_limit/Gear-Beef-Up-Video-Editing-PC-1124258613.jpg" /> <div style={{ height: "50px" }}></div>
            </div>
          </Carousel>
          <br /><br /><br />
        </div>

        <WhiteBox />

        <FootBar />

      </>
    );
  }
}

export default App;
