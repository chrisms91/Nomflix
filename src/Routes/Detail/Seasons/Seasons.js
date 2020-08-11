import React from 'react';
import PropTypes from 'prop-types';
import Season from '../../../Components/Season';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 110px);
  grid-gap: 25px;
`;

const P = styled.p``;

const Seasons = ({ id, seasons }) => {
  return seasons.length > 0 ? (
    <Container>
      {seasons.map((season) => (
        <Season key={season.id} id={id} season={season} />
      ))}
    </Container>
  ) : (
    <P>No more seasons</P>
  );
};

Seasons.propTypes = {
  seasons: PropTypes.array,
};

export default Seasons;
