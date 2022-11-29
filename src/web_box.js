import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function WebBox(props) {
    return <div class="web_box">
        <img class="web_img" src={props.image} />
        {/* <img class="web_icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3G-KD3kb60BwTT7Xa_zep1AkzwlBElkrUv2E188rxhMHpr1xr3zGb7UwVppv_4i6i3w&usqp=CAU"></img> */}
        <p class='web_details'>&nbsp;&nbsp;&nbsp;&nbsp;
            <b style={{ position: "relative", bottom: "23px", right: "18px", fontSize: "22px" }}>{props.name}</b> <br /><br />
            <div style={{ position: "relative", bottom: "30px", fontSize: "18px" }}>{props.desc}</div><br /><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <Link to="/profile"><button class="buy_now">Buy Now <br />{props.cost}</button></Link>
    </div>
}

export default WebBox;