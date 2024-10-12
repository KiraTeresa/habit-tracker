'use client';

import { useState } from 'react';
import { FormRow } from '@/components/form/form-row/form-row.component';

type FormColorPickerProps = {
  id: string;
  name: string;
  value: string;
  rowLabel: string;
};

export const FormColorPicker = ({
  id,
  name,
  value,
  rowLabel,
}: FormColorPickerProps) => {
  const [currentValue, setCurrentValue] = useState(value);

  return (
    <FormRow id={id} label={rowLabel}>
      <input
        type='color'
        id={id}
        name={name}
        value={currentValue}
        onChange={event => setCurrentValue(event.target.value)}
      />
    </FormRow>
  );
};
