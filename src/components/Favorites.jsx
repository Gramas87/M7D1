import {Link,} from "react-router-dom"
import {Component} from "react"
import {connect} from "react-redux"

const mapStateToProps = (state) => ({
    favorite: state.favorites.companies,
})


class Favorites extends Component {
    render(){return(
        <div>
          <ul>
              <li>
              
              </li>
          </ul>
        </div>
   ) }

}

export default connect(mapStateToProps) (Favorites)