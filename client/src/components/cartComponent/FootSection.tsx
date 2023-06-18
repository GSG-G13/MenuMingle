/* eslint-disable jsx-a11y/alt-text */
import * as core from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Add } from '@mui/icons-material';
import myPhoto from '../../assets/NDPBK-d-03M.png';

const { Paper, Typography, List, ListItem, ListItemText } = core;

const FootSection = () => {
  return (
    <Paper sx={{ margin: '20px' }}>
      <Typography variant="h6" component="h2">
        Foods
      </Typography>
      <List>
        <ListItem>
          <img src={myPhoto} alt="rs" />
          <div>
            <span>Burgur Ala Ala</span>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Add />
            </IconButton>
          </div>
          <ListItemText primary="Item 1" secondary="Price: $10" />
        </ListItem>
      </List>
    </Paper>
  );
};

export default FootSection;
