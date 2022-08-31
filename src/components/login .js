import { useAuth0 } from '@auth0/auth0-react';
import Profile from './user';
function Login() {
    const {
        isAuthenticated,
        loginWithRedirect,
    } = useAuth0();



    return !isAuthenticated && (
        <>
            <button onClick={loginWithRedirect}> LOG IN</button>
            <p>Log in please</p>
        </>
    );



}

export default Login;