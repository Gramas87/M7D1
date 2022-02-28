import { Card } from "react-bootstrap";
import {Link} from "react-router-dom"


const SingleJob = ({ title, company, category }) => {
    
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Link className="nav-link" to={`/${company}`}> <Card.Text>{company}</Card.Text> </Link>
          <Card.Text>{category}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default SingleJob;
