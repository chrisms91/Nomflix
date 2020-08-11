import React from 'react';
import PropTypes from 'prop-types';
import RelatedVideo from '../../../Components/RelatedVideo';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 25px;
`;

const P = styled.p``;

const RelatedVideos = ({ videos: { results } }) => {
  console.log(results);
  return results.length > 0 ? (
    <Container>
      {results.map((vid) => (
        <RelatedVideo key={vid.id} video={vid} />
      ))}
    </Container>
  ) : (
    <P>No related videos</P>
  );
};

RelatedVideos.propTypes = {
  videos: PropTypes.shape({
    results: PropTypes.array,
  }),
};

export default RelatedVideos;
