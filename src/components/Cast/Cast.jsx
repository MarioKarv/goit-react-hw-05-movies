import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import css from './Cast.module.css'
import noimg from 'images/noImage.jpg'
import { getMovieCast } from 'api/api'

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const elements = cast.map(({ cast_id, character, name, profile_path }) => (
      <li key={cast_id} className={css.li}>
        <img
        //   src={`https://image.tmdb.org/t/p/w200${profile_path}`}
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w200${profile_path}`
              : noimg
          }
          alt="filmposter"
        />
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
    return <ul className={css.ul}>{elements}</ul>
}

export default Cast