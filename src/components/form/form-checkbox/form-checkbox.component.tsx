type FormCheckboxProps = {
  id: string;
  label: string;
};

export const FormCheckbox = ({ id, label }: FormCheckboxProps) => (
  <>
    <input type='checkbox' id={id} />
    <label htmlFor={id}>{label}</label>
  </>
);
