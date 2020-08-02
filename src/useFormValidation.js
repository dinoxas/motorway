import { useState } from 'react';

export function useFormValidation({ validations, initialValues = {} }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function validateInput(name, value) {
    const rules = validations[name];
    // validation rules
    if (rules) {
      if (rules.required) {
        if (!value.trim()) {
          return typeof rules.required === 'string'
            ? rules.required
            : 'This field is required';
        }
      }

      if (rules.pattern) {
        if (!new RegExp(rules.pattern.value).exec(value)) {
          return rules.pattern.message || 'Invalid input';
        }
      }

      if (rules.validate && typeof rules.validate === 'function') {
        const error = rules.validate(value);
        if (error) {
          return error;
        }
      }
    }

    // no errors
    return '';
  }

  function setInputByName(name) {
    if (!name) {
      throw new Error('Input name param is required');
    }

    if (name && typeof name !== 'string') {
      throw new Error('Input name should be a string');
    }

    return {
      value: values[name] || '',
      onChange: (e) => {
        const { value } = e.target;

        setValues((state) => ({
          ...state,
          [name]: value
        }));

        setErrors((state) => ({
          ...state,
          [name]: validateInput(name, value)
        }));
      }
    };
  }
  // customs validation
  function isValid() {
    const hasErrors = Object.keys(validations).some((name) =>
      Boolean(validateInput(name, values[name]))
    );

    return !hasErrors;
  }

  return {
    values,
    errors,
    validateInput,
    setInputByName,
    isValid
  };
}
