import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FetchData from './FetchData';

function CategoryNav() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">News</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">All</Nav.Link>
            <Nav.Link as={Link} to="/Business">Business</Nav.Link>
            <Nav.Link as={Link} to="/Entertainment">Entertainment</Nav.Link>
            <Nav.Link as={Link} to="/Health">Health</Nav.Link>
            <Nav.Link as={Link} to="/Science">Science</Nav.Link>
            <Nav.Link as={Link} to="/Sports">Sports</Nav.Link>
            <Nav.Link as={Link} to="/Technology">Technology</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<FetchData category={"general"} />} />
        <Route path="/Business" element={<FetchData category={"business"}/>} />
        <Route path='/Entertainment'element={<FetchData category={"entertainment"}/>}/>
        <Route path='/health' element={<FetchData category={"health"}/>} />
        <Route path='/science' element={<FetchData category={"science"}/>} />
        <Route path='/sports' element={<FetchData category={"sports"}/>} />
        <Route path='/technology' element={<FetchData category={"technology"}/>} />


      </Routes>
    </Router>
  );
}

export default CategoryNav;
