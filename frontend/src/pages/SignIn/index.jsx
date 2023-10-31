import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Image from '../../assets/movie.jpg';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            alert('Preencha todos os campos');
            return;
        }
        await authContext.login({ email, password });
    }

    return (
        <Container>
            <main>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <form onSubmit={handleSubmit}>
                    <h2>Faça seu login</h2>
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
                    <Button type='submit' title='Entrar' />
                </form>
                <Link to='/register'>Criar conta</Link>
            </main>
            <img src={Image} alt='Movie image' />
        </Container>
    );
}

export default SignIn;
