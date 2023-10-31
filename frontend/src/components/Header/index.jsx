import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, UserInfo } from './styles';
import Input from '../Input';
import { AuthContext } from '../../contexts/auth';
import api from '../../services/axios/api';
import defaultAvatar from '../../assets/avatar.jpg';

/* eslint-disable */
function Header({ showInput = false, ...rest }) {
    const { logout, user } = useContext(AuthContext);
    const avatar = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : defaultAvatar;

    function handleLogout() {
        logout();
    }

    return (
        <Container>
            <h1>RocketMovies</h1>
            {showInput && (
                <Input placeholder='Pesquisar pelo título' {...rest} />
            )}
            <UserInfo>
                <div>
                    <Link to='/profile'>{user.name}</Link>
                    <button onClick={handleLogout}>sair</button>
                </div>
                <Link to='/profile'>
                    <img src={avatar} />
                </Link>
            </UserInfo>
        </Container>
    );
}

export default Header;
