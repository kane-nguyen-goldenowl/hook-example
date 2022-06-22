import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    useAuth
} from "../../contexts/AuthContext";

import './index.css';

function Nav() {
    const { auth, handleLogoutSuccess } = useAuth();

    const handleLogout = () => {
        handleLogoutSuccess();
    };

    return (
        <nav>
            <ul className="nav-ul">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
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
            {auth && <button onClick={handleLogout}>Logout</button>}
        </nav >
    );
}

export default Nav;