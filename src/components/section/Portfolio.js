import React from 'react'
import './Portfolio.css'
import { Container, Row, Col } from 'react-bootstrap'

function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
        <Container>
            <Row>
                <h1 className='behind-effect overlay-center'>PROJECTS</h1>
                <p className='overlay-center overlay-text'>My Work</p>           
            </Row>
        </Container>
    </div>
  )
}

export default Portfolio