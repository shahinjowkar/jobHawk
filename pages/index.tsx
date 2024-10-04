import Image from "next/image";
import Link from "next/link";
import * as React from 'react';
import { Inter } from "next/font/google";
import client from "@/lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { Box, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Divider } from '@mui/material';

type ConnectionStatus = {
  isConnected: boolean;
};

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await client.connect(); // `await client.connect()` will use the default database passed in the MONGODB_URI
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};
const drawerWidth = 340;


export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false}   disableGutters >
        <Box sx={{ bgcolor: 'rgb(15, 18, 20);;', height: '100vh',}} >
        
        <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#1e1e1e',
            color: '#fff', 
            borderRight: '1px solid rgba(255, 255, 255, 0.12)', 
          },
        }}
      >
      </Drawer>
        </Box>
      </Container>
    </React.Fragment>

  
  );
}
