type FormDropdownProps = {
  id: string;
  options: OptionsType[];
};

type OptionsType = {
  value: string;
  label: string;
};

export const FormDropdown = ({ id, options }: FormDropdownProps) => (
  <select id={id}>
    {options.map(option => (
      <option value={option.value} key={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);
