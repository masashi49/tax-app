import { calcRetirementIncomeDeduction } from './calcTax'

test('テスト名', () => {
  const deduction = calcRetirementIncomeDeduction({
    yearsOfService: 2,
    isDisability: false,
  })
  expect(deduction).toBe(800_000)
})

describe('テスト名', () => {
  describe('勤続年数1年の場合', () => {
    describe('障害者となったことに直接起因して退職に該当しない', () => {
      test.each`
        yearsOfService | expected
        ${1}           | ${800_000}
      `(
        '眷属年数$yearsOfService -> $expected円',
        ({ yearsOfService, expected }) => {
          const deduction = calcRetirementIncomeDeduction({
            yearsOfService,
            isDisability: false,
          })
          expect(deduction).toBe(expected)
        },
      )
    })
    describe('障害者となったことに直接起因して退職に該当する', () => {
      test.each`
        yearsOfService | expected
        ${1}           | ${1_800_000}
      `(
        '眷属年数$yearsOfService -> $expected円',
        ({ yearsOfService, expected }) => {
          const deduction = calcRetirementIncomeDeduction({
            yearsOfService,
            isDisability: true,
          })
          expect(deduction).toBe(expected)
        },
      )
    })
  })

  test.each`
    yearsOfService | isDisability | expected
    ${1}           | ${false}     | ${800_000}
    ${2}           | ${false}     | ${800_000}
    ${3}           | ${false}     | ${1_200_000}
    ${19}          | ${false}     | ${7_600_000}
    ${20}          | ${false}     | ${8_000_000}
    ${21}          | ${false}     | ${8_700_000}
    ${30}          | ${false}     | ${15_000_000}
    ${1}           | ${true}      | ${1_800_000}
    ${2}           | ${true}      | ${1_800_000}
    ${3}           | ${true}      | ${2_200_000}
    ${19}          | ${true}      | ${8_600_000}
    ${20}          | ${true}      | ${9_000_000}
    ${21}          | ${true}      | ${9_700_000}
    ${30}          | ${true}      | ${16_000_000}
  `(
    '$yearsOfService年 isDisability:$isDisability→ $expected',
    ({ yearsOfService, isDisability, expected }) => {
      const deduction = calcRetirementIncomeDeduction({
        yearsOfService,
        isDisability,
      })
      expect(deduction).toBe(expected)
    },
  )
})
