import React, { Component } from "react";
import { Col, Form, Button} from "react-bootstrap";
import Instagram from "../instagram.png";

class Footer extends Component {
  render() {
    return (
      <>
        <div style={{ backgroundColor: "grey", display: "flex", justifyContent: "center", padding: 10 }}>
          <Col xs={{ order: 'last' }}>
            <div>
              <h4>
                Informasi
              </h4>
              Ut ea minim sint pariatur duis elit magna nulla officia quis anim sunt nisi.
          </div></Col>
          <Col xs={{ order: 'last' }}>
            <div>
              <h4>
                Fan Page
              </h4>
            </div></Col>
          <Col xs={{ order: 'last' }}>
            <div>
              <h4>
                Instagram
              </h4>
              <img style={{ width: "200px" }} src={Instagram} />
            </div></Col>
          <Col xs={{ order: 'last' }}>
            <div>
              <h4>
                Hubungi Kami
              </h4>
              Jl Padjajaran No 39, Babakan Tengah, Kota Bogor

              +6282-312-935-934

              admin@orderjepang.com
            </div></Col>
        </div>
        <div style={{ display: "flex", justifyContent: "center", backgroundColor: "grey", padding:30}}>
          <Col xs={{ order: 'last' }}>
            <div>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>DAPATKAN DISKON ANDA DI SINI</Form.Label>
                  <Form.Control type="email" placeholder="Masukan email anda" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div></Col>
          <Col xs={{ order: 'last' }}>
            <div>
              <h3>Keep Update</h3>
            </div></Col>
        </div>
      </>
    )
  }
}
export default (Footer);