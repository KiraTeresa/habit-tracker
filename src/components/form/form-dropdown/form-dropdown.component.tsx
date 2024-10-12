import { FormRow } from '@/components/form/form-row/form-row.component';

type FormDropdownProps = {
  id: string;
  options: OptionsType[];
  rowLabel: string;
};

type OptionsType = {
  value: string;
  label: string;
};

export const FormDropdown = ({ id, options, rowLabel }: FormDropdownProps) => (
  <FormRow id={id} label={rowLabel}>
    <select id={id}>
      {options.map(option => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </FormRow>
);
