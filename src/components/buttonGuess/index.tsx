import style from './styles.module.css'

interface PropsButtonGuess {
  isDisabledInput: boolean
  helperInput: () => void
}

export default function ButtonGuess (props: PropsButtonGuess): JSX.Element {
  const { isDisabledInput, helperInput } = props

  return (
    <button
      className={`${style.buttonGuess} ${isDisabledInput ? style.disabledButtonGuess : style.enabledButtonGuess}`}
      disabled={isDisabledInput}
      data-testid='buttonGuess'
      onClick={helperInput}
    >Guess it</button>
  )
}
