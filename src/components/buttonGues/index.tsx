import style from './styles.module.css'

interface PropsButtonGues {
  isDisabledInput: boolean
  helperInput: () => void
}

export default function ButtonGues (props: PropsButtonGues): JSX.Element {
  const { isDisabledInput, helperInput } = props

  return (
    <button
      className={`${style.buttonGues} ${isDisabledInput ? style.disabledButtonGues : style.enabledButtonGues}`}
      disabled={isDisabledInput}
      data-testid='buttonGues'
      onClick={helperInput}
    >Guess it</button>
  )
}
