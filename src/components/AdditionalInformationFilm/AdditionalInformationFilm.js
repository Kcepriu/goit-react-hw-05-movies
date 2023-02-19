import { Link } from 'react-router-dom';
import { Wrap } from './AdditionalInformationFilm.styled';

const AdditionalInformationFilm = () => {
  return (
    <Wrap>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </Wrap>
  );
};

export default AdditionalInformationFilm;
