import { ChangeEvent } from 'react';
import DishType from './DishType';

interface TextFieldComponentProps {
  dishToUpdate: DishType;
  handleChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  labelValue: string;
}

export default TextFieldComponentProps;
