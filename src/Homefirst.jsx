// import './App.css';
import Container from 'react-bootstrap/Container';

import Sevenpage from './Component/Sevenpage/Sevenpage';
import Sixpage from './Component/Sixpage/Sixpage';
import Eigthpage from './Component/Eightpage/Eightpage';
import Homepage from "./Component/Homepage/Homepage";

function Homefirst() {
  return (
    <Container fluid>
    <div className="App">
        <Homepage />

         
          <Sixpage />
          <Sevenpage />
          <Eigthpage />
    
    </div>
    </Container>
  );
}

export default Homefirst;
