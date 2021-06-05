import multiply from '../src/basicOperations/multiply'

describe('Multiply from math', () => {
  it('should be able to multiply two numbers', () => {
    expect(multiply(4, 2)).toBe(8)
  })
})
