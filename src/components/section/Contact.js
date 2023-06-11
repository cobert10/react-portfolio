import React from 'react'
import './Contact.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function Contact() {
  return (
    <div className='contact' id='contact'>
    <Container className=''>
        <Row>
            <h1 className='behind-effect overlay-center'>CONTACT</h1>
            <p className='overlay-center overlay-text'>Get In Touch</p>           
        </Row>
        <Row className='justify-content-center'>
          <Col lg={3}>
            <h4>ADDRESS</h4>
            <p>Al Suqal Street, Al Jimi, 
              <br></br>Al Ain, Abu Dhabi UAE</p>
            <p>(971) 581 340 761</p>
            <h4>FOLLOW ME</h4>
            <ul className='contact-icons'>
              <li className='icon' >
                  <i class="fa fa-facebook"></i>
              </li>
              <li className='icon'>
                  <i class="fa fa-twitter"></i>
              </li>
              <li className='icon'>
                  <i class="fa fa-linkedin"></i>
              </li>
              <li className='icon'>
                  <i class="fa fa-github"></i>
              </li>
            </ul>
          </Col>
          <Col lg={8}>
            <h4>SEND ME A NOTE</h4>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Row>
                  <Col>
                    <Form.Control type="email" placeholder="Name" />
                  </Col>
                  <Col>
                    <Form.Control type="email" placeholder="Email" />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={5} placeholder='Tell me your business needs...'/>
              </Form.Group>
              <Col className='send-message' lg={12}>
                <Button variant='info'>Send a Message</Button>
              </Col>
            </Form>
          </Col>
        </Row>
    </Container>
</div>
  )
}

export default Contact