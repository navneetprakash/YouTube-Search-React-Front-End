import React, { useState } from 'react';
import styled from 'styled-components';
import RecentSearches from './RecentSearches';
import Button from '../Shared/Button';
import VideoDetails from '../VideoDetails/VideoDetails';
import axios from 'axios';
import LoadingSpinner from '../Shared/Spinner/LoadingSpinner';
import { useEffect } from 'react';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 1.5rem 0;
  gap: 1.5rem;
  @media (max-width: 1055px) {
    grid-template-columns: 1fr;
  }
`;

const StyledSearchFeature = styled.div`
  display: block;
  gap: 0.5rem;
  .input-box form {
    display: flex;
    background-color: #333;
    padding: 1rem;
  }
`;

const StyledInputSearch = styled.input`
  width: 100%;
  height: 3rem;
  margin: 0 1rem;
  border: 1px solid #333;
  border-radius: 0.3rem;
  padding: 0 1rem;
  font-size: 1.2rem;
`;

const YoutubeSearch = () => {
  // common state for error, loading and results
  const [error, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  // state for search input
  const [searchTerm, setSearchTerm] = useState('');
  // keeping history of recent searches
  const [searchResults, setSearchResults] = useState([]);

  // function to handle search input
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // function to handle search button
  const handleSubmit = (e) => {
    e.preventDefault();

    // check if search term is not empty and not in the recent searches
    if (searchTerm !== '' && !searchResults.includes(searchTerm)) {
      // make a search request
      searchYouTube(searchTerm);
      // keep previous and add search term to the array
      setSearchResults([...searchResults, searchTerm]);
    }
  };

  // function to handle searches request to the youtube api
  const searchYouTube = async (searchTerm) => {
    try {
      setIsError(false);
      setIsLoading(true);

      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&key=AIzaSyAHU-_xBvDegc7oC4ecZBnonV36wYZsAXU`
      );

      setResults(response.data.items);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {}, []);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <StyledWrapper>
        <div>
          <StyledSearchFeature>
            <div className='input-box'>
              <form onSubmit={handleSubmit}>
                <StyledInputSearch
                  type='text'
                  placeholder='search..'
                  onChange={handleInputChange}
                  onKeyPress={(e) => (e.key === 'Enter' ? handleSubmit : null)}
                />
                <Button onClick={handleSubmit}>Search</Button>
              </form>
            </div>
            <VideoDetails data={results} error={error} isLoading={isLoading} />
          </StyledSearchFeature>
        </div>

        <div>
          <RecentSearches
            listOfSearches={searchResults}
            passChildData={setSearchTerm}
            query={searchYouTube}
          />
        </div>
      </StyledWrapper>
    </>
  );
};

export default YoutubeSearch;
