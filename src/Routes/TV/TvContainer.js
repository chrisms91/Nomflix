import React from 'react';
import TvPresenter from './TvPresenter';
import { tvApi } from '../../api';

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    tvDetail: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
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
      this.setState({
        topRated,
        popular,
        airingToday,
      });
    } catch {
      this.setState({
        error: "Can't find Tv information",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const {
      topRated,
      popular,
      airingToday,
      tvDetail,
      error,
      loading,
    } = this.state;
    return (
      <TvPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        tvDetail={tvDetail}
        error={error}
        loading={loading}
      />
    );
  }
}