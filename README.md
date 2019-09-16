# Jest Crash Testing

## Install

```bash
npm init -y
```
```bash
yarn add --dev jest
```
```bash
yarn add axios -D
```

## Run

* Run Manually
  ```bash
  jest
  ```
* Run test automatically on file save using watch option
  ```bash
  jest --watchAll
  ```
* To update snapshot
  ```
  jest --updateSnapshot
  ```
  ```
* To run test one by one to avoid same time access to DB
  ```
  jest --runInBand
  ```

hint: `it` is an alias of `test`.  

## Test Blocks
* using `test()` single test
* using `describe()` to group test cases

## Most Common Matchers
* using assertions like `toBe`, `toEqual` ... etc
* using `expect.assertions(n)` for async test

## Setup and Teardown
* using `beforeAll` and `afterAll` eg. can be used to load db
* using `beforeEach` and `afterEach` 

## Mocking

```
const myMock = jest.fn();
```

```
// mocking axios example
const Users = require('./users');
const axios = require('axios');
jest.mock('axios');
axios.get.mockResolvedValue({data: { name: "bob" }})

Users.all().then(data => expect(data).toBe({data: { name: "bob" }}))
```
