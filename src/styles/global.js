import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}


:root {
    --brown-primary: #5A493E;
    --brown-secondary: #7A7266;     
    --brown-tertiary: #6C6359;
    
    --white: #fff;
    --black: #000;
    --grey0: #2A2A2A;   

    --height1: 150%;
    --height2: 160%;

    --border1: 1px solid #fff
    
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: #eeeeee;
}


button {
    cursor: pointer;
    border: 0;
    background: transparent
}

ul, ol, li {
    list-style: none;
}

img {
    max-width: 100%;
}

section, aside, div {
    display:flex;    
    align-items: center;
    justify-content: center;
}

h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    font-feature-settings: 'pnum' on, 'lnum' on;
}

`;
