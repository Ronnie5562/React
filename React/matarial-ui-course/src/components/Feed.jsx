import React from 'react';
import { Box } from '@mui/material';
import Post from './Post';

const Feed = () => {
  return (
    <Box flex={4} padding={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  )
}

export default Feed;