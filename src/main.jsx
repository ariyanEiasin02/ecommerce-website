import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextApi } from './components/ContextApi/ContextApi.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
import './firebaseConfig.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ContextApi>
      <App />
    </ContextApi>
    </Provider>
  </StrictMode>,
)
