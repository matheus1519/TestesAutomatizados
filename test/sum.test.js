import sum from '../src/basicOperations/sum'

describe('Sum from math', () => {
  it('should be able to sum two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
