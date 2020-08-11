import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  font-size: 12px;
`;

const LogoContainer = styled.div`
  margin-bottom: 5px;
`;

const Logo = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 110px;
  background-size: 100% 100%;
  border-radius: 4px;
  background-position: center center;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const ProdInfo = ({ name, logo_path, origin_country }) => {
  // https://gist.github.com/miguelmota/7703bf5bac099db42636aa5390de3966
  const countryCodeToFlag = (isoCode) => {
    return isoCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(char.charCodeAt(0) + 127397)
      );
  };
  return (
    <Container>
      <LogoContainer>
        <Logo
          bgUrl={
            logo_path
              ? `http://image.tmdb.org/t/p/w200${logo_path}`
              : require('../assets/noPosterSmall.png')
          }
        />
      </LogoContainer>
      <Title>
        {name} {countryCodeToFlag(origin_country)}
      </Title>
    </Container>
  );
};

ProdInfo.propTypes = {
  video: PropTypes.object,
};

export default ProdInfo;
