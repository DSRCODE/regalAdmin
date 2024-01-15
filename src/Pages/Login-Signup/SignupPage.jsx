import "./LoginPage.css"
import SlideImage1 from "../../assets/ClotheAdmin1.json"
import {Link} from "react-router-dom"
import Lottie from "lottie-react";
const Signpup = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-infopart">
                    <h3>SignUp</h3>
                    <span>Email-ID</span>
                    <input type="email" className="inputfield" name="" id="" placeholder="Enter your Email-ID" />
                    <span> Name</span>
                    <input type="text" className="inputfield" name="" id="" placeholder="Enter Name" />
                    <span>Create Password</span>
                    <input type="password" className="inputfield" name="" id="" placeholder="Enter Password" />
                    <span>Confirm-Password</span>
                    <input type="password" className="inputfield" name="" id="" placeholder="Re-Enter Password" />
                    <div className="rememberbox">
                        <input type="checkbox" name="Remember" id="Remember" />
                        <label htmlFor="Remember">Remember Me</label>
                    </div>
                    <div className="loginbutton">
                        <button>Signup</button>
                    </div>

                    <div className="signup-google">
                        <button className="google"><Link to={"https://accounts.google.com/"} style={{ textDecoration: "none", color: "white" }}> Continue with Google</Link></button>
                        <h6>Already Have an account?<Link to={"/login"} style={{cursor:"pointer"}}>Login here</Link></h6>
                    </div>
                </div>
                <div className="login-imagepart">
                    <Lottie className="lottie" animationData={SlideImage1} />
                </div>
            </div>
        </div>
    );
}

export default Signpup;
