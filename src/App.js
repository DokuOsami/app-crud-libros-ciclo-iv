import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateLibro from "./components/create-libro.component";
import EditLibro from "./components/edit-libro";
import LibroList from "./components/libro-list.component";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-libro"} className="nav-link">
                  App React MERN Stack
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-libro"} className="nav-link">
                    Crear libro
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/libro-list"} className="nav-link">
                    Listar Libros
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
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateLibro {...props} />}
                  />
                  <Route
                    exact
                    path="/create-libro"
                    component={(props) => <CreateLibro {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-libro/:id"
                    component={(props) => <EditLibro {...props} />}
                  />
                  <Route
                    exact
                    path="/libro-list"
                    component={(props) => <LibroList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;