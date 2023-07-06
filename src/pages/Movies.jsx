import { useEffect, useState, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getDataByAxios } from 'sevices/library';
import Search from 'components/Search/Search';
import MovieList from 'components/MovieList/MovieList';
import Notiflix from 'notiflix';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  //console.log('searchParams :>> ', Object.fromEntries([...searchParams]));
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [searchText, setSearchText] = useState(
    searchParams.get('search') ?? ''
  );
  const totalPages = useRef(0);

  let paginationPage = Number(searchParams.get('page')) ?? 0;
  let title = '';

  useEffect(() => {
    setIsLoading(true);
    getDataByAxios(`/search/movie`, paginationPage, searchText).then(resp => {
      if (resp.status !== 200) {
        throw new Error(resp.statusText);
      } else {
        totalPages.current = resp.data.total_pages;
        setMovieList(resp.data.results);
        setIsLoading(false);
      }
    });
  }, [paginationPage, searchText]);

  const handleSubmit = evt => {
    const searchValue = evt.target[0].value.trim();
    if (!searchValue) {
      Notiflix.Notify.info(
        'The search bar cannot be empty. Please type any criteria in the search bar.'
      );
    }
    evt.preventDefault();
    paginationPage = 1;
    let localValue = searchParams.get('search');
    setSearchParams({ search: localValue.trim(), page: 1 });
    setSearchText(localValue.trim());
  };

  const handleSearchInputChange = ({ target: { value } }) => {
    setSearchParams({ search: value, page: paginationPage });
  };

  const onLoadNextPage = () => {
    paginationPage = paginationPage + 1;
    setSearchParams({ search: searchText, page: paginationPage });
  };

  const onLoadPreviousPage = () => {
    paginationPage = paginationPage - 1;
    setSearchParams({ search: searchText, page: paginationPage });
  };

  const onToStartPage = () => {
    paginationPage = 1;
    setSearchParams({ search: searchText, page: 1 });
  };

  if (movieList.length === 0) {
    title = 'No matches';
  } else {
    title = `Search "${searchText}" (Page ${paginationPage} of ${totalPages.current})`;
  }

  return (
    <div>
      {isLoading && <Loader />}
      <Search
        handleSubmit={handleSubmit}
        handleSearchInputChange={handleSearchInputChange}
        searchText={searchParams.get('search') ?? ''}
      />
      {searchText && <h3>{title}</h3>}
      {movieList.length !== 0 && (
        <MovieList
          location={location}
          movieList={movieList}
          paginationPage={paginationPage}
          totalPages={totalPages.current}
          onLoadNextPage={onLoadNextPage}
          onLoadPreviousPage={onLoadPreviousPage}
          onToStartPage={onToStartPage}
        />
      )}
    </div>
  );
};

export default Movies;
