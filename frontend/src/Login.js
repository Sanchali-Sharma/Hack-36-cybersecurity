import './Login.css';
import { useState,useRef } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
// import { a } from "react-router-dom";

const Login = ({setCurrentUser}) => {
    let history=useHistory();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorL, setErrorL] = useState(false);

    const toggleForm = (e) => {
        const container = document.querySelector('.container');
        const section = document.querySelector('section');
        container.classList.toggle('active');
        section.classList.toggle('active');
    }

    const usernameRefR = useRef();
    const emailRefR = useRef();
    const passwordRefR = useRef();
    const usernameRefL = useRef();
    const passwordRefL = useRef();

    const handleRegister=async(e)=>{
        e.preventDefault();
        const newUser = {
            username: usernameRefR.current.value,
            email: emailRefR.current.value,
            password: passwordRefR.current.value,
        }

        try {
            await axios.post("http://localhost:8800/users/register", newUser);
            setError(false);
            setSuccess(true);
        } catch (err) {
        setError(true);
        }
    }
    const handleLogin=async(e)=>{
        e.preventDefault();
        const user = {
            username: usernameRefL.current.value,
            password: passwordRefL.current.value,
        };
        try {
            const res = await axios.post("http://localhost:8800/users/login", user);
            console.log(res.data.username)
            setCurrentUser(res.data.username);
            history.push('/home')
            // myStorage.setItem('user', res.data.username);
        }catch(err) {
            setErrorL(true);
        }
    }
    return (
        <section>
            <div className="container">
                <div className="user signinBx">
                    <div className="imgBx shift"><img src="./images/Cyber1.jpg" alt="" /></div>
                    <div className="formBx">
                        <form onSubmit={handleLogin}>
                            <h2>Sign In</h2>
                            <input type="text" placeholder="Username" ref={usernameRefL} />
                            <input type="password" placeholder="Password" ref={passwordRefL}/>
                            <a to="/">
                                <input type="submit" value="Login" />
                            </a>
                            <p className="signup">don't have an account? <a href="#" onClick={(event) => { toggleForm(event) }}>Sign up.</a></p>
                            {errorL && <span className="failure">Something went wrong!</span>}
                        </form>
                    </div>
                </div>

                <div className="user signupBx">
                    <div className="formBx">
                        <form onSubmit={handleRegister}> 
                            <h2>Create an account</h2>
                            <input type="text" placeholder="Username" ref={usernameRefR}/>
                            <input type="text" placeholder="Email Address" ref={emailRefR}/>
                            <input type="password" placeholder="Create Password" />
                            <input type="password" placeholder="Confirm Password" ref={passwordRefR}/>
                            <a to="/">
                                <input type="submit" value="Sign Up" />
                            </a>
                            <p className="signup">Already have an account? <a href="#" onClick={(event) => { toggleForm(event) }}>Sign in.</a></p>
                            {success && (
            <               span className="success">Successfull. You can login now!</span>
                            )}
                            {error && <span className="failure">Something went wrong!</span>}
                        </form>
                    </div>
                    <div className="imgBx"><img src="https://caricom.org/wp-content/uploads/data-security-caricom.jpg" alt="" /></div>
                </div>
            </div>
        </section>
    )
}

export default Login;