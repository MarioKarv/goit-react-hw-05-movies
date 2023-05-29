import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { searchMovies } from 'api/api';
import { BiSearchAlt } from 'react-icons/bi';
import css from './Movies.module.css'

const Movies = () => {
  const location = useLocation();
  const [search, setSearch] = useState();
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const elements = items?.map(({ id, title }) => (
    <li key={id} className={css.li}>
      <Link to={`/movies/${id}`} state={{ from: location }} className={css.link}>
        {title}
      </Link>
    </li>
  ));

  useEffect(() => {
    searchMovies(query).then(({ results }) => {
      setItems(results);
    });
  }, [searchParams, query, setItems]);
  return (
    <>
      <form
        className={css.form}
        onSubmit={e => {
          e.preventDefault();
          setSearchParams({ query: search });
        }}
      >
        <input
          className={css.input}
          onChange={({ target }) => {
            setSearch(target.value);
            setSearchParams({ query: target.value });
          }}
          type="text"
          name="search"
        />
        <button type="submit" className={css.button}>
          <BiSearchAlt size={25} />
        </button>
      </form>
      <ul className={css.ul}>{elements}</ul>
    </>
  );
};
export default Movies;
