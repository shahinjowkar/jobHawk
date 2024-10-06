import React from 'react';
import { Container } from '@mui/material';
import JobDash from './JobDash';
export default function DashboardWrapper({mode} : any) {
    return (
      <Container
        disableGutters
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.03)',
          height: "100%",
          padding: 3,
          borderRadius: '10px',  // Slightly rounded corners
          boxShadow: '0 3px 8px rgba(0, 0, 0, 0.2)',  // Soft shadow for a floating effect
        }}
      >
        <JobDash />

      </Container>
    );
  }