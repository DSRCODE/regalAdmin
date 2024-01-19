import "./LoginPage.css"
import SlideImage1 from "../../assets/ClotheAdmin1.json"
import { Link } from "react-router-dom"
import Lottie from "lottie-react";
const ForgotPage = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-imagepart">
                    <Lottie className="lottie" animationData={SlideImage1} />
                </div>
                <form className="login-infopart">
                    <h3>Forgot Password</h3>
                    <label>Verify with Email Id</label>
                    <input type="text"
                        name="" id=""
                        placeholder="Enter Email..." />
                    <div className="loginbutton">
                        <button type="submit">Verify</button>
                    </div>
                    <Link to={"/login"} style={{ fontSize: "13px", letterSpacing: "1px", textAlign: "center", marginTop: "12px", cursor: "pointer", textDecoration: "none" }}>Go back to Login... </Link>
                </form>
            </div>
        </div>
    );
}

export default ForgotPage;
