import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  font-size: 12px;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 150px;
  background-size: 100% 100%;
  border-radius: 4px;
  background-position: center center;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const PosterContainer = styled.div`
  margin-bottom: 5px;
`;

const Anchor = styled.a``;

const Season = ({ id, season }) => {
  return (
    <Anchor
      href={`https://www.themoviedb.org/tv/${id}/season/${season.season_number}`}
      target="_blank"
    >
      <Container>
        <PosterContainer>
          <Poster
            bgUrl={
              season.poster_path
                ? `http://image.tmdb.org/t/p/w200${season.poster_path}`
                : require('../assets/noPosterSmall.png')
            }
          />
        </PosterContainer>
        <Title>
          {season.name}{' '}
          {season.air_date && ` (${season.air_date.split('-')[0]})`}
        </Title>
        <Title>{season.episode_count} Episodes</Title>
      </Container>
    </Anchor>
  );
};

Season.propTypes = {
  season: PropTypes.object,
};

export default Season;
