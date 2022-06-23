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
            <ul className="nav-left top-level-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                {
                    auth &&
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                }
                <li>
                    Example
                    <ul className='second-level-menu'>
                        <li>
                            <Link to="/glance">Hooks at a Glance</Link>
                        </li>
                        <li>
                            <Link to="/to-do-example">ToDo Example</Link>
                        </li>
                        <li>
                            <Link to="/to-do-example-with-reducer">ToDo Example With Reducer</Link>
                        </li>
                        <li>
                            <Link to="/custom-hook">Customer Hook</Link>
                        </li>
                        <li>
                            <Link to="/use-callback">Use Callback</Link>
                        </li>
                        <li>
                            <Link to="/use-memo">Use Memo</Link>
                        </li>
                        <li>
                            <Link to="/use-transition">Use Transition</Link>
                        </li>
                        <li>
                            <Link to="/use-deferred-value">Use Deferred Value</Link>
                        </li>
                        <li>
                            <Link to="/use-sync-external-store">Use Sync External Store</Link>
                        </li>
                    </ul>
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