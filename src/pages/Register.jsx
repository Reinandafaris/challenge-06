import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from '../components/GoogleLogin';
import CarouselSlider from '../components/CarouselSlider';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/authActions';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      name,
      email,
      password,
    });

    dispatch(register(data, navigate));
  };

  const handleCloseRegister = () => {
    const register = document.querySelector('.wrapper-register');
    register.classList.remove('active');
  };

  const handleShowPassword = () => {
    setIsClicked(!isClicked);
    var passwordField = document.getElementById('passwordField');
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
  };

  return (
    <>
      <>
        <CarouselSlider />
      </>
      <div className="wrapper-register">
        <Container className="d-flex justify-content-center align-item-center">
          <Row className="baris-register">
            <Col>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <div className="tag-group">
                    <h1 className="tag-register">Create Account</h1>
                    <label onClick={handleCloseRegister} className="cross">
                      <i className="fa-solid fa-forward"></i>
                    </label>
                  </div>
                  <div className="line" id="formBasicEmail">
                    <div className="form-input">
                      <input type="text" placeholder="First Name" className="isi-form" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-icon">
                      <i className="fa-regular fa-user"></i>
                    </div>
                  </div>
                  {/* <div className="line">
                    <div className="form-input">
                      <input type="text" placeholder="Last Name" className="isi-form" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="form-icon">
                      <i className="fa-regular fa-user"></i>
                    </div>
                  </div> */}
                  <div className="line" id="formBasicEmail">
                    <div className="form-input">
                      <input type="email" placeholder="Email Address" className="isi-form" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                  </div>
                  <div className="line" id="formBasicPassword">
                    <div className="form-input">
                      <input type="password" id="passwordField" placeholder="Password" className="isi-form" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-icon" onClick={handleShowPassword}>
                      {isClicked ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
                    </div>
                  </div>
                  {/* <div className="line">
                    <div className="form-input">
                      <input type="password" placeholder="Password Confirmation" className="isi-form" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                    </div>
                    <div className="form-icon">
                      <i className="fa-regular fa-eye"></i>
                    </div>
                  </div> */}
                  <button type="submit" className="tombol-submit">
                    Register Now
                  </button>
                  <GoogleLogin buttonText="Register with Google" />
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <Container className="p-4">
        <Row>
          <Col>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="text-center">Or</h4>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <GoogleLogin buttonText="Register with Google 🚀" />
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default Register;
