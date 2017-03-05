/**
 * Name: php-array
 * Author: M Habib Rohman <mhrohman@live.com>
 * @2017
 */

const JSON5 = require('json5')

/**
 * Convert php array style into javascript object
 * 
 * @type {string} {value}
 * @return {object}
 */
module.exports = function (value) {
  const parseredValue = value
    .replace(/\[/g, '{')
    .replace(/\]/g, '}')
    .replace(/\=\>/g, ':')
  return JSON5.parse(parseredValue)
}
