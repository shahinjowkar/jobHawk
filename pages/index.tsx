import Image from "next/image";
import Link from "next/link";
import * as React from 'react';
import { Inter } from "next/font/google";
import client from "@/lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { Box,Toolbar, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Divider } from '@mui/material';
import WrapDrawer from "@/components/WrapDrawer";
import  DashboardWrapper  from "@/components/DashboardWrapper";
import { useState } from "react";
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
  const [dashMode, setDashMode] = useState("job")

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false}  disableGutters >
        <Box sx={{     
            display: 'flex', 
            flexDirection: 'row', 
            bgcolor: 'rgb(15, 18, 20);', 
            height: '100vh',
          }} 
        >

            <WrapDrawer width={350}/>
            <Box sx={{ 
              flexGrow: 1, 
              minWidth: '300px', 
              padding: 3, 
              color: '#fff', 
            }}>
              <DashboardWrapper mode = {dashMode} />

            </Box>

        
        </Box>
      </Container>
    </React.Fragment>

  
  );
}
