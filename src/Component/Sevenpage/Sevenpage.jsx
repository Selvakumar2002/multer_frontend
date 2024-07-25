
import Container from 'react-bootstrap/esm/Container';
import './Sevenpage.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Sevenpage() {
    return(
        <div>
            <Container id='dws89'  style={{marginTop:'10%',height:'350px' ,width:'100%',backgroundColor:''}}>
                <div className='sevenpage1'>
                  <div >  <h1 className='seven' >Join now get class certificate</h1></div>
                  <div> 
                     <p className='sevenp'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ut commodo
                      mauris nibh ut  neque mi tellus lacus. Massa senectus faucibus.
                    </p></div>
       <div className=''>
       <InputGroup  className="seveninput mb-3">
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
         < Button  className='sevenbutton' variant="primary">Primary</Button>{' '}
      </InputGroup>
       </div>  
     
       
                </div>
            </Container>
        </div>
    )
    
}
export default Sevenpage;