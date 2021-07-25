import AppError from '../src/AppError'
import Schedules from '../src/Schedules'

describe('Schedules', () => {
  it('should be send schedules of payments to the bank', () => {
    expect(new Schedules({ bank: 'Caixa', value: 521.2 })).toBeInstanceOf(
      Schedules
    )
  })

  it('should not be send schedules of payments to the empty bank', () => {
    expect(new Schedules({ bank: '', value: 521.2 })).toBeInstanceOf(AppError)
  })
})
