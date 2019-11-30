import React from 'react'

function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = `*`;
  }
  if (!values.lastName) {
    errors.lastName = `*`;
  }
  if (!values.idNum) {
    errors.idNum = `*`;
  }
  if (!values.VIN) {
    errors.VIN = `*`;
  }
  if (!values.StateNum) {
    errors.StateNum = `*`;
  }
  return errors;
}

export default validate