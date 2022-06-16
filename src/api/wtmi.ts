/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const urlApi = 'https://wtmi-api.herokuapp.com';

export const GetSchedulersRoom = async (nameRoom: string) => {
  return axios({
    method: 'get',
    url: `${urlApi}/info/room/${nameRoom}/schedulers`,
  });
};

export const GetScheduler = async (codeScheduler: string) => {
  return axios({
    method: 'get',
    url: `${urlApi}/info/scheduler/${codeScheduler}`,
  });
};

export const PostPresenceScheduler = async (
  codeScheduler: string,
  email: string
) => {
  return axios({
    method: 'post',
    url: `${urlApi}/scheduler/${codeScheduler}/confirm/presence`,
    data: {
      email,
    },
  });
};

export const PostLogin = async (email: string, password: string) => {
  return axios({
    method: 'post',
    url: `${urlApi}/login`,
    data: {
      email,
      password,
    },
  });
};

export default {
  GetSchedulersRoom,
  GetScheduler,
  PostPresenceScheduler,
};
