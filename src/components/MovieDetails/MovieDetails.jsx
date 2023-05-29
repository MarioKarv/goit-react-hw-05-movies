import {
  useParams,
  Outlet,
  Link,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import noimg from 'images/noImage.jpg';
import css from './MovieDetails.module.css'
import { getMovieById } from 'api/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [year, setYear] = useState();
  const { movieId } = useParams();
  const { backdrop_path, id, title, overview, genres } = movie;
  const genresArray = genres?.map(({ name }) => name);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';

  const backButton = useCallback(() => navigate(from), [from, navigate]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const chosenMovie = await getMovieById(movieId);
        setMovie(chosenMovie.data);
        const date = chosenMovie.data.realease_date.slice(0, 4);
        setYear(date);
      } catch ({ response }) {
        console.log(response);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <>
      <button onClick={backButton} className={css.button}>
        Go back
      </button>
      <div className={css.wrapper}>
        <img
          alt={title}
        //   src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
              : noimg
          }
          className={css.img}
        />
        <ul className={css.list}>
          <li>
            <h1>
              {title} {year}
            </h1>
          </li>
          <li>
            <h3>Overview</h3>
            <p>{overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
            <p>{genresArray}</p>
          </li>
        </ul>
      </div>

      <p className={css.p}>Additional information</p>
      <ul className={css.castUl}>
        <li className={css.castli}>
          <Link
            to={`/movies/${id}/cast`}
            state={{ from: location.state.from }}
            className={css.link}
          >
            Cast
          </Link>
        </li>
        <li className={css.castli}>
          <Link
            to={`/movies/${id}/reviews`}
            state={{ from: location.state.from }}
            className={css.link}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
