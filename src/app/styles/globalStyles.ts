import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
 
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
};

html {
    font-size: 62.5%;
    overflow-x: hidden; 
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

h1,h2,h3,h4,h5,h6{
  & span {
    color: #D2042D
    }
}

  li {
    list-style-type: none;
  }

  .Typewriter{
    & span {
    font-size: 2.4rem;
    color: #123C73;
    line-height: 1.5;
    font-weight: 800;
   
    @media (max-width: 370px) {
    font-size: 2rem;
  } 
    & 
      span {
      color:#D2042D;
    }
  
    }
  }
`;
 
export default GlobalStyle;
