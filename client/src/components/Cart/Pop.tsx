import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Typography,
} from '@mui/material';

import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

interface ButtonSectionProps {
  notes: string;
  setNotes: Dispatch<SetStateAction<string>>;
}

const ButtonSection = ({ setNotes, notes }: ButtonSectionProps) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem('note', notes);
  }, [open]);

  return (
    <>
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
      <span
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
      </span>
    </>
  );
};

export default ButtonSection;
