import moment from 'moment'

export function getGeneralElection (year, format = 'YYYY-MM-DD') {
  /*
   * US General elecitons fall on the first tuesday after the first monday in
   * November
  */
  let nov1 = moment().year(year)
                     .month('November')
                     .date(1)

  // moment day code for the first of the month
  let day = nov1.day()
  let election

  // TODO - this is silly, and can definitely be simplified
  switch (day) {
    // sunday
    case 0:
      election = nov1.day(day + 2)
      break
    // monday
    case 1:
      election = nov1.day(day + 1)
      break
    // tuesday
    case 2:
      election = nov1.day(day + 7)
      break
    // wednesday
    case 3:
      election = nov1.day(day + 6)
      break
    // thursday
    case 4:
      election = nov1.day(day + 5)
      break
    // friday
    case 5:
      election = nov1.day(day + 4)
      break
    // saturday
    case 6:
      election = nov1.day(day + 3)
      break
  }

  return election.format(format)
}

export function nextElection () {
  let year = moment().year()
  return getGeneralElection(year % 2 === 0 ? year : year + 1)
}

