/* eslint-disable jsx-a11y/alt-text */
import * as core from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, FC } from 'react';
import { ButtonSectionProps } from '../../utils';

const { TextField, Button } = core;
const ButtonSection: FC<ButtonSectionProps> = ({ notes, setNotes }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <core.CssBaseline />
      <Dialog open={open} onClose={() => setOpen(!open)}>
        <DialogTitle>Your Notes</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            sx={{
              width: '18rem',
            }}
            onChange={e => {
              setNotes(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button>Save</Button>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          onClick={() => setOpen(true)}
          sx={{
            color: '#595454',
            backgroundColor: '#fff',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          Add Note
        </Button>
      </div>
    </>
  );
};

export default ButtonSection;
