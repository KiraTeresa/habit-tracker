type FormRadioButtonProps = {
  id: string;
  label: string;
  groupName: string;
};

export const FormRadioButton = ({
  id,
  label,
  groupName,
}: FormRadioButtonProps) => (
  <div>
    <input type='radio' id={id} name={groupName} />
    <label htmlFor={id}>{label}</label>
  </div>
);
