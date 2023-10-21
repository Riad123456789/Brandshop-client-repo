import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {

    const { user, } = useContext(AuthContext);
    const Location = useLocation()


    if (user) {
        return children;
    }

    return <Navigate state={Location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;