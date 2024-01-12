import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'
import { store } from './store'
import App from './App'

test('Application is being rendered', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>)
})

test('Application renders 4 inputs', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(screen.getAllByTestId('inputGame').length).toBe(4)
})

test('Application does not display 10 inputs', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(screen.getAllByTestId('inputGame').length).not.toBe(10)
})

test('Application renders 4 buttons', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(screen.getAllByTestId('buttonGuess').length).toBe(4)
})

test('After starting the application, the number of attempts is displayed', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  userEvent.click(screen.getByTestId('buttonStartGame'))

  expect(screen.getByText(/4 attempts left/i)).toBeInTheDocument()

  userEvent.click(screen.getByTestId('buttonEndGame'))
})

test('The application does not display a winning message on launch', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(screen.queryByText(/You have won! Congratulations on your victory! You can restart the game/i)).not.toBeInTheDocument()
})

test('The application does not display a message about the loss on startup', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(screen.queryByText(/You lost! You can restart the game/i)).not.toBeInTheDocument()
})
