import { TextField } from '@mui/material';

const TextFieldComponent = ({ dishToUpdate, handleChangeInput, labelValue }) => {
  return (
    <TextField
      label={labelValue}
      value={dishToUpdate[labelValue]}
      name={labelValue}
      onChange={handleChangeInput}
      fullWidth
      margin="normal"
      sx={{ mt: 2, borderRadius: '20%' }}
    />
  );
};

export default TextFieldComponent;
