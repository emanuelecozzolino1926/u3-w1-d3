import { Col, Card, Button } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Col xs={1} md={2} lg={3} xxl={4} key={props.book.asin} className="mt-2">
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={props.book.img}
          alt={`Immaggine di ${props.book.title}`}
          className="h-100 object-fit-cover"
        />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>Categoria: {props.book.category}</Card.Text>
          <Button variant="primary">
            Compra &euro;{`${props.book.price}`}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
