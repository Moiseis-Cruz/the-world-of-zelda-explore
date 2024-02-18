import './App.css'
import { HeaderLogo } from './components/header'
import { Main } from './components/main'
import { GlobalStyle } from './style/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderLogo/>
      <Main/>
    </>
  )
}

export default App