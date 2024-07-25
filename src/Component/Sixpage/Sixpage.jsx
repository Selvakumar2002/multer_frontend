import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import  mk from './../img/video.mp4'
import './Sixpage.css'
function Sixpage() {
  return (
    <Container id='ds89'>
      <Row  style={{height:'600px' ,width:'100%',backgroundColor:''}}>
        <Col sm={6}>
        <div className='sixpage1'>
            <h2>Get Konw About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sed eum blanditiis est non cupiditate labore beatae sapiente fugiat reiciendis? Molestiae 
                labore soluta temporibus officiis quibusdam nesciunt animi perferendis reprehenderit!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quam accusantium ullam alias rerum distinctio harum molestias id voluptates quas molestiae dignissimos,
                     reiciendis quis vel! Facere adipisci hic fugiat nam.</p>
                     < Button  className='sevenbutton' variant="primary">Primary</Button>{' '}

        </div>
        </Col>
        <Col sm={6}>
        <div className='sixpage2'>   

        <video  className='video' controls>
  <source  src={mk} type="video/mp4" />
  <sourc   src={mk} type="video/ogg" />
  Your browser does not support the video tag.
    </video>
    </div>

        </Col>
      </Row>
      
    </Container>
  );
}

export default Sixpage;