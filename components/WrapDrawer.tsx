import React from 'react';
import { Box, Toolbar, Drawer, List, ListItem, ListItemText } from '@mui/material';

export default function WrapDrawer({width}: any) {


  return (

    <Drawer
        variant="permanent"
        sx={{
            width: width,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: width,
              boxSizing: 'border-box',
              bgcolor: '#1e1e1e',
              color: '#fff', 
              borderRight: '1px solid rgba(255, 255, 255, 0.12)', 
            },
        }}
    >
        <Toolbar /> 
        <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListItem >
                  <ListItemText primary="Position" />
              </ListItem>
              <ListItem >
                  <ListItemText primary="recruiter" />
              </ListItem>
            </List>
        </Box>
    </Drawer>
  );
}
