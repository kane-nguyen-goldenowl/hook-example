import React, {
    useState
} from 'react';
import {
    useNavigate
} from "react-router-dom";

import {
    loginApi
} from '../../api/auth';

import {
    useAuth
} from '../../contexts/AuthContext';

function Login() {
    console.log("render Login")
    const { handleLoginSuccess } = useAuth();
    let navigate = useNavigate();

    const initFormLogin = {
        error: "",
        isLoading: false,
        username: "",
        password: ""
    }
    const [formLogin, setFormLogin] = useState(initFormLogin);

    const handleChangeInput = (e) => {
        console.log("handleChangeInput")
        console.log(e.target.id)
        console.log(e.target.value)
        formLogin[e.target.id] = e.target.value;
        setFormLogin({ ...formLogin });
    }

    const handleLogin = async () => {
        try {
            console.log("handleLogin")
            formLogin.isLoading = true;
            setFormLogin({ ...formLogin });
            // call api login
            const result = await loginApi({
                username: formLogin.username,
                password: formLogin.password
            })
            console.log("loginApi", result)
            setFormLogin(initFormLogin);

            handleLoginSuccess(result)
            navigate("/profile");
        } catch (error) {
            formLogin.isLoading = false;
            formLogin.error = error.message;
            setFormLogin({ ...formLogin });
        }
    }

    return (
        <div className='container'>
            <div className='title'>
                Login
            </div>
            <div className='body'>
                {formLogin.error && <div>{formLogin.error}</div>}
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        onChange={handleChangeInput}
                        value={formLogin.username} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        onChange={handleChangeInput}
                        value={formLogin.password} />
                </div>
                <div>
                    {
                        formLogin.isLoading
                            ?
                            <button disabled={formLogin.isLoading}>Loading</button>
                            :
                            <button onClick={handleLogin}>Login</button>
                    }
                </div>
            </div>
        </div>
    );
}


export default Login;