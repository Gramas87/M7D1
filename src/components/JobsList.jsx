import SingleJob from "./SingleJob"
import {FormControl, Form, InputGroup, Button} from "react-bootstrap"
import {useState, useEffect} from "react"
import {Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {addFavoritesAction} from "../redux/actions"
const mapStateToProps = (state) =>({

}
)

const mapDispatchToProps= (dispatch) =>({
    addFavorites: (company) => {
    dispatch(addFavoritesAction(company))
    }
})


class JobsList extends Component{
    // const [query, setQuery] = useState("")
    // const [jobs, SetJobs] = useState([])
    // useEffect(()=>{fetchJobs()},[query])

    state = {
        query: "",
        jobs: [],

    }

    handleChange = (e) => {
        this.setState({ query: e.target.value })
    }
    
    baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='
    
// const fetchJobs = async () => {
// try {
//     let response = await fetch("https://strive-jobs-api.herokuapp.com/jobs?search=" + query + "&limit=10" )
//     if (response.ok) {
//     let responseObj = await response.json();
//     console.log(responseObj)
    
//     SetJobs(responseObj.data)
    
//     }
// } catch (error) {
//     console.log(error)
// }
// }

handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch(this.baseEndpoint + this.state.query + '&limit=20')

    if (!response.ok) {
        alert('Error fetching results')
        return
    }

    const { data } = await response.json()

    this.setState({ jobs: data })

}



  render(){return(
        <div>
     <Link to="/favorites"><Button>Go to favorites</Button></Link>
     <Form onSubmit={this.handleSubmit}>
      <FormControl  type="search" onChange={this.handleChange} value={this.query} />
      </Form>
    
      {this.state.jobs.map(job => {return <SingleJob key={job._id}  title={job.title} company={job.company_name} category={job.category_name} />} )}
      </div>
       ) }

 }

export default connect(mapStateToProps, mapDispatchToProps,) (JobsList)