import classes from './form-input.module.scss';

type FormInputProps = {
  type?: 'text' | 'number';
  id: string;
};

export const FormInput = ({ type = 'text', id }: FormInputProps) => (
  <input type={type} id={id} className={classes.formInput}></input>
);
