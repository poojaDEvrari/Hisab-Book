import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefrshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);

            // Redirect if accessing auth pages while authenticated
            if (
                ['/login', '/signup', '/'].includes(location.pathname)
            ) {
                navigate('/home');
            }
        } else {
            setIsAuthenticated(false);
        }
    }, [location.pathname, setIsAuthenticated, navigate]);

    return null; // No UI needed for this component
}

export default RefrshHandler;
