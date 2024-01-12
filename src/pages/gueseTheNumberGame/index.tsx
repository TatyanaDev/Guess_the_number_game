import { useDispatch, useSelector } from 'react-redux'
import HeaderGame from '../../components/headerGame'
import ButtonGues from '../../components/buttonGues'
import InputGame from '../../components/inputGame'
import InputResult from '../../components/inputResult'
import {
  getFirstNumber,
  getFourthNumber,
  getSecondNumber,
  getThirdNumber,
  getIsValueFirstInput,
  getIsValueSecondInput,
  getIsValueThirdInput,
  getIsValueFourthInput,
  getIsDisabledFirstInput,
  getIsDisabledSecondInput,
  getIsDisabledThirdInput,
  getIsDisabledFourthInput,
  getIsValidFirstInput,
  getIsValidSecondInput,
  getIsValidThirdInput,
  getIsValidFourthInput,
  getDisplayIsValidFirstInput,
  getDisplayIsValidSecondInput,
  getDisplayIsValidThirdInput,
  getDisplayIsValidFourthInput,
  getAttemptCounter,
  getIsGame,
  getCheckFirstInput,
  getCheckSecondInput,
  getCheckThirdInput,
  getCheckFourthInput
} from './../../store/selectors'
import {
  setIsValueFirstInput,
  setIsValueSecondInput,
  setIsValueThirdInput,
  setIsValueFourthInput,
  setIsDisabledFirstInput,
  setIsDisabledSecondInput,
  setIsDisabledThirdInput,
  setIsDisabledFourthInput,
  setIsValidFirstInput,
  setIsValidSecondInput,
  setIsValidThirdInput,
  setIsValidFourthInput,
  setDisplayIsValidFirstInput,
  setDisplayIsValidSecondInput,
  setDisplayIsValidThirdInput,
  setDisplayIsValidFourthInput,
  setAttemptCounter,
  incrementAttemptCounter,
  setIsGame,
  setIsLoss,
  setIsWinn,
  setCheckFirstInput,
  setCheckSecondInput,
  setCheckThirdInput,
  setCheckFourthInput
} from './../../store/slices'
import style from './styles.module.css'

