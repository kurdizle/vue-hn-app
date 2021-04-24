import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
};

const fetchList = (pageName, pageNumber) => {
  return axios.get(`${config.baseUrl}/${pageName}/${pageNumber}.json`);
};

const fetchAskDetail = (id) => {
  return axios.get(`${config.baseUrl}/item/${id}.json`);
};

const fetchUserDetail = (id) => {
  return axios.get(`${config.baseUrl}/user/${id}.json`);
};

export { fetchList, fetchAskDetail, fetchUserDetail };
