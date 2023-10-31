import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {
    const { user } = useContext(AuthContext);

    return (
        <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
    );
}

export default Routes;
