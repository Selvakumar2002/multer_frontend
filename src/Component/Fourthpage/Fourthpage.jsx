import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import fourthimg from  './../img/pic 3.png';
// import img1 from  './../img/link.jpg';
import './Fourthpage.css';
import Button from 'react-bootstrap/Button';

function Fourthpage() {
  return (
 < >
    <Container   className='f89' >

  
<Row className=''  style={{height:'600px' ,width:'100%',backgroundColor:''}}>

 <Col   sm={6} >
     <div className='fourthpageh1'>
      
  <div className=''>
  <h1 >Our Platfrom is Crafited spacificaly for students </h1>
     
  </div>

 <p >Lorem ipsum dolor sit amet,consectetur adipiscing elit.Eu id eu 
 venenatis dui tempor vel.Mauris enim hendrerit venenatis.Lorem ipsum dolor sit amet,consectetur adipiscing elit</p>

<Button className='button125'>Get Started</Button>{' '}


    

     </div>
 </Col> 
 <Col sm={6} > 
<div className=' botfourth'>
<div  className='fourthpagebot2'>
  <div className='fourthbot1'></div>
  <div className='fourthbot2'></div>
  <div className='fourthbot3'></div>
  <div className='fourthbot4'></div>
  <div className='fourthbot5'></div>
</div>

  <div  className='fourthpagebot12'>

  <div className='fourthpage2'>

  <Image className='fourthimg' src={fourthimg} width={'100%'} rounded />
  <div className='fourthbox'>
    <div className='fourthbox1'></div>
  </div>

  </div>
  </div>
</div>
</Col  >
</Row>
</Container>
<div style={{marginTop:''}}></div>
 </>
  );
}

export default Fourthpage;