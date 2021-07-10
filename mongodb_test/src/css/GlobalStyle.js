import { createGlobalStyle } from "styled-components";
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};

    *, *::before, *::after {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;