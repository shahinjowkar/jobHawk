import React, { useState } from 'react';
import { Select, MenuItem, InputBase, Chip, Box } from '@mui/material';
import { bgcolor, styled } from '@mui/system';
import {Status} from "../lib/enum"

const StyledSelect = styled(Select)(({ theme }) => ({
//   backgroundColor: '#4caf50',
  borderRadius: '16px',
  padding: '5px 15px',
  color: '#fff',
  '& .MuiSelect-icon': {
    color: '#fff',
  },
}));

export default function ChipSelect({job} : any) {
  const [value, setValue] = useState<Status>(Status.SELECT);
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ width: 200 }}>
      <StyledSelect
        value={value}
        displayEmpty
        onChange={handleChange}
        input={<InputBase />}
        sx={{
            bgcolor: 'success.main', // Match the chip color
            color: '#fff',
            borderRadius: '16px',
            height: 'auto',
            padding: '0px 8px', // Adjust padding to match the chip
            minWidth: 100,
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none', // Remove the outline border
            },
            '&:hover': {
              bgcolor: 'success.light', // Optionally add a hover effect

            },
            '& .MuiSelect-select': {
              padding: 0, // Ensure the text inside has no extra padding
              display: 'flex',
              alignItems: 'center',
            },
            '& .MuiSvgIcon-root': {
              display: 'none', // This removes the dropdown arrow
            },
          }}
        
      >
        <MenuItem value={Status.SELECT}>
          <Chip label="select status" variant="outlined"  sx={{color:'white' , '&:hover':{bgcolor: '#F5F5F5' , color: 'black', cursor: "pointer"}}}/>
        </MenuItem>
        <MenuItem value={Status.OA}>
          <Chip label="Online Assesment"  color="success" variant="outlined" sx={{'&:hover':{bgcolor: "success.light", color:"black"}}} />
        </MenuItem>
        <MenuItem value={Status.INTERVIEW}>
          <Chip label="Interview"  color="success" variant="outlined" sx={{'&:hover':{bgcolor: "success.light", color:"black"}}} />
        </MenuItem>
        <MenuItem value={Status.PENDING}>
          <Chip label="Pending" color="warning" variant="outlined" sx={{'&:hover':{bgcolor: "warning.light", color:"black"}}} />
        </MenuItem>
        <MenuItem value={Status.PENDING2}>
          <Chip label="Pending(+1 month)" color="error" variant="outlined" sx={{'&:hover':{bgcolor: "error.light", color:"black"}}} />
        </MenuItem>
        <MenuItem value={Status.REJECTED}>
            <Chip label="Rejected" color="error" variant="outlined" sx={{'&:hover':{bgcolor: "error.light", color:"black"}}} />
        </MenuItem>
      </StyledSelect>
    </Box>
  );
}