import { Container } from './styles';
import Rating from '../Rating';
import Tag from '../Tags';

/* eslint-disable */
function Card({ title, rating, text, tags, id }) {
    return (
        <Container to={`/preview/${id}`}>
            <h2>{title}</h2>
            <Rating rating={rating} />
            <p>{text}</p>
            <div>
                {tags &&
                    tags.map((tag, index) => <Tag title={tag} key={index} />)}
            </div>
        </Container>
    );
}

export default Card;
