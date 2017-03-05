const phparray = require('../src')
const chai = require('chai')

const { expect } = chai

describe('PHP-Array', () => {
  const value = `
  [
    author => '@rohmanhm',
    email => 'mhrohman@live.com'
  ]
  `
  it('should exists', () => {
    expect(phparray).to.exist
  })
  it('should return an object', () => {
    expect(phparray(value)).to.be.an('object')
  })
  it('should convert php array style into an object', () => {
    const expectedValue = {
      author: '@rohmanhm',
      email: 'mhrohman@live.com'
    }
    expect(phparray(value)).to.deep.equal(expectedValue)
  })
  it('should return value like expected', () => {
    expect(phparray(value).author).to.equal('@rohmanhm')
  })
})
