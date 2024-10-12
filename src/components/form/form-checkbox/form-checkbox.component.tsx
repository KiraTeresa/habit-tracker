type FormCheckboxProps = {
  id: string;
  label: string;
};

export const FormCheckbox = ({ id, label }: FormCheckboxProps) => (
  <div>
    <input type='checkbox' id={id} />
    <label htmlFor={id}>{label}</label>
  </div>
);
