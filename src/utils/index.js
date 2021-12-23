import validation from 'validate.js';

/**
 * @description Validation Message
 * @author Agung Wijaya <mdc.co.id>
 * @date 2021-20-04
 * @export
 * @returns
 */
export const validation_message = {
  email: {
    presence: {
      message: '^Please enter an email address',
    },
    email: {
      message: '^Please enter a valid email address',
    },
  },

  password: {
    presence: {
      message: '^Please enter a password',
    },
    length: {
      minimum: 5,
      message: '^Your password must be at least 5 characters',
    },
  },
};

/**
 * @description Validation
 * @author Agung Wijaya <mdc.co.id>
 * @date 2021-20-04
 * @export
 * @returns
 */
export function validate(fieldName, value) {
  var formValues = {};
  formValues[fieldName] = value;

  var formFields = {};
  formFields[fieldName] = validation_message[fieldName];

  const result = validation(formValues, formFields);

  if (result) {
    return result[fieldName][0];
  }

  return null;
}

/**
 * @description Convert Date
 * @author Agung Wijaya <mdc.co.id>
 * @date 2021-20-04
 * @export
 * @param {obj} [obj=object]
 * @returns
 */
export function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
