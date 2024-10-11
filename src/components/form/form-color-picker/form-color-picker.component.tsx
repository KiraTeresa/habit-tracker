'use client';

import { useState } from 'react';

type FormColorPickerProps = {
  id: string;
  name: string;
  value: string;
};

export const FormColorPicker = ({ id, name, value }: FormColorPickerProps) => {
  const [currentValue, setCurrentValue] = useState(value);

  return (
    <input
      type='color'
      id={id}
      name={name}
      value={currentValue}
      onChange={event => setCurrentValue(event.target.value)}
    />
  );
};
