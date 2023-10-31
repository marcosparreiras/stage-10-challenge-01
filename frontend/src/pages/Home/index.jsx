import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Container } from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Card from '../../components/Card';
import api from '../../services/axios/api';

/* eslint-disable */
function Home() {
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        async function fetchNotes() {
            try {
                let response;
                if (search) {
                    response = await api.get(`notes?title=${search}`);
                } else {
                    response = await api.get('notes');
                }
                const userNotes = response.data.movies_notes.filter(
                    (note) => note.user_id === user.id
                );
                setNotes(userNotes.reverse());
            } catch (error) {
                if (error.response) {
                    alert(error.response.data.message);
                    return;
                }
                alert('Algo deu errado, tente novamente');
            }
        }
        fetchNotes();
    }, [search]);

    return (
        <Container>
            <Header
                showInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <main>
                <div className='title'>
                    <h2>Meus Filmes</h2>
                    <Link to='/create'>
                        <Button title='Adicionar filme' icon={FiPlus} />
                    </Link>
                </div>
                <div className='card-container'>
                    {notes &&
                        notes.map((note) => (
                            <Card
                                key={String(note.id)}
                                title={note.title}
                                rating={note.rating}
                                text={note.description}
                                tags={note.tags}
                                id={note.id}
                            />
                        ))}
                </div>
            </main>
        </Container>
    );
}

export default Home;
