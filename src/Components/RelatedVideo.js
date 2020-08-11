import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  font-size: 12px;
`;

const ThumbnailContainer = styled.div`
  margin-bottom: 5px;
`;

const Thumbnail = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 160px;
  background-size: 100% 100%;
  border-radius: 4px;
  background-position: center center;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Anchor = styled.a``;

const RelatedVideo = ({ video }) => {
  return video.site === 'YouTube' ? (
    <Anchor
      href={`https://www.youtube.com/watch?v=${video.key}`}
      target="_blank"
    >
      <Container>
        <ThumbnailContainer>
          <Thumbnail
            bgUrl={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
          />
        </ThumbnailContainer>
        <Title>{video.name}</Title>
      </Container>
    </Anchor>
  ) : (
    <Container>
      <ThumbnailContainer>
        <Thumbnail bgUrl={require('../assets/noPosterSmall.png')} />
      </ThumbnailContainer>
      <Title>{video.name}</Title>
    </Container>
  );
};

RelatedVideo.propTypes = {
  video: PropTypes.object,
};

export default RelatedVideo;
