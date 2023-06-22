import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding:0
    }
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
