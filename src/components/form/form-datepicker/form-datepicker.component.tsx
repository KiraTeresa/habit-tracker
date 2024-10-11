'use client';

import { useState } from 'react';

type FormDatepickerProps = {
  id: string;
  name: string;
  value: string;
};

export const FormDatepicker = ({ id, name, value }: FormDatepickerProps) => {
  const [currentValue, setCurrentValue] = useState(value);
  const today = new Date();
  const max = today.toISOString().split('T')[0];

  return (
    <input
      type='date'
      id={id}
      name={name}
      value={currentValue}
      min='2024-10-01'
      max={max}
      onChange={event => setCurrentValue(event.target.value)}
    />
  );
};
