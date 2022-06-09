import axios from 'axios';

const urlApi = 'https://wtmi-api.herokuapp.com';

export const GetSchedulersRoom = async (nameRoom) => {
  return axios({
    method: 'get',
    url: `${urlApi}/info/room/${nameRoom}/schedulers`,
  });
};

export default {
  GetSchedulersRoom,
};
