import { FC } from 'react';

import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from '@mui/material';

const BasicSelect: FC<{ role: string; setRole: any }> = ({ role, setRole }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role || ''}
          label="role"
          onChange={handleChange}
        >
          <MenuItem value="1">Admin</MenuItem>
          <MenuItem value="2">Cooker</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
