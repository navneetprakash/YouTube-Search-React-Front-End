import React from 'react';
import styled from 'styled-components';
import formatDate from '../../utils/formatDate';

const StyledVideoContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin: 2rem 0rem;
  padding: 0.5rem;
  max-width: 64rem;
  gap: 2rem;
  background-color: #ccc;
  border-radius: 0.3rem;
  justify-items: start;

  .published {
    font-size: 0.9rem;
    color: #333;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-items: unset;
    margin: 1rem 0.5rem;
  }
`;

const StyledVideoTitle = styled.h3`
  font-size: 1.3rem;

  a {
    color: #333;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #d7282f;
    }
  }

  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`;

const StyledVideoDescription = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  color: #333;
`;

const StyledImage = styled.img`
  width: 200px;
  border-radius: 0.3rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const StyledDataInfo = styled.div`
  margin: 2rem auto;
  font-size: 1.2rem;
  padding: 1rem;
  background-color: #ccc;
  border-radius: 0.3rem;
  color: #333;
`;

const VideoDetails = ({ data }) => {
  return data.length > 0 ? (
    data?.map((video) => (
      <StyledVideoContent key={video.id.videoId}>
        {/* thumbnail image*/}
        <a
          href={`https://youtube.com/watch?v=${video.id.videoId}`}
          target='_blank'
          rel='noreferrer'
        >
          <StyledImage src={video.snippet.thumbnails.medium.url} />
        </a>

        {/* video title and description */}
        <div>
          <StyledVideoTitle>
            <a
              href={`https://youtube.com/watch?v=${video.id.videoId}`}
              target='_blank'
              rel='noreferrer'
            >
              {video.snippet.title}
            </a>
          </StyledVideoTitle>

          <p className='published'>Published on: {formatDate(video.snippet.publishedAt)}</p>
          <StyledVideoDescription>{video.snippet.description}</StyledVideoDescription>
        </div>
      </StyledVideoContent>
    ))
  ) : (
    <StyledDataInfo>No videos found, please make a search first!</StyledDataInfo>
  );
};

export default VideoDetails;
