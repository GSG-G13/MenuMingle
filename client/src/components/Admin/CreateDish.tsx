import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { useState, FormEvent, ChangeEventHandler, FC } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { DishType } from '../../utils';
import { useCategories, useAvailabilities, useInputs } from '../../hocks';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

const createDishRequest = async (DishInfo: DishType) => {
  const response = await axios.post(`${serverUrl}/api/v1/dishes/create`, DishInfo, {
    withCredentials: true,
  });
  return response.data;
};
interface CreateDishProps {
  refetch: () => void;
}

const CreateDish: FC<CreateDishProps> = ({ refetch }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [dishToCreate, setDishToCreate] = useState<DishType>({
    name: 'test',
    price: 22,
    image: 'test',
    availability: true,
    ingredients: 'string',
    category_id: 2,
  });

  const { mutate } = useMutation(createDishRequest);

  const categories = useCategories();
  const availabilities = useAvailabilities();
  const inputs = useInputs();

  const handleCreateDish = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(dishToCreate);
    refetch();
    setOpen(false);
  };
  const handleChangeInput = (
    event:
      | SelectChangeEvent<string>
      | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if ('target' in event) {
      setDishToCreate({
        ...dishToCreate,
        [event.target.name]: event.target.value,
      });
    }
  };
  const handleInputChangeTextFiled: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = event => {
    if ('target' in event) {
      setDishToCreate({
        ...dishToCreate,
        [event.target.name]: event.target.value,
      });
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        style={{
          color: '#9EBAD7',
          textTransform: 'none',
          fontSize: '18px',
          position: 'absolute',
          right: '3%',
          top: '18%',
        }}
        onClick={() => setOpen(true)}
      >
        NewDish +
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(!open)}
        sx={{
          '& > .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <DialogContent>
          <form onSubmit={handleCreateDish}>
            {inputs.map(input => {
              if (input === 'availability') {
                return (
                  <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                      categoryId
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      name="availability"
                      id="demo-multiple-name"
                      onChange={handleChangeInput}
                      input={<OutlinedInput label="Name" />}
                    >
                      {availabilities.map(category => (
                        <MenuItem value={category.value.toString()}>
                          {category.status}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                );
              }
              if (input === 'category_id') {
                return (
                  <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                      categoryId
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      name="category_id"
                      id="demo-multiple-name"
                      onChange={handleChangeInput}
                      input={<OutlinedInput label="Name" />}
                    >
                      {categories.map(category => (
                        <MenuItem key={category.id} value={category.id}>
                          {category.value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                );
              }
              return (
                <TextField
                  label={input}
                  name={input}
                  onChange={handleInputChangeTextFiled}
                  fullWidth
                  margin="normal"
                  sx={{ mt: 2, borderRadius: '20%' }}
                />
              );
            })}
            <Button
              type="submit"
              sx={{ border: '1px solid black', textTransform: 'none', marginTop: '20px' }}
            >
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateDish;
