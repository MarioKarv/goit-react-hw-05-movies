import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCast } from 'api/api'

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const elements = cast.map(({ cast_id, character, name, profile_path }) => (
      <li key={cast_id}>
            <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt="filmposter" />
            <h2>{name}</h2>
            <h2>Character: {character}</h2>
      </li>
    ));
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const chosenMovie = await getMovieCast(movieId)
                setCast(chosenMovie.data.cast)
            } catch ({ response }) {
                console.log(response.data.message)
            }
        }
        fetchMovie();
    }, [movieId])
    return <ul>{elements}</ul>
}

export default Cast