import PropTypes from 'prop-types';
import { Wrap, WrapImage, Image } from './MovieInformation.styled';

const MovieInformation = ({ filmInformatioin }) => {
  const {
    posterPath,
    original_title,
    releaseDate,
    voteAverage,
    overview,
    genresText,
  } = filmInformatioin;

  return (
    <Wrap>
      <WrapImage>
        <Image src={posterPath} alt={original_title} />
      </WrapImage>

      <div>
        <h1>{`${original_title} (${releaseDate})`}</h1>
        <p>{`User Score: ${voteAverage}%`}</p>
        <h2>Overviews</h2>
        <p>{overview}</p>
        <h2>Genders</h2>
        <p>{genresText}</p>
      </div>
    </Wrap>
  );
};

MovieInformation.propTypes = {
  filmInformatioin: PropTypes.exact({
    posterPath: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genresText: PropTypes.string.isRequired,
  }).isRequired,
};
export default MovieInformation;
