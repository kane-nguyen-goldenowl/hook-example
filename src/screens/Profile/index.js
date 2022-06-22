import React from 'react';
import Nav from '../../components/Nav';

import {
    useAuth
} from '../../contexts/AuthContext';

function Profile() {
    console.log("render Profile")
    const { profile } = useAuth();

    return (
        <React.Fragment>
            <Nav />
            <div>
                <div>
                    Profile: {profile.username}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Profile;