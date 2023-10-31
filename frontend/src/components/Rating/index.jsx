import { Container } from './styles';
import { FiStar } from 'react-icons/fi';

/* eslint-disable */
function Rating({ rating }) {
    let adjustedRating = rating;
    if (rating > 5) adjustedRating = 5;
    if (rating < 0) adjustedRating = 0;

    const stars = new Array(5).fill(false);
    for (let i = 0; i < adjustedRating; i++) {
        stars[i] = true;
    }

    return (
        <Container>
            {stars &&
                stars.map((star, index) => (
                    <FiStar key={index} className={star ? 'fill-star' : ''} />
                ))}
        </Container>
    );
}

export default Rating;
