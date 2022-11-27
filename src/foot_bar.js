import logo from './nav_logo.png'

const FootBar = () => (
    <div class="foot_box" style={{ backgroundColor: "rgb(208, 205, 205)"}}>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={logo} style={{ height: "60px" }}></img>
        <h3 style={{ position: 'relative', bottom: '60px', left: '150px' }}>© VLANZ International Ltd. 2022</h3>
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" style={{ height: "30px", position: 'relative', bottom: '130px', left: '1250px' }}></img>
        <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" style={{ height: "50px", position: 'relative', bottom: '120px', left: '1150px' }}></img>
        <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png" style={{ height: "35px", position: 'relative', bottom: '126px', left: '1230px' }}></img>
        <img src="https://www.freepnglogos.com/uploads/linkedin-symbol-logo-22.png" style={{ height: "33px", position: 'relative', bottom: '128px', left: '1260px' }}></img>
    </div>
);

export default FootBar;
