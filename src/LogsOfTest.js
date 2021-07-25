import Schedules from './Schedules'

let payment
;(async () => {
  payment = await new Schedules({ bank: 'asda', value: 521.2 })
})()
console.log(payment)
