import { Suspense, useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { getDataByAxios } from 'sevices/library';
import css from './MovieDetails.module.css';
import Loader from 'components/Loader/Loader';
import defaultImg from '../images/image.webp';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();
  const BASE_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    getDataByAxios(`/movie/${movieId}`, 0, '').then(resp => {
      setIsLoading(false);
      if (resp.status !== 200) {
        throw new Error(resp.statusText);
      } else {
        setMovieData(resp.data);
        setIsLoading(false);
      }
    });
  }, [movieId]);

  const {
    genres,
    original_title,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movieData;

  const userScr = ((vote_average / 10) * 100).toFixed(0);

  const pathToPoster = BASE_IMAGE_ENDPOINT + poster_path;
  const imgSrc = poster_path ? pathToPoster : defaultImg;
  // console.log(imgSrc);

  return (
    <>
      {isLoading && <Loader />}
      <Link className={css.linkAdditional} to={backLink}>
        &#8592; Go back
      </Link>
      <div className={css.movieCard}>
        <img src={imgSrc} alt="Poster" width="250" />
        <div>
          <h2>
            {original_title} ({release_date && release_date.slice(0, 4)})
          </h2>
          <p className={css.descrText}>User Score: {userScr}%</p>
          <h3>Owerview</h3>
          <p className={css.descrText}>{overview}</p>
          <h3>Genres</h3>
          {genres && (
            <p className={css.descrText}>
              {genres.map(({ name }) => name).join(',  ')}
            </p>
          )}
        </div>
      </div>
      <div className={css.addtionals}>
        <p className={css.additionalsText}>Additional information</p>
        <ul className={css.additionalsList}>
          <li className={css.additionalsLink}>
            <Link className={css.li} to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li className={css.additionalsLink}>
            <Link className={css.li} to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
