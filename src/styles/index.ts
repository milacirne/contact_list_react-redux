import { createGlobalStyle } from 'styled-components'
import variables from './variables'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
    color: ${variables.lightBlack};
    text-decoration: none;
  }

  body {
    background-color: ${variables.lightGrey};
  }
`
