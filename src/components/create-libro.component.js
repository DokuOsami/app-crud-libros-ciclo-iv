import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateLibro extends Component {
  constructor(props) {
    super(props);

    this.onChangeLibroName = this.onChangeLibroName.bind(this);
    this.onChangeLibroEmail = this.onChangeLibroEmail.bind(this);
    this.onChangeLibroRollno = this.onChangeLibroRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Name: "",
      email: "",
      rollno: "",
    };
  }

  onChangeLibroName(e) {
    this.setState({ Name: e.target.value });
  }
  onChangeLibroEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeLibroRollno(e) {
    this.setState({ rollno: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const libroObject = {
      name: this.state.Name,
      email: this.state.email,
      rollno: this.state.rollno,
    };

    axios
      .post("http://localhost:4000/libros/create-libro", libroObject)
      .then((res) => console.log(res.data));
    this.setState({ name: "", email: "", rollno: "" });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlName="Name">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              value={this.state.Name}
              onChange={this.onChangeLibroName}
            />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeLibroEmail}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Código</Form.Label>
            <Form.Control
              type="text"
              value={this.state.rollno}
              onChange={this.onChangeLibroRollno}
            />
          </Form.Group>

          <Button
            variant="danger"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Crear Libros
          </Button>
        </Form>
      </div>
    );
  }
}