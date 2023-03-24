import './Login.css';
// import { a } from "react-router-dom";

const Login = () => {
    const toggleForm = (e) => {
        const container = document.querySelector('.container');
        const section = document.querySelector('section');
        container.classList.toggle('active');
        section.classList.toggle('active');
    }
    return (
        <section>
            <div className="container">
                <div className="user signinBx">
                    <div className="imgBx shift"><img src="./images/Cyber1.jpg" alt="" /></div>
                    <div className="formBx">
                        <form>
                            <h2>Sign In</h2>
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <a to="/">
                                <input type="submit" value="Login" />
                            </a>
                            <p className="signup">don't have an account? <a href="#" onClick={(event) => { toggleForm(event) }}>Sign up.</a></p>
                        </form>
                    </div>
                </div>

                <div className="user signupBx">
                    <div className="formBx">
                        <form>
                            <h2>Create an account</h2>
                            <input type="text" placeholder="Username" />
                            <input type="text" placeholder="Email Address" />
                            <input type="password" placeholder="Create Password" />
                            <input type="password" placeholder="Confirm Password" />
                            <a to="/">
                                <input type="submit" value="Sign Up" />
                            </a>
                            <p className="signup">Already have an account? <a href="#" onClick={(event) => { toggleForm(event) }}>Sign in.</a></p>
                        </form>
                    </div>
                    <div className="imgBx"><img src="https://caricom.org/wp-content/uploads/data-security-caricom.jpg" alt="" /></div>
                </div>
            </div>
        </section>
    )
}

export default Login;