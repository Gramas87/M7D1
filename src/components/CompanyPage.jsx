import SingleJob from "./SingleJob"
import {useParams} from "react"

const CompanyPage = ({ company, title}) => {

    const params = useParams(company)
    
    
    
    return(
        <>
        <SingleJob company={company} title={title}   />
        </>
    )
}

export default CompanyPage