import { Dispatch, SetStateAction } from 'react';

interface ButtonSectionProps {
  notes: string;
  setNotes: Dispatch<SetStateAction<string>>;
}
export default ButtonSectionProps;
