import React from 'react';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Box, Stack } from '@mui/material';
import Rightbar from './components/Rightbar';
import Add from './components/Add';

const App = ({ setMode }) => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar setMode={setMode} />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  )
}

export default App;
