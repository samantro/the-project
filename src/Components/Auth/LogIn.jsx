import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Row, Col, Grid , Container} from 'react-bootstrap';
import {Image} from "react-bootstrap";
import {Form} from 'react-bootstrap';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LogIn() {
  const [openLogin, setOpenLogin] = React.useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const [openSignup, setOpenSignup] = React.useState(false);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  const handleOpen=(modal)=>{
    if (modal==="login"){
      handleOpenLogin();
      handleCloseSignup();
    }
    else{
      handleOpenSignup();
      handleCloseLogin();
    }
  } 

  

  return (
    <div>
      <Button onClick={handleOpenLogin} class="buttons btn">LOG IN</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openLogin}
        onClose={handleCloseLogin}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openLogin}>
        <Box sx={style}>
<Row className="landing">
<Col > <div>
<Image src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?t=st=1653384004~exp=1653384604~hmac=e573530ed5b757d736670fbbd9e722979d690e3c502ba0e1010301b689a8561f&w=826" thumbnail style={{border:"none", height:"1280 px", width: "1000px"}} /> 
</div></Col>

<Col >
<div>
  <br/>
  <h1 style={{marginLeft:"7%"}}>Log In</h1>
  <br/>
 
  <Form style={{width:"80%", marginLeft:"7%", marginTop:"0%"}}>
      <Form.Group style={{margin:"5% 0"}}>
          <Form.Label>Enter your email</Form.Label>
          <Form.Control type="email" placeholder="example@email.com" />
      </Form.Group>
      <Form.Group style={{margin:"5% 0"}}>
          <Form.Label>Enter your password</Form.Label>
          <Form.Control type="password" placeholder="password" />
      </Form.Group>
      <Button type="submit" class="buttons btn">Submit</Button>
  </Form>
        <br/>
 <br/> <h5 style={{marginLeft: "6%"}}>Don't have an account?  <Button onClick={()=>{handleOpen("signup")}} class="buttons btn">Sign Up</Button></h5>
</div>

</Col>
</Row>

</Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openSignup}
        onClose={handleCloseSignup}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openSignup}>
        <Box sx={style}>
<Row className="landing">
<Col > <div>
<Image src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?t=st=1653384004~exp=1653384604~hmac=e573530ed5b757d736670fbbd9e722979d690e3c502ba0e1010301b689a8561f&w=826" thumbnail style={{border:"none", height:"1280 px", width: "1000px"}} /> 
</div></Col>

<Col >
<div>
<br/>
  <h1 style={{marginLeft:"7%"}}>Sign Up</h1>

  <br/>
  <Form style={{width:"80%", marginLeft:"10%", marginTop:""}}>
  <Form.Group style={{margin:"0 0 5% 0"}}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your password" />
      </Form.Group >
      <Form.Group style={{margin:"5% 0"}}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      <Form.Group style={{margin:"5% 0"}}>
          <Form.Label>Choose password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
      </Form.Group>
      <Form.Group style={{margin:"5% 0"}}>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
      </Form.Group>
      <Button type="submit" class="buttons btn">Submit</Button>
  </Form>
</div>

</Col>
</Row>

</Box>
        </Fade>
      </Modal>
    </div>
  );
}




