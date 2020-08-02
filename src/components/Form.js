import React from 'react';
import { useFormValidation } from '../useFormValidation';
import {
  FormWrapper,
  StyledForm,
  Field,
  TextInput,
  Label,
  ErrorMsg,
  FlexWrapper,
  RangeInput,
  RangeOutput,
  Button,
  ColorOutput
} from '../styles/FormStyles';
import { SubHeading } from '../styles/AppStyles';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with: ', values);
  };

  const { values, errors, setInputByName, isValid } = useFormValidation({
    validations: {
      name: {
        pattern: {
          value: /^([a-zA-Z'-.]+ [a-zA-Z'-.]+)$/,
          message: 'Please enter your first and last name'
        }
      },
      email: {
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Please enter a valid email address'
        }
      },
      dob: {
        validate: (dob) => {
          if (dob === undefined) {
            return 'Please select a valid date';
          } else if (dob === '') {
            return 'Please select a date';
          } else {
            const today = parseInt(
              new Date().toISOString().slice(0, 10).replace(/-/g, '')
            );
            const sDate = dob.split('-').join('');
            if (sDate > today) {
              return 'Please select a past date';
            }
          }
        }
      },
      color: {
        pattern: {
          value: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
          message: 'Please enter a valid hexadecimal color'
        }
      },
      salary: {
        validate: (val) => {
          if (val === '0') {
            return 'Please tell us your salary';
          }
        }
      }
    },
    initialValues: {
      salary: '0'
    }
  });

  return (
    <FormWrapper>
      <SubHeading>Your details</SubHeading>
      <StyledForm onSubmit={handleSubmit}>
        <Field>
          {errors.name && <ErrorMsg role='alert'>{errors.name}</ErrorMsg>}
          <TextInput
            type='text'
            name='name'
            id='name'
            aria-required='true'
            aria-invalid={errors.name ? 'true' : 'false'}
            placeholder='John Smith'
            {...setInputByName('name')}
          />
          <Label htmlFor='name'>Name</Label>
        </Field>

        <Field>
          {errors.email && <ErrorMsg role='alert'>{errors.email}</ErrorMsg>}
          <TextInput
            type='text'
            name='email'
            id='email'
            aria-required='true'
            aria-invalid={errors.email ? 'true' : 'false'}
            placeholder='example@example.com'
            inputmode='email'
            {...setInputByName('email')}
          />
          <Label htmlFor='email'>Email</Label>
        </Field>

        <Field>
          {errors.dob && <ErrorMsg role='alert'>{errors.dob}</ErrorMsg>}
          <TextInput
            type='date'
            name='dob'
            id='dob'
            aria-required='true'
            aria-invalid={errors.dob ? 'true' : 'false'}
            {...setInputByName('dob')}
          />
          <Label htmlFor='dob'>Date of birth</Label>
        </Field>
        <Field>
          {errors.color && <ErrorMsg role='alert'>{errors.color}</ErrorMsg>}

          <TextInput
            type='text'
            name='color'
            id='color'
            aria-required='true'
            aria-invalid={errors.color ? 'true' : 'false'}
            maxLength='7'
            placeholder='#BADA55'
            inputmode='tel'
            {...setInputByName('color')}
          />

          <Label htmlFor='color'>Favourite colour</Label>

          {!errors.color && values.color && (
            <ColorOutput color={values.color} />
          )}
        </Field>

        <Field>
          {errors.salary && <ErrorMsg role='alert'>{errors.salary}</ErrorMsg>}

          <FlexWrapper>
            <RangeInput
              type='range'
              id='salary'
              name='salary'
              aria-required='true'
              aria-invalid={errors.salary ? 'true' : 'false'}
              min='0'
              max='100000'
              step='1000'
              {...setInputByName('salary')}
            />

            <RangeOutput>Salary: £{values.salary}</RangeOutput>
          </FlexWrapper>
        </Field>

        <Button type='submit' disabled={!isValid()}>
          Submit
        </Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default Form;
