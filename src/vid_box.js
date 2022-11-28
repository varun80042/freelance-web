import './App.css'

function VidBox(props) {
    return <div class="vid_box">
        <img class="aud_img" src={props.image} />
        <img class="vid_icon" src="https://www.clipartmax.com/png/middle/434-4349876_profile-icon-vector-png.png"></img>
        <p class='vid_details'>&nbsp;&nbsp;&nbsp;&nbsp;
            <b style={{ position: "relative", bottom: "22px", fontSize: "22px" }}>{props.name}</b> <br /><br /> 
            <div style={{ position: "relative", bottom: "30px", fontSize: "18px" }}>{props.desc}</div><br /><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <button class="buy_now">Buy Now <br/>{props.cost}</button>
    </div>
}

export default VidBox;