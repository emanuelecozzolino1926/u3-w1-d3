import { Container, Row, Col, Card, Button } from "react-bootstrap";
import FantasyBook from "../data/fantasy.json";

const SingleBook = () => {
  return (
    <Container>
      <Row className="justify-content-center" xs={1} md={2} xl={3} xxl={4}>
        <Col>
          <Card style={{ maxwidth: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBook;
