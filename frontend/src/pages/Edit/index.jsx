import { useState, useEffect } from 'react';
import { Container } from './styles';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../services/axios/api';
import { FiArrowLeft } from 'react-icons/fi';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

/* eslint-disable */
function Edit() {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const params = useParams();

    async function handleSubmit(e) {
        e.preventDefault();
        if (!title || !rating || !description) {
            alert('Preencha todos os campos');
            return;
        }
        try {
            await api.put(`notes/${params.id}`, {
                title,
                rating,
                description,
            });
            alert('Nota editada com sucesso');
            navigate(`/preview/${params.id}`);
        } catch (error) {
            console.log(error);
            if (error.response) {
                alert(error.response.data.message);
                return;
            }
            alert('Algo deu errado, tente novamente');
        }
    }

    async function handleDeleteNote() {
        if (!confirm('Tem certeza que quer excluir essa nota')) {
            return;
        }
        try {
            await api.delete(`notes/${params.id}`);
            alert('Nota excluida com sucesso');
            navigate('/');
        } catch (error) {
            console.log(error);
            if (error.response) {
                alert(error.response.data.message);
                return;
            }
            alert('Algo deu errado, tente novamente');
        }
    }

    useEffect(() => {
        async function fetchNote() {
            try {
                const response = await api.get(`notes/${params.id}`);
                const { note } = response.data;
                setTitle(note.title);
                setRating(note.rating);
                setDescription(note.description);
            } catch (error) {
                if (error.response) {
                    alert(error.response.data.message);
                    return;
                }
                alert('Algo deu errado, tente novamente');
            }
        }
        fetchNote();
    }, []);

    return (
        <Container>
            <Header />
            <main>
                <Link to={`/preview/${params.id}`}>
                    <FiArrowLeft />
                    voltar
                </Link>

                <h2>Editar filme</h2>

                <form onSubmit={handleSubmit}>
                    <div className='flex'>
                        <Input
                            placeholder='Título'
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder='Sua nota (de 0 a 5)'
                            type='text'
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </div>
                    <textarea
                        placeholder='Observações'
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <div className='flex'>
                        <Button
                            title='Excluir'
                            mode='dark'
                            type='button'
                            onClick={handleDeleteNote}
                        />
                        <Button title='Salvar aleterações' type='submit' />
                    </div>
                </form>
            </main>
        </Container>
    );
}

export default Edit;
