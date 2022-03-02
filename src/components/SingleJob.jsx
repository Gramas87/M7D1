import { Card, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {addFavoritesAction} from "../redux/actions"
// const mapStateToProps = () =>({

// }
// )

// const mapDispatchToProps= (dispatch) =>({
//     addFavorites: (companyToAdd) => {
//     dispatch(addFavoritesAction(companyToAdd))
//     }
// })

const SingleJob = ({ addFavorites, title, company, category }) => {
    
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Link className="nav-link" to={`/${company}`}> <Card.Text>{company}</Card.Text> </Link>
          <Button >add company to favorites companies</Button>

          <Card.Text>{category}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default  SingleJob;

