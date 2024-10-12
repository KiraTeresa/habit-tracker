import { FormRow } from '@/components/form/form-row/form-row.component';
import { ReactNode } from 'react';
import classes from './form-group.module.scss';

type FormRadioGroupProps = {
  id: string;
  label: string;
  children: ReactNode;
};

export const FormGroup = ({ id, label, children }: FormRadioGroupProps) => (
  <FormRow id={id} label={label}>
    <fieldset className={classes.groupFieldset}>{children}</fieldset>
  </FormRow>
);
