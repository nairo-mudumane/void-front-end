import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transitions: all .2s ease;
}

html,
body {
    background: #fffff;
}
`
