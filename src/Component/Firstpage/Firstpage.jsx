import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import thimg from './../img/Pic.png'
// import img1 from  './../img/link.jpg';
import './Firstpage.css';
import Button from 'react-bootstrap/Button';
import linktag from './../img/link.jpg'
import f1img from './../img/images1.jpg'
import m1 from './../img/m1.jpg'
import m2 from './../img/m2.jpg'
import m3 from './../img/m3.jpg'
import m4 from './../img/m4.jpg'
function Firstpage() {
  return (
 < >
    <Container   className='f89' >

  
<Row className='fir567'  style={{height:'600px' ,width:'100%',backgroundColor:''}}>

 <Col   sm={6} >
     <div className='firstpageh1'>
      
  <div className=''>
  <h1 >A learning platform that helps you to learning faster </h1>
  </div>

 <p >Lorem ipsum dolor sit amet,consectetur adipiscing elit.Eu id eu 
 venenatis dui tempor vel.Mauris enim hendrerit venenatis.</p>

<Button className='button125'>Get Started</Button>{' '}
<a className='linktag12' href="https://www.youtube.com/watch?v=poo0BXryffI&t=5555s">
<img  className='linktag23' src={linktag} alt="" width={'45px'}/> Play video </a>


    

     </div>
 </Col> 
 <Col sm={6} > 
<div className=' botfirst'>
<div  className='firstpagebot2'>
  
  <div className='firsthbot5'></div>
</div>

  <div  className='firstpagebot12'>

  <div className='firstpage2'>

  <Image className='firsthimg' src={thimg} width={'100%'} rounded />
  <div className='fisthbox1'>
    <img id='im09876' src={f1img} alt="" width={'40px'} style={{marginLeft:"10px"}} />
    <p >Total Students</p>
    <h3>50K</h3>
    <img id='m1' src={m1} alt="" />
    <img id='m2' src={m2} alt="" />
    <img id='m3' src={m3} alt="" />
    <img id='m4' src={m4} alt="" />
  </div>

  <div className='fisthbox'>
  <svg  id='svgimg' xmlns="http://www.w3.org/2000/svg" style={{width:'40px',marginLeft:'10px',marginTop:'10px'}} fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
  <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
</svg>
<p>Trained Teachers</p>
<div className='firstb'></div>
<div className='firstb1'></div>
<div className='firstb2'></div>
    <div className='fisthbo'></div>
  </div>

  </div>
  </div>
</div>
</Col  >
</Row>
</Container>
 </>
  );
}

export default Firstpage;