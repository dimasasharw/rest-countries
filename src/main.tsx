import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/index.ts'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <App />
      </StrictMode>
    </PersistGate>
  </Provider>
)
