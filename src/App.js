import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import NoPageFound from './components/NoPageFound';

const App = () => {
    const { isSignedIn } = useSelector(state => state.signIn);
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} exact />
                <Route path="signin" element={<SignIn />} exact />
                {isSignedIn && <Route path="dashboard" element={<Dashboard />} exact />}
                <Route path="*" element={<NoPageFound />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;