export default function GuesTheNumberGame (): JSX.Element {
  const firstNumber = useSelector(getFirstNumber)
  const secondNumber = useSelector(getSecondNumber)
  const thirdNumber = useSelector(getThirdNumber)
  const fourthNumber = useSelector(getFourthNumber)

  const isValueFirstInput = useSelector(getIsValueFirstInput)
  const isValueSecondInput = useSelector(getIsValueSecondInput)
  const isValueThirdInput = useSelector(getIsValueThirdInput)
  const isValueFourthInput = useSelector(getIsValueFourthInput)

  const isDisabledFirstInput = useSelector(getIsDisabledFirstInput)
  const isDisabledSecondInput = useSelector(getIsDisabledSecondInput)
  const isDisabledThirdInput = useSelector(getIsDisabledThirdInput)
  const isDisabledFourthInput = useSelector(getIsDisabledFourthInput)

  const isValidFirstInput = useSelector(getIsValidFirstInput)
  const isValidSecondInput = useSelector(getIsValidSecondInput)
  const isValidThirdInput = useSelector(getIsValidThirdInput)
  const isValidFourthInput = useSelector(getIsValidFourthInput)

  const displayIsValidFirstInput = useSelector(getDisplayIsValidFirstInput)
  const displayIsValidSecondInput = useSelector(getDisplayIsValidSecondInput)
  const displayIsValidThirdInput = useSelector(getDisplayIsValidThirdInput)
  const displayIsValidFourthInput = useSelector(getDisplayIsValidFourthInput)

  const attemptCounter = useSelector(getAttemptCounter)

  const isGame = useSelector(getIsGame)

  const checkFirstInput = useSelector(getCheckFirstInput)
  const checkSecondInput = useSelector(getCheckSecondInput)
  const checkThirdInput = useSelector(getCheckThirdInput)
  const checkFourthInput = useSelector(getCheckFourthInput)

  const dispatch = useDispatch()

  const endGameAndLoss: () => void = () => {
    dispatch(setIsGame(false))
    dispatch(setIsLoss(true))

    dispatch(setAttemptCounter(0))
  }

  const helperFirstInput: () => void = () => {
    dispatch(incrementAttemptCounter())

    dispatch(setDisplayIsValidFirstInput(true))

    dispatch(setCheckFirstInput(isValueFirstInput > firstNumber))
    if (attemptCounter === 3 && isValueFirstInput !== firstNumber) {
      dispatch(setIsDisabledFirstInput(true))

      endGameAndLoss()
    } else if (isValueFirstInput === firstNumber) {
      dispatch(setIsDisabledFirstInput(true))
      dispatch(setIsValidFirstInput(true))

      dispatch(setIsDisabledSecondInput(false))

      dispatch(setAttemptCounter(0))
    }
  }

  const helperSecondInput: () => void = () => {
    dispatch(incrementAttemptCounter())

    dispatch(setDisplayIsValidSecondInput(true))

    dispatch(setCheckSecondInput(isValueSecondInput > secondNumber))
    if (attemptCounter === 3 && isValueSecondInput !== secondNumber) {
      dispatch(setIsDisabledSecondInput(true))

      endGameAndLoss()
    } else if (isValueSecondInput === secondNumber) {
      dispatch(setIsDisabledSecondInput(true))
      dispatch(setIsValidSecondInput(true))

      dispatch(setIsDisabledThirdInput(false))

      dispatch(setAttemptCounter(0))
    }
  }

  const helperThirdInput: () => void = () => {
    dispatch(incrementAttemptCounter())

    dispatch(setDisplayIsValidThirdInput(true))

    dispatch(setCheckThirdInput(isValueThirdInput > thirdNumber))
    if (attemptCounter === 3 && isValueThirdInput !== thirdNumber) {
      dispatch(setIsDisabledThirdInput(true))

      endGameAndLoss()
    } else if (isValueThirdInput === thirdNumber) {
      dispatch(setIsDisabledThirdInput(true))
      dispatch(setIsValidThirdInput(true))

      dispatch(setIsDisabledFourthInput(false))

      dispatch(setAttemptCounter(0))
    }
  }

  const helperFourthInput: () => void = () => {
    dispatch(incrementAttemptCounter())

    dispatch(setDisplayIsValidFourthInput(true))

    dispatch(setCheckFourthInput(isValueFourthInput > fourthNumber))
    if (attemptCounter === 3 && isValueFourthInput !== fourthNumber) {
      dispatch(setIsDisabledFourthInput(true))

      endGameAndLoss()
    } else if (isValueFourthInput === fourthNumber) {
      dispatch(setIsDisabledFourthInput(true))
      dispatch(setIsValidFourthInput(true))

      dispatch(setIsGame(false))
      dispatch(setIsWinn(true))

      dispatch(setAttemptCounter(0))
    }
  }

  isGame && console.log('Your winning code:', firstNumber, secondNumber, thirdNumber, fourthNumber)

  return (
    <div className={style.wrapperContainer}>
      <div>
        <HeaderGame />
        <div>
          <div>
            <ButtonGues isDisabledInput={isDisabledFirstInput} helperInput={helperFirstInput} />

            <ButtonGues isDisabledInput={isDisabledSecondInput} helperInput={helperSecondInput} />

            <ButtonGues isDisabledInput={isDisabledThirdInput} helperInput={helperThirdInput} />

            <ButtonGues isDisabledInput={isDisabledFourthInput} helperInput={helperFourthInput} />
          </div>
          <div>
            <InputGame setIsValueInput={setIsValueFirstInput} isDisabledInput={isDisabledFirstInput} isValueInput={isValueFirstInput} />

            <InputGame setIsValueInput={setIsValueSecondInput} isDisabledInput={isDisabledSecondInput} isValueInput={isValueSecondInput} />

            <InputGame setIsValueInput={setIsValueThirdInput} isDisabledInput={isDisabledThirdInput} isValueInput={isValueThirdInput} />

            <InputGame setIsValueInput={setIsValueFourthInput} isDisabledInput={isDisabledFourthInput} isValueInput={isValueFourthInput} />
          </div>
          <div className={style.containerResult}>
            <InputResult displayIsValidInput={displayIsValidFirstInput} isValidInput={isValidFirstInput} checkInput={checkFirstInput} />

            <InputResult displayIsValidInput={displayIsValidSecondInput} isValidInput={isValidSecondInput} checkInput={checkSecondInput} />

            <InputResult displayIsValidInput={displayIsValidThirdInput} isValidInput={isValidThirdInput} checkInput={checkThirdInput} />

            <InputResult displayIsValidInput={displayIsValidFourthInput} isValidInput={isValidFourthInput} checkInput={checkFourthInput} />
          </div>
        </div>
      </div>
    </div>
  )
}
