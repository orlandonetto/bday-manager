const axios = require('axios');

module.exports = {
  async login(request) {
    return await new Promise((resolve, reject) => {
      if (!request.username || !request.password)
        return reject({message: "username or password not informed."});

      // Orlando
      if (request.username === "orlando" && request.password === "123456")
        return resolve({message: "login success."});

      // Aline
      if (request.username === "aline" && request.password === "123456")
        return resolve({message: "login success."});

      return reject({message: "username or password is invalid."});
    });
  },

  async register(request) {
    return await new Promise((resolve, reject) => {
      return resolve({message: "register success."});
    });
  },

  /* \/ ###### CRUD ###### \/ */

  async createBirthday(request) {
    return await new Promise((resolve, reject) => {
      return resolve({message: "create success."});
    });
  },
  async readBirthdays(request) {
    return await new Promise((resolve, reject) => {
      const birthdays = [
        {
          name: 'Aline',
          date: '16-02-1995',
          age: '25'
        },
        {
          name: 'Alice',
          date: '12-03-1996',
          age: '25'
        },
        {
          name: 'Orlando',
          date: '15-10-1997',
          age: '22'
        },
      ];

      return resolve({message: "get success.", birthdays: birthdays});
    });
  },
  async updateBirthday(request) {
    return await new Promise((resolve, reject) => {
      return resolve({message: "update success."});
    });
  },
  async removeBirthday(request) {
    return await new Promise((resolve, reject) => {
      return resolve({message: "delete success."});
    });
  },
}
