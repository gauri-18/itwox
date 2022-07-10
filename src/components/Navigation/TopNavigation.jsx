import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { changeUserSignInStatus } from '../../redux/actions/SignInAction';

import './TopNavigation.css';

const TopNavigation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isSignedIn } = useSelector(state => state.signIn);

    const handleDashboardClickedAction = () => {
        navigate('/dashboard');
    };


    const handleSignOutClickedAction = () => {
        navigate('/');
        dispatch(changeUserSignInStatus(false));
    };

    const handleSignInClickedAction = () => {
        navigate('/signin');
    };

    let topNavigationContent = null;
    if (isSignedIn) {
        topNavigationContent = (
            <>
                {/* <button onClick={handleDashboardClickedAction} >Dashboard</button> */}
                <button onClick={handleSignOutClickedAction} >Sign Out</button>
            </>
        );
    } else {
        topNavigationContent = (
            <button onClick={handleSignInClickedAction}>Sign In</button>
        );
    }

    return (
        <div className="topNavigation">
            {topNavigationContent}
        </div>
    )
};

export default TopNavigation;
