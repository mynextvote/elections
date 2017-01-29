import { getGeneralElection, nextElection } from './elections'
import moment from 'moment'

describe('getGeneralElection', () => {
  it('should return the next general election', () => {
    const expected = '2018-11-06'
    const result = getGeneralElection(2018)

    expect(result).toEqual(expected)
  })

  it('should let a user specify a format for the returned date', () => {
    const expected = 'November 6th 2018'
    const result = getGeneralElection(2018, 'MMMM Do YYYY')

    expect(result).toEqual(expected)
  })

  it('should be able to see into the future', () => {
    const expected = '2020-11-03'
    const result = getGeneralElection(2020)

    expect(result).toEqual(expected)
  })

  it('should be able to see far into the future', () => {
    const expected = '2062-11-07'
    const result = getGeneralElection(2062)

    expect(result).toEqual(expected)
  })

  it('should handle leap years')

  it('should handle the first tuesday falling on a monday', () => {
    const expected = '2016-11-08'
    const result = getGeneralElection(2016)

    expect(result).toEqual(expected)
  })
})

describe('nextElection', () => {
  it('should return the next election', () => {
    // some jankery to make sure that this test doesn't break every year
    let year = moment().year()
    const expected = getGeneralElection(year % 2 === 0 ? year : year + 1)
    const result = nextElection()

    expect(result).toEqual(expected)
  })
})

