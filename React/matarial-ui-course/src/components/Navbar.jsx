import React from 'react';
import { AppBar, Box, Stack, Toolbar, Typography, styled } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Navbar = () => {
  return (
    <AppBar position={'sticky'}>
        <StyledToolbar>
            <Typography
                variant={'h6'}
            >
                RONNIE DEV
            </Typography>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar;
