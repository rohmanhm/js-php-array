# Javascript PHP Array
Use php array style in javascript

## How to use

1. Install `php-array` from npm.
  `npm install --save php-array`
2. require or import `php-array` to your code.
  Example:
  ```javascript
  const phparray = require('php-array')

  phparray(`
  [
    name => 'john doe',
    email => 'johndoe@test.com'
  ]
  `) // it's return {name: 'john doe', email: 'johndoe@test.com'}
  ```

## LICENSE
**MIT LICENSE**