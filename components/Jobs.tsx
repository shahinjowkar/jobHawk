import { List, ListItem, ListItemText } from "@mui/material";
import { JobCard } from "./JobCard";


export default function Jobs({jobs} : any){
    
    return(
        <List>
            {jobs.map((job: any) => (
            <JobCard job={job} />
            ))}
        </List>
    )
}