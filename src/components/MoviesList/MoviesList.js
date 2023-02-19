import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <ul>
      {films.map(element => {
        return (
          <li key={element.id}>
            <Link to={`/movies/${element.id}`} state={{ from: location }}>
              {element.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MoviesList;
