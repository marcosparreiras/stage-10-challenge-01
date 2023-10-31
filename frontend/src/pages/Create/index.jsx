import { useState } from 'react';
import { Container } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/axios/api';
import { FiArrowLeft } from 'react-icons/fi';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Mark from '../../components/Mark';

function Create() {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if (!title || !rating || !description || tags.length === 0) {
            alert('Preencha todos os campos');
            return;
        }
        try {
            await api.post('notes', { title, rating, description, tags });
            alert('Nota criada com sucesso');
            navigate('/');
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
                return;
            }
            alert('Algo deu errado, tente novamente');
        }
    }

    function handleAddTag() {
        setTags((prevState) => [...prevState, newTag]);
        setNewTag('');
    }

    function handleRemoveTag(tagName) {
        setTags((prevState) => prevState.filter((tag) => tag !== tagName));
    }

    function handleClearNote() {
        setTitle('');
        setRating('');
        setDescription('');
        setTags([]);
        setNewTag('');
    }

    return (
        <Container>
            <Header />
            <main>
                <Link to='/'>
                    <FiArrowLeft />
                    voltar
                </Link>

                <h2>Novo filme</h2>

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

                    <div>
                        <h3>Marcadores</h3>
                        <div className='mark-inputs'>
                            {tags &&
                                tags.map((tag, index) => (
                                    <Mark
                                        value={tag}
                                        key={String(index)}
                                        onClick={() => handleRemoveTag(tag)}
                                        isnew
                                    />
                                ))}
                            <Mark
                                onClick={handleAddTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                value={newTag}
                            />
                        </div>
                    </div>
                    <div className='flex'>
                        <Button
                            title='Limpar nota'
                            mode='dark'
                            type='button'
                            onClick={handleClearNote}
                        />
                        <Button title='Criar nota' type='submit' />
                    </div>
                </form>
            </main>
        </Container>
    );
}

export default Create;
