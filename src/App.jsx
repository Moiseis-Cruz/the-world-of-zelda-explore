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
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`