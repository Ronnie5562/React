import React from 'react';
import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';

const Rightbar = () => {
  return (
    <Box 
      flex={2} 
      padding={2}
      sx={{display: { xs: "none", sm: "block" }}}
    >
      <Box sx={{ position: "fixed", width: 300, overflowY: 'auto' }}>
        <Typography variant='h6' fontWeight={100}>
          Online Friends 
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2023/03/13/11/18/ai-generated-7849606_1280.jpg" />
          <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2023/03/13/11/17/ai-generated-7849593_1280.jpg" />
          <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2023/07/30/04/55/man-8158088_1280.jpg" />
          <Avatar alt="Agnes Walker" src="https://cdn.pixabay.com/photo/2023/06/12/18/48/ai-generated-8059114_1280.jpg" />
          <Avatar alt="Trevor Henderson" src="https://cdn.pixabay.com/photo/2023/03/13/11/18/ai-generated-7849608_1280.jpg" />
          <Avatar alt="Trevor Challobah" src="https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Auba Sheng" src="https://images.pexels.com/photos/1288171/pexels-photo-1288171.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Leo Henderson" src="https://images.pexels.com/photos/3474629/pexels-photo-3474629.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/6.jpg" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar;
