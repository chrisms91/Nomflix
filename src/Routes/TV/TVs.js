import React, { useState, useEffect } from 'react';
import { tvApi } from '../../api';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
  padding: 20px;
`;

const TVs = () => {
  const [topRated, setTopRated] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [popular, setPopular] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const getTvsFromApi = async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      setTopRated(topRated);
      setAiringToday(airingToday);
      setPopular(popular);
    } catch (e) {
      console.log(e);
      setError(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTvsFromApi();
  }, []);

  return (
    <>
      <Helmet>
        <title>TV Shows | Nomflix</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {airingToday && airingToday.length > 0 && (
            <Section title="Airing Today">
              {airingToday.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  isMovie={false}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {topRated && topRated.length > 0 && (
            <Section title="Top Rated Shows">
              {topRated.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  isMovie={false}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Popular Shows">
              {popular.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  isMovie={false}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {error && <Message text={error} color=" #e74c3c" />}
        </Container>
      )}
    </>
  );
};

export default TVs;
