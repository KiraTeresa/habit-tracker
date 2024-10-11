'use client';

import { ReactNode } from 'react';
import classes from './form-row.module.scss';

type FormRowProps = {
  id: string;
  label: string;
  children: ReactNode;
};

export const FormRow = ({ id, label, children }: FormRowProps) => {
  return (
    <div className={classes.formRow}>
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
};
