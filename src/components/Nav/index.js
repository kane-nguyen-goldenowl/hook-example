import React from 'react';
import {
    Link,
    useNavigate
} from 'react-router-dom';
import {
    useAuth
} from "../../contexts/AuthContext";

import './index.css';

function Nav() {
    const { auth, handleLogoutSuccess } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        handleLogoutSuccess();
    };

    const redirectToLogin = () => {
        navigate('/login');
    }

    return (
        <nav className='nav'>
            <ul className="nav-left">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/glance">Hooks at a Glance</Link>
                </li>
                <li>
                    <Link to="/to-do-example">ToDo Example</Link>
                </li>
                <li>
                    <Link to="/to-do-example-with-reducer">ToDo Example With Reducer</Link>
                </li>
            </ul>
            <div className='nav-right'>
                {auth && <button onClick={handleLogout}>Logout</button>}
                {!auth && <button onClick={redirectToLogin}>Login</button>}
            </div>
        </nav >
    );
}

export default Nav;