
import React from "react";
import Card from './Card.js';
import styled from 'styled-components';

const Container = styled.div`
padding:50px 90px 70px 90px;
display:grid;
grid-template-columns: repeat(4, 1fr [col-start]);
grid-template-rows: repeat(5, 1fr [col-start]);
column-gap: 10px;
row-gap: 28px;
background-color:#C4C4C4;
`

class App extends React.Component {
  render() {
   return(
     <Container>
       <Card/>
     </Container>
   )
  }
}
export default App;
