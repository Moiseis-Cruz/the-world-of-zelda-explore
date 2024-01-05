import './App.css'
import { Main } from './components/main'
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <>
      <GlobalStyle />
      <Main/>
    </>
  )
}

export default App


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Genos', sans-serif;
  }

  ul {
    list-style: none;
  }
`