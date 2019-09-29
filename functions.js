const axios = require('axios');

const functions = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  isNull: () => {return null},

  fetchUser:  () => {
     return axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => res.data).catch(err => 'error');
  }
};

module.exports = functions;