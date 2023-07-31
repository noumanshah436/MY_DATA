import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
  ListItemAvatar,
  Avatar
} from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'

export const MuiList = () => {
  return (
    <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
      <List>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='List item 1' />
          </ListItemButton>
        </ListItem>

        <Divider />


        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <InboxIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='List item 2' secondary='Secondary text' />
        </ListItem>

        <ListItem>
          <ListItemText primary='List item 3' />
        </ListItem>

        <Divider />

        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>

      </List>

    </Box>
  )
}
