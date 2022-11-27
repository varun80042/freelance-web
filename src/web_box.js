function WebBox(props) {
    return <div class="web_box">
        <img class="web_img" src='https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/22527722/original/d9de303ea2f07efe1e75e1a67f657e33e6aa9b4f.jpg' />
        <img class="web_icon" src="https://www.clipartmax.com/png/middle/434-4349876_profile-icon-vector-png.png"></img>
        <p class='web_details'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.name} <br /><br /> {props.desc}<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;{props.cost} </p>
    </div>
}

export default WebBox;