import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { store } from './store'
import App from './App'
import './styles.css'

createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode >
)
