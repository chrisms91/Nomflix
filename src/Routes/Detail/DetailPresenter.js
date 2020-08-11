import React from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import ProductionInfo from './ProductionInfo/ProductionInfo';
import RelatedVideos from './RelatedVideos/RelatedVideos';
import Seasons from './Seasons/Seasons';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: 100% 100%;
  height: 100%;
  z-index: 1;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  white-space: nowrap;
`;

const Divider = styled.div`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const Anchor = styled.a`
  display: block;
  width: 27px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const InsideMenu = styled.div`
  margin: 30px 0;
  width: 50%;
  border-radius: 5px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 20px;
  padding: 10px;
  border: 2px solid rgba(26, 188, 156, 0.8);
  text-transform: uppercase;
  font-weight: 600;
  background-color: ${(props) => (props.active ? '#1abc9c' : 'transparent')};
  color: ${(props) => (props.active ? 'black' : 'white')};
`;

const DetailPresenter = withRouter(
  ({ location: { pathname }, result, loading, error }) =>
    loading ? (
      <>
        <Helmet>
          <title>Loading | Nomflix</title>
        </Helmet>
        <Loader />
      </>
    ) : error ? (
      <Message text={error} color="#95a5a6" />
    ) : (
      <Container>
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}{' '}
            | Nomflix
          </title>
        </Helmet>
        <Backdrop
          bgImage={
            result.backdrop_path
              ? `http://image.tmdb.org/t/p/original${result.backdrop_path}`
              : require('../../assets/noPosterSmall.png')
          }
        />
        <Content>
          <Cover
            bgImage={
              result.poster_path
                ? `http://image.tmdb.org/t/p/original${result.poster_path}`
                : require('../../assets/noPosterSmall.png')
            }
          />
          <Data>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
              {result.original_language !== 'en' &&
                ` (${result.title ? result.title : result.name})`}
            </Title>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.runtime || result.runtime === 0
                  ? result.runtime > 0
                    ? result.runtime
                    : '0'
                  : result.episode_run_time[0]}{' '}
                min
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.genres && result.genres.length > 0
                  ? result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                    )
                  : 'Unknown'}
              </Item>
              {result.imdb_id && (
                <>
                  <Divider>•</Divider>
                  <Anchor
                    href={`https://www.imdb.com/title/${result.imdb_id}/`}
                    target="_blank"
                  >
                    <Image src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png" />
                  </Anchor>
                </>
              )}
            </ItemContainer>
            <Overview>{result.overview}</Overview>
            <InsideMenu>
              <List>
                <ListItem active={pathname.endsWith('videos')}>
                  <Link
                    to={(location) => {
                      if (location.pathname.endsWith('videos')) {
                        return `${location.pathname.replace(
                          '/videos',
                          ''
                        )}/videos`;
                      } else if (location.pathname.endsWith('prod-info')) {
                        return `${location.pathname.replace(
                          '/prod-info',
                          ''
                        )}/videos`;
                      } else if (location.pathname.endsWith('seasons')) {
                        return `${location.pathname.replace(
                          '/seasons',
                          ''
                        )}/videos`;
                      }
                      return `${location.pathname}/videos`;
                    }}
                  >
                    Related Videos
                  </Link>
                </ListItem>
                <ListItem active={pathname.endsWith('prod-info')}>
                  <Link
                    to={(location) => {
                      if (location.pathname.endsWith('videos')) {
                        return `${location.pathname.replace(
                          '/videos',
                          ''
                        )}/prod-info`;
                      } else if (location.pathname.endsWith('prod-info')) {
                        return `${location.pathname.replace(
                          '/prod-info',
                          ''
                        )}/prod-info`;
                      } else if (location.pathname.endsWith('seasons')) {
                        return `${location.pathname.replace(
                          '/seasons',
                          ''
                        )}/prod-info`;
                      }
                      return `${location.pathname}/prod-info`;
                    }}
                  >
                    Production Companies
                  </Link>
                </ListItem>
                {pathname.includes('show') && (
                  <ListItem active={pathname.endsWith('seasons')}>
                    <Link
                      to={(location) => {
                        if (location.pathname.endsWith('videos')) {
                          return `${location.pathname.replace(
                            '/videos',
                            ''
                          )}/seasons`;
                        } else if (location.pathname.endsWith('prod-info')) {
                          return `${location.pathname.replace(
                            '/prod-info',
                            ''
                          )}/seasons`;
                        } else if (location.pathname.endsWith('seasons')) {
                          return `${location.pathname.replace(
                            '/seasons',
                            ''
                          )}/seasons`;
                        }
                        return `${location.pathname}/seasons`;
                      }}
                    >
                      Seasons
                    </Link>
                  </ListItem>
                )}
              </List>
            </InsideMenu>
            <Route
              path={['/movie/:id/videos', '/show/:id/videos']}
              render={() => <RelatedVideos videos={result.videos} />}
            />
            <Route
              path={['/movie/:id/prod-info', '/show/:id/prod-info']}
              render={() => <ProductionInfo {...result} />}
            />
            <Route
              path="/show/:id/seasons"
              render={() => <Seasons {...result} />}
            />
          </Data>
        </Content>
      </Container>
    )
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
