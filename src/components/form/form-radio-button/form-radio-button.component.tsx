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
  <>
    <input type='radio' id={id} name={groupName} />
    <label htmlFor={id}>{label}</label>
  </>
);
