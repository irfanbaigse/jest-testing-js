const axios = require('axios');
const Users = require('./users');

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'xxxx'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => {
    console.log(data);
    expect(data).toEqual(users)});
});