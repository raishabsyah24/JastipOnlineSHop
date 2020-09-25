import React, { Component } from "react";
import { Carousel, Card, Button} from "react-bootstrap";
import eiger from "../eiger.png";
import luis from "../luis.jpeg";
import gucci from "../guci.png";
import kalibre from "../kalibre.png";
import consina from "../consina.jpeg";
import uniqlo from "../uniqlo.png";

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <div>
            <Carousel style={{ backgroundColor: "black" }}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={gucci}
                  alt="First slide"
                  width={400}
                  height={400}

                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={eiger}
                  alt="Second slide"
                  height={400}
                  width={400}

                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={luis}
                  alt="Third slide"
                  height={400}
                  width={400}

                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={kalibre}
                  alt="Fourth slide"
                  height={400}
                  width={400}

                />

                <Carousel.Caption>
                  <h3>Fourth slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={consina}
                  alt="Fiveth slide"
                  height={400}
                  width={400}

                />

                <Carousel.Caption>
                  <h3>Five slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div>
            <h1 style={{ textAlign: "center" }}>Welcome To Regina Jastip</h1>
          </div>
          <div style={{padding:20,display:"flex"}}>
            <Card style={{ width: '18rem',margin:5}}>
              <Card.Img variant="top" src={gucci} width={40} height={200}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem',margin:5}}>
              <Card.Img variant="top" src={consina} width={40} height={200}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem',margin:5}}>
              <Card.Img variant="top" src={eiger} width={40} height={200}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem',margin:5}}>
              <Card.Img variant="top" src={kalibre} width={40} height={200} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem',margin:5}}>
              <Card.Img variant="top" src={luis} width={40} height={200} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem',margin:5}}>
              <Card.Img variant="top" src={uniqlo} width={40} height={200} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default (Home);