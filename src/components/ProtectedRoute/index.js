import {
    Navigate,
    useLocation,
} from 'react-router-dom';

import {
    useAuth
} from '../../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
    console.log("render ProtectedRoute")
    const { auth } = useAuth();
    const location = useLocation();

    if (!auth) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
};

export default ProtectedRoute;