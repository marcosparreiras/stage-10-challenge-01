import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import api from '../../services/axios/api';
import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Image from '../../assets/movie.jpg';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if (!name || !email || !password) {
            alert('Preencha todos os campos');
            return;
        }
        try {
            await api.post('users', { name, email, password });
            alert('Usuário criado com sucesso');
            navigate('/');
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
                return;
            }
            alert('Algo deu errado, tente novamente');
        }
    }

    return (
        <Container>
            <main>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <form onSubmit={handleSubmit}>
                    <h2>Crie sua conta</h2>
                    <Input
                        type='text'
                        placeholder='Nome'
                        icon={FiUser}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        type='text'
                        placeholder='E-mail'
                        icon={FiMail}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type='password'
                        placeholder='Senha'
                        icon={FiLock}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type='submit' title='Criar conta' />
                </form>
                <Link to='/'>
                    <FiArrowLeft />
                    Voltar para o login
                </Link>
            </main>
            <img src={Image} alt='Movie image' />
        </Container>
    );
}

export default SignUp;
