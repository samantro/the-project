import React from 'react';
import { Row, Col, Grid , Container} from 'react-bootstrap';
import f1 from '../../static/Images/f1.png'
import f2 from '../../static/Images/lab.png'

function Feature(){

    return ( 
    <div style={{marginLeft : "3rem", marginRight: "3rem"}}> 
    <Container>
    <hr className="featurette-divider" style={{margin:"5rem 2rem"}}></hr>

  <Row class='featurette'>
  
    <Col md ="7">
    <h2 class="featurette-heading">Find Medical Supplies Near You <span class="text-muted">Because we believe sharing is caring</span></h2>
        <p class="lead">Search medical supplies near you, Someone might have unused medical supplies like oxygen Cylinders, medicines and other various things</p>
      <div style={{margin: "5rem 1rem"}}><button class="btn" style={{backgroundColor: '#446A46', color: 'white'}}>Search Near You</button></div>
    </Col>
    <Col md="5">
      <div style={{marginLeft: "4rem"}}>
      <img src={require('../../static/Images/f1.png')}/>
      </div>
    </Col>
  </Row>
  <hr className="featurette-divider"></hr>

  <Row class='featurette'>
  <Col md="5">
      <div style={{marginLeft: "4rem"}}>
      <img src={require('../../static/Images/f1.png')}/>
      </div>
    </Col>
    <Col md ="7">
    <h2 class="featurette-heading">Find Medical Supplies Near You <span class="text-muted">Because we believe sharing is caring</span></h2>
        <p class="lead">Search medical supplies near you, Someone might have unused medical supplies like oxygen Cylinders, medicines and other various things</p>
      <div style={{margin: "5rem 1rem"}}><button class="btn" style={{backgroundColor: '#446A46', color: 'white'}}>Search Near You</button></div>
    </Col>
   
  </Row>
  <hr className="featurette-divider"></hr>

  <Row class='featurette'>
  
  <Col md ="7">
  <h2 class="featurette-heading">Find Medical Supplies Near You <span class="text-muted">Because we believe sharing is caring</span></h2>
      <p class="lead">Search medical supplies near you, Someone might have unused medical supplies like oxygen Cylinders, medicines and other various things</p>
    <div style={{margin: "5rem 1rem"}}><button class="btn" style={{backgroundColor: '#446A46', color: 'white'}}>Search Near You</button></div>
  </Col>
  <Col md="5">
    <div style={{marginLeft: "4rem"}}>
    <img src={require('../../static/Images/f1.png')}/>
    </div>
  </Col>
</Row>
  </Container>

    <hr style={{margin:"0rem 2 rem"}}></hr>
    
    </div>

    );
}
export default Feature;