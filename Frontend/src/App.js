// Import React
import React from "react";
  
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
  
// Import Custom CSS
import "./App.css";
  
// Import from react-router-dom
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
  
// Import other React Component
import CreateStudent from "./Components/create-student.component";
import EditStudent from "./Components/edit-student.component";
import StudentList from "./Components/student-list.component";

// import { Routes } from "react-router";
  
// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"} 
                  className="nav-link">
                  React App
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} 
                    className="nav-link">
                    Add Book
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/student-list"} 
                    className="nav-link">
                    Book List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  {/* <Route exact path="/" 
                    component={CreateStudent} />
                  <Route path="/create-student" 
                    component={CreateStudent} />
                  <Route path="/edit-student/:id" 
                    component={EditStudent} />
                  <Route path="/student-list" 
                    component={StudentList} /> */}
                  <Route exact path="/" 
                    elementt={<CreateStudent/>} />
                  <Route path="/create-student" 
                    element={<CreateStudent/>} />
                  <Route path="/edit-student/:id" 
                    element={<EditStudent/>}/>
                  <Route path="/student-list" 
                    element={<StudentList/>} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
  
export default App;

// element={<EditStudent/>} 