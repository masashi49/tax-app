type CalcRetirementIncomeDeductionInput = {
  yearsOfService: number
  isDisability: boolean
}

export const calcRetirementIncomeDeduction = ({
  yearsOfService,
  isDisability,
}: CalcRetirementIncomeDeductionInput) => {
  let result
  if (yearsOfService === 1) {
    result = 800_000
  } else if (yearsOfService <= 19) {
    result = 400_000 * yearsOfService
  } else {
    result = 8_000_000 + 700_000 * (yearsOfService - 20)
  }
  if (isDisability) {
    result += 1_000_000
  }
  return result
}
