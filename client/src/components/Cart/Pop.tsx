/* eslint-disable jsx-a11y/alt-text */
import * as core from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, FC } from 'react';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { ButtonSectionProps } from '../../utils';

const { TextField, Button, Typography } = core;
const ButtonSection: FC<ButtonSectionProps> = ({ notes, setNotes }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <core.CssBaseline />
      <Dialog open={open} onClose={() => setOpen(!open)}>
        <DialogTitle
          sx={{
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '44px',
          }}
        >
          <Typography sx={{ color: 'blueviolet', margin: 'auto' }}>
            {' '}
            Any preferences for your order?
          </Typography>
          <Button
            onClick={() => setOpen(false)}
            sx={{
              color: '#FF7A00',
              position: 'absolute',
              top: 0,
              right: 0,
            }}
          >
            x
          </Button>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            fullWidth
            placeholder="Write Note here ..."
            sx={{
              borderRadius: '20px',
              color: '#000',

              '& .MuiOutlinedInput-root': {
                padding: '1rem 14px',
                height: '106px',
                '&:placeholder': {
                  color: 'red',
                },
                '& fieldset': {
                  borderColor: '#a2a2a2',
                },
                '&:hover fieldset': {
                  borderColor: '#a2a2a2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#a2a2a2',
                },
              },
            }}
            onChange={e => {
              setNotes(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: '#000' }} onClick={() => setOpen(false)}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <InsertCommentIcon
          style={{
            color: '#000',
            height: '100px',
            position: 'fixed',
            bottom: '50px',
            left: '10px',
          }}
          onClick={() => setOpen(true)}
        />
      </div>
    </>
  );
};

export default ButtonSection;
