import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapperRecentSearches = styled.div`
  background-color: #cccccc;
  border-radius: 0.3rem;
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  justify-items: center;
  align-items: center;
}
`;

const StyledSidebar = styled.h2`
  font-size: 1.2rem;
  color: #333;

  .recent-title {
    color: #d7282f;
  }

  ul li {
    list-style: none;
    font-size: 1rem;
    color: #333;
  }

  a {
    transition: all 0.3s ease-in;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #d7282f;
    }
  }
`;

const RecentSearches = ({ listOfSearches, passChildData, query }) => {
  const handleClick = (e) => {
    e.preventDefault();
    passChildData(e.target.innerText);
    query(e.target.innerText);
  };

  // Get all items from the list of searches done by the user
  const recentLists = listOfSearches.map((list) => {
    return (
      <ul key={list}>
        <li>
          <Link onClick={handleClick}>{list}</Link>
        </li>
      </ul>
    );
  });

  // limit the number of recent searches to 5 and lastest on top
  const limitRecentSearches = recentLists.reverse().slice(0, 5);

  return (
    <>
      <StyledWrapperRecentSearches>
        <StyledSidebar>
          <span>
            {/* display list of recent searches of 5 recent items */}
            {limitRecentSearches.length > 0 ? (
              <div>
                <div className='recent-title'>Recent Searches</div>
                <div>{limitRecentSearches}</div>
              </div>
            ) : (
              <div>No recent searches found</div>
            )}
          </span>
        </StyledSidebar>
      </StyledWrapperRecentSearches>
    </>
  );
};

export default RecentSearches;
