import React from 'react'
import { Container, Card, Col, Row, ProgressBar, Button } from 'react-bootstrap'
import './Resume.css'

function Resume() {
    const python = 80;
    const bash = 75;
    const html = 90;
    const react = 70;
    const design = 65;
    const data_science = 65;

    return (
    <div className='resume' id='resume'>
        <Container>
            <Row>
                <Col>
                    <h1 className='behind-effect overlay-center'>BACKGROUND</h1>
                    <p className='overlay-center overlay-text'>Resume</p>
                </Col>
            </Row>
            <Row className='my-5 mx-5'>
                <Col>
                    <h3>My Education</h3>
                    <Card>
                        <Card.Body>
                            <p>2013-2018</p>
                            <p>Bachelors Degree</p>
                            <p>FEU Institute Of Technology</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <h3>My Experience</h3>
                    <Card>
                        <Card.Body>
                            <p>2020-2023</p>
                            <p>Software Engineer</p>
                            <p>FactSet Philippines Inc.</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className='my-5 mx-5'>
                <Col>
                    <Card>
                        <Card.Body>
                            <p>2010-2012</p>
                            <p>Computer Science</p>
                            <p>University Of Santo Tomas</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <p>2018-2020</p>
                            <p>Web Developer</p>
                            <p>Bullseye Solutions Inc.</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className='my-5 mx-5'>
                <Col>
                    <Card>
                        <Card.Body>
                            <p>2006-2010</p>
                            <p>Maranatha Christian Academy</p>
                            <p>Highschool</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <p>2017-2018</p>
                            <p>Intern Exhibit Developer</p>
                            <p>Convey Health Solution</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            <Row className='my-5 mx-5'>
                <h2>My Skills</h2>
                <Col>
                    <p>Python</p>
                    <ProgressBar now={80} label={`${python}%`} />
                </Col>

                <Col>
                    <p>Bash</p>
                    <ProgressBar now={75} label={`${bash}%`} />
                </Col>
            </Row>
            <Row className='my-5 mx-5'>
                <Col>
                    <p>Data Science</p>
                    <ProgressBar now={65} label={`${data_science}%`} />
                </Col>
                    
                <Col>
                    <p>HTML/CSS</p>
                    <ProgressBar now={90} label={`${html}%`} />
                </Col>
            </Row>
            <Row className='my-5 mx-5'>
                <Col>
                    <p>React/Angular</p>
                    <ProgressBar now={70} label={`${react}%`} />
                </Col>
                <Col>
                    <p>Web Design</p>
                    <ProgressBar now={60} label={`${design}%`} />
                </Col>
            </Row>
            <Row className='my-5 mx-5 center'>
                <Col>
                    <Button href="#" className='download-cv' >Download CV <i className='fa fa-download'></i></Button>
                    
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Resume