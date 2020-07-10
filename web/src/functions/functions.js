function login(request) {
  return new Promise((resolve, reject) => {
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
}

function register(request) {
  return new Promise((resolve, reject) => {
    return resolve({message: "register success."});
  });
}

/* \/ ###### CRUD ###### \/ */

function createBirthday(request) {
  return new Promise((resolve, reject) => {
    return resolve({message: "create success."});
  });
}

function getBirthdays(request) {
  return new Promise((resolve, reject) => {
    const birthdays = [
      {
        name: 'Aline',
        date: '16-02-1995',
        age: '25',
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
}

function updateBirthday(request) {
  return new Promise((resolve, reject) => {
    return resolve({message: "update success."});
  });
}

function removeBirthday(request) {
  return new Promise((resolve, reject) => {
    return resolve({message: "delete success."});
  });
}
