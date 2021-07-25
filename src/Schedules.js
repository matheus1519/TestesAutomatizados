import AppError from './AppError'

export default class Schedules {
  constructor({ bank, value }) {
    if (bank === '') {
      return new AppError('Should not be send a payment with empty bank!')
    }
  }
}
