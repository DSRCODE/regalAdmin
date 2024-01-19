import "./LoginPage.css"
import SlideImage1 from "../../assets/ClotheAdmin1.json"
import { Link } from "react-router-dom"
import Lottie from "lottie-react";
const LoginPage = () => {
    return (
        <div className="login-box">
            <div className="login-imagepart">
                <Lottie className="lottie" animationData={SlideImage1} />
            </div>
            <form className="login-infopart">
                <h3>Login</h3>
                <label>Email ID</label>
                <input type="text" name="" id="" placeholder="Enter Email ID" />
                <label>Password</label>
                <input type="password"  name="" id="" placeholder="Enter Password" />
                <div className="loginbutton">
                    <button type="submit" >Login</button>
                </div>

                <div className="forgotbox">
                    <h6><Link to={"/forgot"} style={{ textDecoration: "none", color: "black", fontSize: "12px", letterSpacing: "1px" }}>Forgot Password?</Link></h6>
                    <button className="signupbutton"><Link to={"/signup"} style={{ textDecoration: "none", color: "white" }}>Signup</Link></button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
