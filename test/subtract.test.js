import subtract from '../src/basicOperations/subtract'

describe('Subtract from math', () => {
  it('should be able to subtract two numbers', () => {
    expect(subtract(9, 2)).toBe(7)
  })
})
