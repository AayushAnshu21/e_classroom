import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Col, Row, Card } from "react-bootstrap";
import "../App.css";

function login(props) {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col className="col-margin" md={{ span: 4, offset: 4 }}>
            <Card body>
              <Card.Title className="text-center text-info">
                <h3>Login</h3>
              </Card.Title>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="font-weight-bold">
                    Email address
                  </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="font-weight-bold">Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <center>
                  <Button variant="primary" type="submit" className="btn-block">
                    Login
                  </Button>
                </center>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default login;
