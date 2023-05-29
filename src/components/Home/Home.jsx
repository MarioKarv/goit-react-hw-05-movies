import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import css from './Home.module.css'
import { getTrending } from 'api/api'

const Home = () => {
    const [results, setResults] = useState();
    const location = useLocation();
    useEffect(() => {
        getTrending().then(response => {
            const data = response.results;
            setResults(
                data.map(({ id, title }) => {
                    return (
                      <li key={id} className={css.li}>
                        <Link
                          to={`movies/${id}`}
                          state={{ from: location }}
                          className={css.link}
                        >
                          {title}
                        </Link>
                      </li>
                    );
                })
            )
        })
    }, [location])

    return (
      <>
        <h1 className={css.h1}>In trend today</h1>
        <ul className={css.ul}>{results}</ul>
      </>
    );
}

export default Home