import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/axios/api';
import defaultAvatar from '../../assets/avatar.jpg';

function Profile() {
    const { user, updateProfile } = useContext(AuthContext);
    const displayAvatar = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : defaultAvatar;
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [avatar, setAvatar] = useState(displayAvatar);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        const user = { name, email };
        if (avatarFile) user.avatar = avatarFile;
        if ((password && !newPassword) || (!password && newPassword)) {
            alert('Preencha os dois campos de senha para atualizar a senha');
            return;
        }
        if (password && newPassword) {
            user.password = password;
            user.newPassword = newPassword;
        }
        await updateProfile(user);
        setPassword('');
        setNewPassword('');
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        setAvatarFile(file);
        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>
            <header>
                <Link to='/'>
                    <FiArrowLeft /> Voltar
                </Link>
            </header>
            <form onSubmit={handleSubmit}>
                <div className='form-header'>
                    <img src={avatar} alt='User image' />
                    <label htmlFor='file-input'>
                        <FiCamera />
                        <input
                            type='file'
                            id='file-input'
                            onChange={handleImageChange}
                        />
                    </label>
                </div>
                <Input
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    placeholder='E-mail'
                    type='text'
                    icon={FiMail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder='Senha atual'
                    type='password'
                    icon={FiLock}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    placeholder='Nova senha'
                    type='password'
                    icon={FiLock}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <Button title='Salvar' type='submit' />
            </form>
        </Container>
    );
}

export default Profile;
