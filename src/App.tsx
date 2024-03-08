import { Provider } from 'react-redux'
import { GlobalStyle } from './styles'

import store from './redux/store'
import RoutesApp from './routes'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RoutesApp />
    </Provider>
  )
}

export default App
