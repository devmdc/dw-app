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

  name: {
    presence: {
      message: '^Please enter your name',
    },
    length: {
      minimum: 1,
      message: '^Please enter your name',
    },
  },

  position: {
    presence: {
      message: '^Please enter your position',
    },
    length: {
      minimum: 1,
      message: '^Please enter your position',
    },
  },

  city: {
    presence: {
      message: '^Please enter city',
    },
    length: {
      minimum: 1,
      message: '^Please enter city',
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

  general: {
    presence: {
      message: '^Please enter field',
    },
    length: {
      minimum: 1,
      message: '^Please enter field',
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

/**
 * @description Create random String or Name
 * @author Agung Wijaya <mdc.co.id>
 * @date 2021-11-01
 * @export
 * @param {int} [length=Int]
 * @returns
 */
export function makeRandomName(length) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

import * as RootNav from './RootNavigation';

export {RootNav};
