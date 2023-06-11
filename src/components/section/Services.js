import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Services.css'
import { Container, Row, Col } from 'react-bootstrap'

function Services() {
  return (
    <div >
        <Container fluid className='services' id='services'>
            <Row>
                <Col>
                    <h1 className='behind-effect overlay-center'>SERVICES</h1>
                    <p className='overlay-center overlay-text'>What I Do?</p>
                </Col>
            </Row>

            <Row className='my-2 mx-5 justify-content-center center'>
                <Col lg={3}>
                    <i className="fa fa-desktop"></i>
                    <h2>Programmer</h2>
                    <p>Created several scripts and tools using python and bash</p>
                </Col>
                <Col lg={3}>
                    <i className="fa fa-database"></i>
                    <h2>Database Administrator</h2>
                    <p>Maintain and backup database state</p>
                </Col>
            </Row>

            <Row className='my-5 mx-5 justify-content-center center'>
                <Col lg={3}>
                    <i className="fa fa-desktop"></i>
                    <h2>Programmer</h2>
                    <p>Created several scripts and tools using python and bash</p>
                </Col>
                <Col lg={3}>
                    <i className="fa fa-database"></i>
                    <h2>Database Administrator</h2>
                    <p>Maintain and backup database state</p>
                </Col>
            </Row>

            <Row className='my-5 mx-5 justify-content-center center'>
                <Col lg={3}>
                    <i className="fa fa-desktop"></i>
                    <h2>Programmer</h2>
                    <p>Created several scripts and tools using python and bash</p>
                </Col>
                <Col lg={3}>
                    <i className="fa fa-database"></i>
                    <h2>Database Administrator</h2>
                    <p>Maintain and backup database state</p>
                </Col>
            </Row>
            
        </Container>
    </div>
  )
}

export default Services