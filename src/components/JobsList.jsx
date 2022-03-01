import SingleJob from "./SingleJob"
import {FormControl, InputGroup} from "react-bootstrap"
import {useState, useEffect} from "react"

const JobsList = () => {
    const [query, setQuery] = useState("")
    const [jobs, SetJobs] = useState([])
    useEffect(()=>{fetchJobs()},[query])


    
const fetchJobs = async () => {
try {
    let response = await fetch("https://strive-jobs-api.herokuapp.com/jobs?search=" + query + "&limit=10" )
    if (response.ok) {
    let responseObj = await response.json();
    console.log(responseObj)
    
    SetJobs(responseObj.data)
    
    }
} catch (error) {
    console.log(error)
}
}


return(
<>
    <InputGroup>
    <InputGroup.Text>search</InputGroup.Text>
    <FormControl as="textarea" aria-label="search" onChange={e => setQuery(e.currentTarget.value)} value={query} />
  </InputGroup>
    
    {jobs.map(job => {return <SingleJob key={job._id} data={job} title={job.title} company={job.company_name} category={job.category_name} />} )}
    </>
     )




}

export default JobsList