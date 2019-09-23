const functions = require('./functions');

// beforeEach(()=> initDB());
// afterEach(()=> closeDB());

// beforeAll(()=> initDB());
// afterAll(()=> closeDB());

// const initDB = () => console.log('init db');
// const closeDB = () => console.log('close db');

const nameCheck = () => console.log('Chekcing Name');
describe('Check Names', ()=>{
  beforeEach(()=> nameCheck());

  test('User is jeff', ()=> {
    expect('jeff').toBe('jeff');
  })

  test('User is karin', ()=> {
    expect('karin').toBe('karin');
  })

  test('User is xxxx', ()=> {
    expect('xxxx').toBe('xxxx');
  })
})

test('Add 2+2 ', () => {
  expect(functions.add(2,2)).toBe(4);
});

test('Not 5', () => {
  expect(functions.add(2,2)).not.toBe(5);
});

test('Is Null', () => {
  expect(functions.isNull()).toBeNull();
});

test('user Name Leanne Graham', () => {
  expect.assertions(1);
   return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

test('user Name Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});