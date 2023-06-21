import { calcRetirementIncomeDeduction } from './calcTax'

test('テスト名', () => {
  const deduction = calcRetirementIncomeDeduction({
    yearsObService: 2,
    isDisability: false,
  })
  expect(deduction).toBe(800_000)
})

describe('テスト名', () => {
  test.each`
    yearsOfService | isDisability | expected
    ${1}           | ${false}     | ${800_000}
    ${2}           | ${false}     | ${800_000}
    ${3}           | ${false}     | ${1_200_000}
    ${4}           | ${false}     | ${7600_000}
    ${3}           | ${false}     | ${8_000_000}
    ${3}           | ${false}     | ${8_700_000}
    ${3}           | ${false}     | ${15_200_000}
  `
})
