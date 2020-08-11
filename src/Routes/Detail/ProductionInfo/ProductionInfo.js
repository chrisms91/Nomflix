import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProdInfo from '../../../Components/ProdInfo';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px);
  grid-gap: 25px;
`;

const P = styled.p``;

const ProductionInfo = ({ production_companies: companies }) => {
  console.log(companies);
  return companies.length > 0 ? (
    <Container>
      {companies.map((comp) => (
        <ProdInfo key={comp.id} {...comp} />
      ))}
    </Container>
  ) : (
    <P>No Production Informations</P>
  );
};

ProductionInfo.propTypes = {
  companies: PropTypes.array,
};

export default ProductionInfo;
