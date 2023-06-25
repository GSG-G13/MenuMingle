import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DishForm from './form';

const fetchDish = async id => {
  const response = await axios.get(`http://localhost:8080/api/v1/dishes/${id}`);
  return response.data;
};

const updateDish = async (id, updatedDish) => {
  const response = await axios.put(
    `http://localhost:8080/api/v1/dishes/update/${id}`,
    updatedDish,
  );
  return response.data;
};

const EditDish = ({ id }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    data: dish,
    error,
  } = useQuery({
    queryKey: ['Dishes', id],
    queryFn: () => fetchDish(id),
  });

  const updateDishMutation = useMutation(updatedDish => updateDish(id, updatedDish), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Dishes'] });
      navigate('/admin');
    },
  });

  const handleSubmit = updatedDish => {
    updateDishMutation.mutate(updatedDish);
  };

  if (isLoading) return 'loading...';
  if (isError) return `Error: ${error.message}`;

  return (
    <div>
      <DishForm onSubmit={handleSubmit} initialValue={dish} />
    </div>
  );
};

export default EditDish;
