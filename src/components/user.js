import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
    const { user, isAuthenticated } = useAuth0();
    console.log(user)
    return isAuthenticated &&
        <div>Hello {user.name}
            <p> <img src={user.picture}></img></p>
            <p>{user.email}</p>
            <p>{user.updated_at}</p>


        </div>;
}

export default Profile;

