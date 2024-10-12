'use client';

import { useState } from 'react';
import { FormRow } from '@/components/form/form-row/form-row.component';

type FormDatepickerProps = {
  id: string;
  name: string;
  value: string;
  rowLabel: string;
};

export const FormDatepicker = ({
  id,
  name,
  value,
  rowLabel,
}: FormDatepickerProps) => {
  const [currentValue, setCurrentValue] = useState(value);
  const today = new Date();
  const max = today.toISOString().split('T')[0];

  return (
    <FormRow id={id} label={rowLabel}>
      <input
        type='date'
        id={id}
        name={name}
        value={currentValue}
        min='2024-10-01'
        max={max}
        onChange={event => setCurrentValue(event.target.value)}
      />
    </FormRow>
  );
};
