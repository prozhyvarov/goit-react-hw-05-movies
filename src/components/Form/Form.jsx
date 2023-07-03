import { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchForm, Input, Button } from './Form.styled';
import { useLocation } from 'react-router-dom';

const Form = ({ searchMovies }) => {
  const location = useLocation();
  console.log(location);
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

Form.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Form;
