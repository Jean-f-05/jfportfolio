import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
 
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
};

html {
    font-size: 62.5%;
    
};

body {
    
    background-color: #FFF;
    overflow-x: hidden;
};

p, a{  
    cursor: pointer;
  };

a {
  text-decoration: none;
  }

  span {
    color: #D2042D
    }

  li {
    list-style-type: none;
  }

`;
 
export default GlobalStyle;
