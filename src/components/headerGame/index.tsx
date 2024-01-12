import { useDispatch, useSelector } from 'react-redux'
import Confetti from 'react-confetti'
import {
  getAttemptCounter,
  getIsGame,
  getIsLoss,
  getIsWinn
} from './../../store/selectors'
import {
  setFirstNumber,
  setFourthNumber,
  setSecondNumber,
  setThirdNumber,
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
  setIsGame,
  setIsLoss,
  setIsWinn
} from './../../store/slices'
import style from './styles.module.css'

export default function HeaderGame (): JSX.Element {
  const attemptCounter = useSelector(getAttemptCounter)

  const isGame = useSelector(getIsGame)
  const isLoss = useSelector(getIsLoss)
  const isWinn = useSelector(getIsWinn)

  const dispatch = useDispatch()

  const clearAllInputs: () => void = () => {
    dispatch(setIsValueFirstInput(''))
    dispatch(setIsValueSecondInput(''))
    dispatch(setIsValueThirdInput(''))
    dispatch(setIsValueFourthInput(''))
  }

  const invalidateAllInputs: () => void = () => {
    dispatch(setIsValidFirstInput(false))
    dispatch(setIsValidSecondInput(false))
    dispatch(setIsValidThirdInput(false))
    dispatch(setIsValidFourthInput(false))
  }

  const hideTheDisplayOfValidityOfAllInputs: () => void = () => {
    dispatch(setDisplayIsValidFirstInput(false))
    dispatch(setDisplayIsValidSecondInput(false))
    dispatch(setDisplayIsValidThirdInput(false))
    dispatch(setDisplayIsValidFourthInput(false))
  }

  const startGame: () => void = () => {
    dispatch(setIsDisabledFirstInput(false))

    dispatch(setIsGame(true))
    dispatch(setIsLoss(false))
    dispatch(setIsWinn(false))

    dispatch(setFirstNumber(Math.floor(Math.random() * 10)))
    dispatch(setSecondNumber(Math.floor(Math.random() * 10)))
    dispatch(setThirdNumber(Math.floor(Math.random() * 10)))
    dispatch(setFourthNumber(Math.floor(Math.random() * 10)))

    clearAllInputs()

    invalidateAllInputs()

    hideTheDisplayOfValidityOfAllInputs()
  }

  const endGame: () => void = () => {
    dispatch(setIsGame(false))

    clearAllInputs()

    dispatch(setIsDisabledFirstInput(true))
    dispatch(setIsDisabledSecondInput(true))
    dispatch(setIsDisabledThirdInput(true))
    dispatch(setIsDisabledFourthInput(true))

    invalidateAllInputs()

    hideTheDisplayOfValidityOfAllInputs()

    dispatch(setAttemptCounter(0))
  }

  const displayTheNumberOfAttempts: () => '1' | '2' | '3' | '4' | undefined = () => {
    switch (attemptCounter) {
      case 3:
        return '1'
      case 2:
        return '2'
      case 1:
        return '3'
      case 0:
        return '4'
    }
  }

  return (
    <>
      {isWinn
        ? <Confetti
          width={window.screen.width}
          height={window.screen.height}
        />
        : isLoss
          ? <Confetti
            width={window.screen.width}
            height={window.screen.height}
            colors={['red']}
          />
          : null
      }

      <h2 className={style.lossOrWinnInfo}>{isLoss ? 'You lost! You can restart the game' : isWinn ? 'You have won! Congratulations on your victory! You can restart the game' : null}</h2>

      {(!isGame || isWinn || isLoss)
        ? <button className={`${style.buttonGame} ${style.buttonStartGame}`} onClick={startGame} data-testid='buttonStartGame'>Start game</button>
        : null
      }

      {isGame
        ? <div className={style.buttonEndAttemptsContainer}>
          <button className={`${style.buttonGame} ${style.buttonEndGame}`} onClick={endGame} data-testid='buttonEndGame'>End game</button>
          <h3 className={style.attemptsLeftInfo} >{displayTheNumberOfAttempts()} attempts left</h3>
        </div>
        : null}
    </>
  )
}
