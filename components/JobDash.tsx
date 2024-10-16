import React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, List, ListItem, ListItemText, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { blue } from '@mui/material/colors';
import { DialogWrapper } from './DialogWrapper';
import { Query, QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';

import Jobs from './Jobs';

async function fetchJobs() {

    const res = await fetch('/api/jobs');
    if (!res.ok) {
      throw new Error('Failed to fetch jobs');
    }

    return res.json();
}



export default function JobDash() {
  const [isDialog, SetIsDialog] = useState(false)
  const queryClient = useQueryClient()
  const { data, error, isLoading } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
        const fetchedJobs = await fetchJobs();
        fetchedJobs.forEach((job: any) => {
          queryClient.setQueryData(['job', job._id], job);  // Cache each job individually
        });
        return fetchedJobs;
    },
  });

  if (isLoading) return <p>Loading jobs...</p>;
  if (error) return <p>Error loading jobs: {error.message}</p>;
  console.log(data)  
  return (
    <React.Fragment>
        <Box
            sx={{
            width: "100%",
            height: "100%",
            display: "flex", 
            flexDirection: 'column',
            }}
        >

        <Box
        sx={{
            height: "60px", 
            display: "flex",
            justifyContent:"end",
            alignItems:"center"
        }}
        >
            <Fab size="small"  aria-label="add" 
                sx={{
                    bgcolor: blue[200],
                    '&:hover': {
                        bgcolor: blue[400],  
                    },
                }}
                onClick={() => {
                    SetIsDialog(true);
                    }}
            >
                <AddIcon />
            </Fab>
        </Box>

        <Box
        sx={{
            flexGrow: 1,  
            overflowY: 'auto',
            height: '600px',
            
        }}
        >

        <Jobs jobs={data} />
        </Box>
        </Box>
        <DialogWrapper isOpen={isDialog} onClose={() => SetIsDialog(false)} />


    </React.Fragment>
  );

}