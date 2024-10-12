import { FormInput } from '@/components/form/form-input/form-input.component';
import { FormGroup } from '@/components/form/form-group/form-group.component';
import { FormRadioButton } from '@/components/form/form-radio-button/form-radio-button.component';
import { FormDropdown } from '@/components/form/form-dropdown/form-dropdown.component';
import { DAYS } from '@/constants/days-option.const';
import { REMINDER_TIMES } from '@/constants/reminder-times-option.const';
import { FormCheckbox } from '@/components/form/form-checkbox/form-checkbox.component';
import { FormColorPicker } from '@/components/form/form-color-picker/form-color-picker.component';
import classes from './create-form.module.scss';

export const CreateForm = () => {
  return (
    <form className={classes.form}>
      <h3>New Habit</h3>
      <FormInput id='title' rowLabel='Title' />
      <FormGroup id='goal' label='Goal'>
        <>
          <FormInput id='goal-week' rowLabel='times a week' type='number' />
          <FormInput id='goal-day' rowLabel='times a day' type='number' />
        </>
      </FormGroup>
      <FormGroup id='predefinedDays' label='Predefine days?'>
        <>
          <FormRadioButton
            id='predefined-no'
            label='no'
            groupName='predefinedDays'
          />
          <FormRadioButton
            id='predefined-yes'
            label='yes'
            groupName='predefinedDays'
          />
        </>
      </FormGroup>
      <FormGroup id='checkedPredefineDays' label='which days shall it be?'>
        {DAYS.map(day => (
          <FormCheckbox key={day.value} id={day.value} label={day.label} />
        ))}
      </FormGroup>
      <FormGroup id='reminder' label='Remind me?'>
        <>
          <FormRadioButton id='reminder-no' label='no' groupName='reminder' />
          <FormRadioButton id='reminder-yes' label='yes' groupName='reminder' />
          <FormDropdown
            id='remind-time'
            options={REMINDER_TIMES}
            rowLabel='time'
          />
          <FormDropdown id='remind-days' options={DAYS} rowLabel='on' />
          <button type='button'>+ add reminder</button>
        </>
      </FormGroup>
      <h3>Variants (optional)</h3>
      <FormInput id='variant' rowLabel='Title' />
      <button type='button'>add</button>
      <FormCheckbox id='not-habit' label='this is a not-habit' />
      <FormColorPicker
        id='color-picker'
        name='color-picker'
        value='#ff6500'
        rowLabel='Pick a color'
      />
      <button type='submit'>create habit</button>
    </form>
  );
};
