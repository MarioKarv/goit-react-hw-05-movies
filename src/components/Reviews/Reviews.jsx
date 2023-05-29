import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'api/api';
import css from './Reviews.module.css'

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const elements = reviews.map(({ id, author, content }) => (
    <li key={id} className={css.li}>
      <h2 className={css.h2}>Author: {author}</h2>
      <p className={css.p}>{content}</p>
    </li>
  ));

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const chosenMovie = await getMovieReviews(movieId);
        setReviews(chosenMovie.data.results);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchMovie();
  }, [movieId]);
//   return <ul>{elements}</ul>;
    return (
      <>
        {reviews.length > 0 ? (
          <ul className={css.ul}>{elements}</ul>
        ) : (
          <h2>No reviews</h2>
        )}
      </>
    );
};
export default Reviews;
