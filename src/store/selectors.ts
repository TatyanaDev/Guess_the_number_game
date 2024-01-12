import { RootState } from './index'

export const getFirstNumber: (state: RootState) => string = (state: RootState) => state.firstNumber.number
export const getSecondNumber: (state: RootState) => string = (state: RootState) => state.secondNumber.number
export const getThirdNumber: (state: RootState) => string = (state: RootState) => state.thirdNumber.number
export const getFourthNumber: (state: RootState) => string = (state: RootState) => state.fourthNumber.number

export const getIsValueFirstInput: (state: RootState) => string = (state: RootState) => state.isValueFirstInput.number
export const getIsValueSecondInput: (state: RootState) => string = (state: RootState) => state.isValueSecondInput.number
export const getIsValueThirdInput: (state: RootState) => string = (state: RootState) => state.isValueThirdInput.number
export const getIsValueFourthInput: (state: RootState) => string = (state: RootState) => state.isValueFourthInput.number

export const getIsDisabledFirstInput: (state: RootState) => boolean = (state: RootState) => state.isDisabledFirstInput.status
export const getIsDisabledSecondInput: (state: RootState) => boolean = (state: RootState) => state.isDisabledSecondInput.status
export const getIsDisabledThirdInput: (state: RootState) => boolean = (state: RootState) => state.isDisabledThirdInput.status
export const getIsDisabledFourthInput: (state: RootState) => boolean = (state: RootState) => state.isDisabledFourthInput.status

export const getIsValidFirstInput: (state: RootState) => boolean = (state: RootState) => state.isValidFirstInput.status
export const getIsValidSecondInput: (state: RootState) => boolean = (state: RootState) => state.isValidSecondInput.status
export const getIsValidThirdInput: (state: RootState) => boolean = (state: RootState) => state.isValidThirdInput.status
export const getIsValidFourthInput: (state: RootState) => boolean = (state: RootState) => state.isValidFourthInput.status

export const getDisplayIsValidFirstInput: (state: RootState) => boolean = (state: RootState) => state.displayIsValidFirstInput.status
export const getDisplayIsValidSecondInput: (state: RootState) => boolean = (state: RootState) => state.displayIsValidSecondInput.status
export const getDisplayIsValidThirdInput: (state: RootState) => boolean = (state: RootState) => state.displayIsValidThirdInput.status
export const getDisplayIsValidFourthInput: (state: RootState) => boolean = (state: RootState) => state.displayIsValidFourthInput.status

export const getAttemptCounter: (state: RootState) => number = (state: RootState) => state.attemptCounter.count

export const getIsGame: (state: RootState) => boolean = (state: RootState) => state.isGame.status
export const getIsLoss: (state: RootState) => boolean = (state: RootState) => state.isLoss.status
export const getIsWinn: (state: RootState) => boolean = (state: RootState) => state.isWinn.status

export const getCheckFirstInput: (state: RootState) => boolean = (state: RootState) => state.checkFirstInput.status
export const getCheckSecondInput: (state: RootState) => boolean = (state: RootState) => state.checkSecondInput.status
export const getCheckThirdInput: (state: RootState) => boolean = (state: RootState) => state.checkThirdInput.status
export const getCheckFourthInput: (state: RootState) => boolean = (state: RootState) => state.checkFourthInput.status
