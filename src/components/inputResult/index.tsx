import style from './styles.module.css'

interface PropsInputResult {
  displayIsValidInput: boolean
  isValidInput: boolean
  checkInput: boolean
}

export default function InputResult (props: PropsInputResult): JSX.Element {
  const { displayIsValidInput, isValidInput, checkInput } = props

  return (
    <span className={`${displayIsValidInput ? style.containerResult : ''} ${isValidInput ? style.validInput : style.invalidInput}`}>
      {displayIsValidInput && !isValidInput ? <p className={style.checkInputInfo}>{checkInput ? 'Try a less number' : 'Try a higher number'}</p> : null}
      {displayIsValidInput ? <h4 className={style.validInputInfo}>{isValidInput ? 'V' : 'X'}</h4> : null}
    </span>
  )
}
