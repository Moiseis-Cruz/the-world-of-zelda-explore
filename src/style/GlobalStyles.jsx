import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background-color: #686868;
}

::-webkit-scrollbar-thumb {
    background-color: #06c7a0;
    border-radius: 15px;
}

body {
    font-family: 'Genos', sans-serif;
    max-width: 1440px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}

ul {
    list-style: none;
}
`