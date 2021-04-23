import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchAskDetail,
  fetchUserDetail,
} from '../api';

const actions = {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        context.commit('SET_NEWS', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then((response) => {
        context.commit('SET_ASK', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then((response) => {
        context.commit('SET_JOBS', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ASK_ITEM(context, id) {
    fetchAskDetail(id)
      .then((response) => {
        context.commit('SET_ITEM', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_USER(context, id) {
    fetchUserDetail(id)
      .then((response) => {
        context.commit('SET_USER', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default actions;
