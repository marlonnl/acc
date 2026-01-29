import { createGlobalStyle } from 'styled-components'
import { color } from './colors'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    background-color: ${color.bg};
}
`
