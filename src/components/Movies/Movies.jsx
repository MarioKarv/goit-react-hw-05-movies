import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { searchMovies } from 'api/api';

const Movies = () => {
  const location = useLocation();
  const [search, setSearch] = useState();
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const elements = items?.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
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
        onSubmit={e => {
          e.preventDefault();
          setSearchParams({ query: search });
        }}
      >
        <input
          onChange={({ target }) => {
            setSearch(target.value);
            setSearchParams({ query: target.value });
          }}
          type="text"
          name="search"
        />
        <button type="submit">Search</button>
          </form>
          <ul>{elements}</ul>
    </>
  );
};
export default Movies;
