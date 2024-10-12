import classes from './form-input.module.scss';
import { FormRow } from '@/components/form/form-row/form-row.component';

type FormInputProps = {
  type?: 'text' | 'number';
  id: string;
  rowLabel: string;
};

export const FormInput = ({ type = 'text', id, rowLabel }: FormInputProps) => (
  <FormRow id={id} label={rowLabel}>
    <input type={type} id={id} className={classes.formInput} />
  </FormRow>
);
