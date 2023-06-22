import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    button {
        border:0;
        cursor: pointer;        
    }
    a { 
        text-decoration: none;
        color: inherit;
    }
    ul {
        list-style: none;
    }
`;

export default GlobalStyle;
