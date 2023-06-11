import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import './AboutMe.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

function AboutMe() {
  return (
    <div className='about-me' id='about-me'>
        <Container fluid>
        <Row>
            <Col>
                <h1 className='behind-effect overlay-center'>ABOUT ME</h1>
                <p className='overlay-center overlay-text'>Know Me More</p>
            </Col>
        </Row>
        <Row className='mx-5 my-5 justify-content-center'>
            <Col lg={8} md={12} sm={12}>
                <h2>I'm Gilbert Co, A Software Engineer</h2>
                <p>I help you design and create systems and application to meet your business needs.</p>
                <p>One of my recent project help the company to move out from on-premise to cloud <br></br>by changing the process involving thousands ETL workflows</p>
                <p>Delivering quality work within time and budget to meet client's expectation is my goal</p>
            </Col>
            <Col lg={4} md={12} sm={12}>
                <ul className='list-style-none'>
                    <li>Name: Gilbert Co</li>
                    <li>Email: gscojr@gmail.com</li>
                    <li>Age: 29</li>
                    <li>From: Abu Dhabi, Al Ain</li>
                </ul>
                <Button href="#" className='download-cv' >Download CV</Button>
            </Col>

            <Row className='mt-5'>
            <Col lg={3} md={6} sm={6}>
                <h1>5</h1>
                <p>Years Experience</p>
            </Col>
            <Col lg={3} md={6} sm={6}>
                <h1>10+</h1>
                <p>Projects Completed</p>
            </Col>
            <Col lg={3} md={6} sm={6}>
            <h1>5+</h1>
                <p>Years Experience</p>
            </Col>
            <Col lg={3} md={6} sm={6}>
            <   h1>20+</h1>
                <p>happy Clients</p>
            </Col>
            </Row>
        </Row>
        </Container>
    </div>
    
  )
}

export default AboutMe