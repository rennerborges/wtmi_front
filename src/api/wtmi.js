/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const urlApi = 'https://wtmi-api.herokuapp.com';

export const GetSchedulersRoom = async (nameRoom) => {
  return axios({
    method: 'get',
    url: `${urlApi}/info/room/${nameRoom}/schedulers`,
  });
};

export const GetScheduler = async (codeScheduler) => {
  return axios({
    method: 'get',
    url: `${urlApi}/info/scheduler/${codeScheduler}`,
  });
};

export const PostPresenceScheduler = async (codeScheduler, email) => {
  return axios({
    method: 'post',
    url: `${urlApi}/scheduler/${codeScheduler}/confirm/presence`,
    data: {
      email,
    },
  });
};

export default {
  GetSchedulersRoom,
  GetScheduler,
  PostPresenceScheduler,
};
