import React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { blue } from '@mui/material/colors';
import { DialogWrapper } from './DialogWrapper';


export default function JobDash() {
  const [isDialog, SetIsDialog] = useState(false)

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
            // border: '2px solid #FFF',  // White border for visibility
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
            
        }}
        >
  
            </Box>
        </Box>
        <DialogWrapper isOpen={isDialog} onClose={() => SetIsDialog(false)} />


    </React.Fragment>
  );

}