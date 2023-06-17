import { FC } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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
          value={role}
          label="role"
          onChange={handleChange}
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="cook">Cook</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
