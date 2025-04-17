import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './Context/UserContext.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <UserContext>
    <App />
  </UserContext>
  </Provider>,
)
