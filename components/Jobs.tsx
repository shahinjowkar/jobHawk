import { List, ListItem, ListItemText } from "@mui/material";


export default function Jobs({jobs} : any){
    
    return(
        <List>
        {jobs.map((job: any) => (
            <ListItem key={job.id} divider>
            <ListItemText
                primary={job.companyName} // Display job title
            />
            </ListItem>
        ))}
        </List>
    )
}