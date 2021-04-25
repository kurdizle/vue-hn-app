import { fetchAskDetail, fetchUserDetail } from '../api';

const actions = {
  // Detail
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
