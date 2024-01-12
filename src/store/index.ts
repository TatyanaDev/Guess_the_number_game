import { configureStore } from '@reduxjs/toolkit'
import {
  firstNumberReducer,
  secondNumberReducer,
  thirdNumberReducer,
  fourthNumberReducer
} from './slices/numbers'

import {
  isValueFirstInputReducer,
  isValueSecondInputReducer,
  isValueThirdInputReducer,
  isValueFourthInputReducer
} from './slices/isValueInputs'

import {
  isDisabledFirstInputReducer,
  isDisabledSecondInputReducer,
  isDisabledThirdInputReducer,
  isDisabledFourthInputReducer
} from './slices/isDisabledInputs'

import {
  isValidFirstInputReducer,
  isValidSecondInputReducer,
  isValidThirdInputReducer,
  isValidFourthInputReducer
} from './slices/isValidInputs'

import {
  displayIsValidFirstInputReducer,
  displayIsValidSecondInputReducer,
  displayIsValidThirdInputReducer,
  displayIsValidFourthInputReducer
} from './slices/displayIsValidInputs'

import { attemptCounterReducer } from './slices/attemptCounter'

import { isGameReducer, isLossReducer, isWinnReducer } from './slices/isGame'

import {
  checkFirstInputReducer,
  checkSecondInputReducer,
  checkThirdInputReducer,
  checkFourthInputReducer
} from './slices/checkInputs'

export const store = configureStore({
  reducer: {
    firstNumber: firstNumberReducer,
    secondNumber: secondNumberReducer,
    thirdNumber: thirdNumberReducer,
    fourthNumber: fourthNumberReducer,

    isValueFirstInput: isValueFirstInputReducer,
    isValueSecondInput: isValueSecondInputReducer,
    isValueThirdInput: isValueThirdInputReducer,
    isValueFourthInput: isValueFourthInputReducer,

    isDisabledFirstInput: isDisabledFirstInputReducer,
    isDisabledSecondInput: isDisabledSecondInputReducer,
    isDisabledThirdInput: isDisabledThirdInputReducer,
    isDisabledFourthInput: isDisabledFourthInputReducer,

    isValidFirstInput: isValidFirstInputReducer,
    isValidSecondInput: isValidSecondInputReducer,
    isValidThirdInput: isValidThirdInputReducer,
    isValidFourthInput: isValidFourthInputReducer,

    displayIsValidFirstInput: displayIsValidFirstInputReducer,
    displayIsValidSecondInput: displayIsValidSecondInputReducer,
    displayIsValidThirdInput: displayIsValidThirdInputReducer,
    displayIsValidFourthInput: displayIsValidFourthInputReducer,

    attemptCounter: attemptCounterReducer,

    isGame: isGameReducer,
    isLoss: isLossReducer,
    isWinn: isWinnReducer,

    checkFirstInput: checkFirstInputReducer,
    checkSecondInput: checkSecondInputReducer,
    checkThirdInput: checkThirdInputReducer,
    checkFourthInput: checkFourthInputReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
