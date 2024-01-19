import "./LoginPage.css"
import SlideImage1 from "../../assets/ClotheAdmin1.json"
import { Link } from "react-router-dom"
import Lottie from "lottie-react";
import { useFormik } from "formik"
const Signpup = () => {




    return (
        <div className="login-container">
            <div className="login-box">
                <form className="login-infopart">
                    <h3>SignUp</h3>
                    <label htmlFor="email">Email-ID</label>
                    <input type="email"
                        name="email"
                        id="email"
                        // onChange={handleChange}
                        // value={values.email}
                       
                        placeholder="Enter your Email-ID" />
                    <label> Name</label>
                    <input type="text"
                       
                        name="" id=""
                        placeholder="Enter Name" />
                    <label>Password</label>
                    <input type="password"
                        name="password"
                        // onChange={handleChange}
                        // value={values.password}
                        className="inputfield"
                        placeholder="Enter Password" />
                    <label>Confirm-Password</label>
                    <input type="password"
                     name="" id="" 
                     placeholder="Re-enter Password" />

                    <div className="loginbutton">
                        <button type=" submit">Signup</button>
                    </div>

                    <div className="signup-google">
                        <button className="google"><Link to={"https://accounts.google.com/"} style={{ textDecoration: "none", color: "white" }}> Continue with Google</Link></button>
                        <h6>Already Have an account?<Link to={"/login"} style={{ cursor: "pointer" }}>Login here</Link></h6>
                    </div>
                </form>
                <div className="login-imagepart">
                    <Lottie className="lottie" animationData={SlideImage1} />
                </div>
            </div>
        </div>
    );
}

export default Signpup;
