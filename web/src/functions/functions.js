const logins = [
  {username: "orlando", password: "123456"},
  {username: "aline", password: "123456"},
];
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

function login(request) {
  return new Promise((resolve, reject) => {
    if (!request.username || !request.password)
      return reject({message: "username or password not informed."});

    const auth = logins.filter(e => e.username === request.username && e.password === request.password);

    if (auth.length < 1)
      return reject({message: "username or password is invalid."});

    return resolve({message: "Login successfully.", token: "eYa1k2x9", auth: {username: auth[0].username}})
  });
}

function register(request) {
  return new Promise((resolve, reject) => {
    if (!request.username || !request.password)
      return reject({message: "username or password not informed."});

    // Inserting
    logins.push({username: request.username, password: request.password});

    return resolve({message: "register success."});
  });
}

/* \/ ###### CRUD ###### \/ */

function createBirthday(request) {
  return new Promise((resolve, reject) => {
    if (!request.name || !request.date || !request.age)
      return reject({message: "'name', 'date' or 'age' not informed."});

    // Check if exists by name
    if (birthdays.some(e => e.name === request.name))
      return reject({message: "failed to create a new birthday, because request name already exists."});

    // Inserting
    birthdays.push({name: request.name, date: request.date, age: request.age},)

    return resolve({message: "create success."});
  });
}

function getBirthdays(request) {
  return new Promise((resolve, reject) => {
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
