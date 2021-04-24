import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
};

function fetchNewsList() {
  return axios.get(`${config.baseUrl}/news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}/ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}/jobs/1.json`);
}

function fetchShowList() {
  return axios.get(`${config.baseUrl}/show/1.json`);
}

function fetchNewestList() {
  return axios.get(`${config.baseUrl}/newest/1.json`);
}

function fetchAskDetail(id) {
  return axios.get(`${config.baseUrl}/item/${id}.json`);
}

function fetchUserDetail(id) {
  return axios.get(`${config.baseUrl}/user/${id}.json`);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchShowList,
  fetchNewestList,
  fetchAskDetail,
  fetchUserDetail,
};
