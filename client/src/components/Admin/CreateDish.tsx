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
} from '@mui/material';
import { useState, ChangeEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { DishType } from '../../utils';

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

const createDishRequest = async (DishInfo: DishType) => {
  const response = await axios.post(`${serverUrl}/api/v1/dishes/create`, DishInfo);
  return response.data;
};

const CreateDish = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [dishToCreate, setDishToCreate] = useState();
  const { mutate } = useMutation(createDishRequest);
  const categories = [
    {
      id: 1,
      value: 'Drinks',
    },
    {
      id: 2,

      value: 'Appetizers',
    },
    {
      id: 3,

      value: 'Main Course',
    },
    {
      id: 4,
      value: 'Desserts',
    },
    {
      id: 5,
      value: 'Salads',
    },
  ];
  const availabilities = [
    {
      status: 'available',
      value: true,
    },
    {
      status: 'notAvailable',
      value: false,
    },
  ];
  const inputs = ['name', 'ingredients', 'image', 'price', 'availability', 'category_id'];

  const handleCreateDish = (event: ChangeEvent<HTMLElement>) => {
    event.preventDefault();
    mutate(dishToCreate);
  };
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setDishToCreate({
      ...dishToCreate,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Contained
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
                        <MenuItem key={category} value={category.value}>
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
                      {categories.map((category, index) => (
                        <MenuItem key={category} value={category.id}>
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
                  onChange={handleChangeInput}
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
