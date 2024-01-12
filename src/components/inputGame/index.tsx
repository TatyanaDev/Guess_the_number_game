import { AnyAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import style from './styles.module.css'

interface PropsInputGame {
  setIsValueInput: (value: number | '') => AnyAction
  isDisabledInput: boolean
  isValueInput: string
}

export default function InputGame (props: PropsInputGame): JSX.Element {
  const { setIsValueInput, isDisabledInput, isValueInput } = props

  const dispatch = useDispatch()

  const helperOnInput: (target: EventTarget) => void = (target: EventTarget) => {
    if ((target as HTMLTextAreaElement).value.length > 1) {
      (target as HTMLTextAreaElement).value = (target as HTMLTextAreaElement).value.slice(0, 1)
    }
  }

  return (
    <input
      onChange={({ target: { value } }) => dispatch(setIsValueInput(value === '' ? '' : Number(value)))}
      onInput={({ target }) => helperOnInput(target)}
      disabled={isDisabledInput}
      className={style.input}
      data-testid='inputGame'
      value={isValueInput}
      type="number"
    />
  )
}
