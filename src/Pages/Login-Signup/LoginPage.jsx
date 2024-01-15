import "./LoginPage.css"
import SlideImage1 from "../../assets/ClotheAdmin1.json"
import {Link } from "react-router-dom"
import Lottie from "lottie-react";
const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-imagepart">
                    <Lottie className="lottie" animationData={SlideImage1} />
                </div>
                <div className="login-infopart">
                    <h3>Login</h3>
                    <span>Email ID</span>
                    <input type="text" className="inputfield" name="" id="" placeholder="Enter Email ID" />
                    <span>Password</span>
                    <input type="password" className="inputfield" name="" id="" placeholder="Enter Password" />
                    <div className="rememberbox">
                        <input type="checkbox" name="Remember" id="Remember" />
                        <label htmlFor="Remember">Remember Me</label>
                    </div>
                    <div className="loginbutton">
                        <button >Login</button>
                    </div>

                    <div className="forgotbox">
                        <h6>Forgot Password?</h6>
                        <button className="signupbutton"><Link to={"/signup"} style={{textDecoration:"none",color:"white"}}>Signup</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
