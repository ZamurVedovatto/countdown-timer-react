import { createGlobalStyle } from 'styled-components'
import bgImg from 'assets/bg.jpg'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-family: 'Roboto', sans-serif;;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  margin: 0;
}
`