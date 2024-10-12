import { FormRow } from '@/components/form/form-row/form-row.component';

type FormCheckboxProps = {
  id: string;
  label: string;
  rowLabel: string;
};

export const FormCheckbox = ({ id, label, rowLabel }: FormCheckboxProps) => (
  <FormRow id={id} label={rowLabel}>
    <>
      <input type='checkbox' id={id} />
      <label htmlFor={id}>{label}</label>
    </>
  </FormRow>
);
