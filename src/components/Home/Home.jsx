import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
                      <li key={id}>
                        <Link
                          to={`movies/${id}`}
                          state={{ from: location }}
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
            <h1>In trend today</h1>
            <ul>{results}</ul>
        </>
    )
}

export default Home