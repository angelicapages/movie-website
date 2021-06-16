import { createGlobalStyle } from 'styled-components'
import theme from './Theme'

const GlobalStyle = createGlobalStyle`
    body{
    background: ${theme.colors.background};
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    }`

export default GlobalStyle