const mutations = {
  SET_NEWS(state, news) {
    state.news = news;
  },
  SET_ASK(state, ask) {
    state.ask = ask;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_ITEM(state, askItem) {
    state.askItem = askItem;
  },
  SET_USER(state, user) {
    state.user = user;
  },
};

export default mutations;
