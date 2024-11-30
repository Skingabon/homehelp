import { useState } from 'react'

// import './App.css'
import './style.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button, Card, Col, Row} from "react-bootstrap";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Navbar fixed="top" expand="lg" className="bg-body-tertiary" data-bs-theme="light">
              <Container>
                  <Navbar.Brand className="logo" href="#home">homehelp</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                          <Nav.Link href="#home">Home</Nav.Link>
                          <Nav.Link href="#link">Link</Nav.Link>
                          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">
                                  Another action
                              </NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.4">
                                  Separated link
                              </NavDropdown.Item>
                          </NavDropdown>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>


          <Row xs={1} md={4} className="g-4">
              {Array.from({ length: 8 }).map((_, idx) => (
                  <Col key={idx}>
                      <Card style={{ width: '1rem' }}>
                          <Card.Img variant="top" src="/img/Renault02.jpg" />
                          <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Text>
                                  Some quick example text to build on the card title and make up the
                                  bulk of the card's content.
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                      </Card>
                  </Col>
              ))}
          </Row>
      </div>
    </>
  )
}

export default App
