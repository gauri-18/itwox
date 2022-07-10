import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { changeUserSignInStatus } from '../redux/actions/SignInAction';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const handleUsernameChanged = (event) => {
        setUserName(event.target.value);
    }

    const handlePasswordChanged = (event) => {
        setPassword(event.target.value);
    }

    const handleLoginAction = () => {
        if (!emailRegex.test(userName)) {
            setError('Username should be valid email address.');
        } else {
            setError('');
            navigate('/dashboard');
            dispatch(changeUserSignInStatus(true));
        }
    }

    return (
        <div>
            Sign In<br /><br />
            <div>
                Username<br />
                <input type="text" id="email" name="email" value={userName} onChange={handleUsernameChanged} />
            </div>
            <div style={{ marginTop: 10 }}>
                Password<br />
                <input type="password" id="password" name="password" value={password} onChange={handlePasswordChanged} />
            </div>
            {error &&
                <small style={{ color: 'red' }}>
                    {error}
                </small>
            }
            <br />
            <input type="button" value={'Login'} onClick={handleLoginAction} disabled={!(userName && password)} /><br />
        </div>
    );
}

export default SignIn;
