import React, { useState } from 'react';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Rightbar from './components/Rightbar';
import Add from './components/Add';

const App = () => {
  const [mode, setMode] = useState(false)

  const Theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light"
    }
  })
  return (
    <ThemeProvider theme={Theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Sidebar setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App;
