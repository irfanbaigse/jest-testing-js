# Jest Crash Testing Tips

* using `test()`
* using `describe()` to group
* using assertions like `toBe`, `toEqual` ... etc
* using `expect.assertions(n)` for async test
* using `beforeAll` and `afterAll`
* using `beforeEach` and `afterEach` 

# Run

* Run Manually
  ```bash
  $yarn test 
  ```
  or
  ```bash
  $jest
  ```
* Run test on save using watch option

  ```bash
  $jest --watchAll
  ```
