import SingleJob from "./SingleJob"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import JobsList from "./JobsList"

const CompanyPage = ({ company, title}) => {
     const [companyjobs, SetCompanyJobs] = useState([])
    const params = useParams()
    
    useEffect(()=>{filterCompany()},[params])
    const filterCompany = async () => {
        try {
            let response = await fetch("https://strive-jobs-api.herokuapp.com/jobs?company=" + params.companyID);
            if (response.ok){
                let compdata = await response.json();
                console.log(compdata)
                // SetCompanyJobs(compdata.data)

            }else{
                console.log("error fetching company")
            }
            
            
        } catch (error) {
            console.log(error);
            
        }

    }
    
    
    return(
        <>
        <SingleJob company={company} title={title}   />
        </>
    )
}

export default CompanyPage