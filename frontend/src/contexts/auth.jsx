import { createContext, useState, useEffect } from 'react';
import api from '../services/axios/api';

/* eslint-disable */
export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    async function login({ email, password }) {
        try {
            const response = await api.post('login', { email, password });
            const { token, user } = response.data;
            localStorage.setItem('@rocketmovies:user', JSON.stringify(user));
            localStorage.setItem('@rocketmovies:token', token);
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUser(user);
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
                return;
            }
            alert('Algo deu errado, tente novamente');
        }
    }

    function logout() {
        localStorage.removeItem('@rocketmovies:user');
        localStorage.removeItem('@rocketmovies:token');
        delete api.defaults.headers.common['Authorization'];
        setUser(null);
    }

    async function updateProfile(newUserData) {
        try {
            if (newUserData.avatar) {
                const data = new FormData();
                data.append('avatar', newUserData.avatar);
                await api.patch('users/avatar', data);
            }
            const response = await api.put('users', newUserData);
            setUser(response.data.user);
            localStorage.setItem(
                '@rocketmovies:user',
                JSON.stringify(response.data.user)
            );
            alert('Perfil atualizado');
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
                return;
            }
            alert('Algo deu errado, tente novamente');
            console.log(error);
        }
    }

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('@rocketmovies:user'));
        const token = localStorage.getItem('@rocketmovies:token');
        if (userData && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUser(userData);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
