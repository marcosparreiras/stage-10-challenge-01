import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Container } from './styles';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiEdit } from 'react-icons/fi';
import { TfiTime } from 'react-icons/tfi';
import api from '../../services/axios/api';
import Header from '../../components/Header';
import Rating from '../../components/Rating';
import Tag from '../../components/Tags';
import defaultAvatar from '../../assets/avatar.jpg';

/* eslint-disable */
function Preview() {
    const [note, setNote] = useState(null);
    const params = useParams();
    const { user } = useContext(AuthContext);
    const avatar = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : defaultAvatar;

    useEffect(() => {
        async function fetchNote() {
            try {
                const response = await api.get(`notes/${params.id}`);
                setNote(response.data.note);
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
                <div className='link-conatiner'>
                    <Link to='/'>
                        <FiArrowLeft />
                        voltar
                    </Link>
                    <Link to={`/edit/${params.id}`}>
                        <FiEdit />
                        editar
                    </Link>
                </div>
                {note && (
                    <>
                        <div className='title'>
                            <h2>{note.title}</h2>
                            <Rating rating={note.rating} />
                        </div>

                        <div className='infos'>
                            <img src={avatar} alt='user image' />
                            <span>{user.name}</span>
                            <TfiTime />
                            <span>{note.updated_at}</span>
                        </div>

                        <div className='tags'>
                            {note.tags &&
                                note.tags.map((tag, index) => (
                                    <Tag key={index} title={tag} />
                                ))}
                        </div>

                        <p>{note.description}</p>
                    </>
                )}
            </main>
        </Container>
    );
}

export default Preview;
