import { TextField } from '@mui/material';
import { TextFieldComponentProps } from '../../utils';

const TextFieldComponent = ({
  dishToUpdate,
  handleChangeInput,
  labelValue,
}: TextFieldComponentProps) => {
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
