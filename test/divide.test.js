import divide from '../src/basicOperations/divide'

describe('Divide from math', () => {
  it('should be able to divide two numbers', () => {
    expect(divide(6, 2)).toBe(3)
  })
})
