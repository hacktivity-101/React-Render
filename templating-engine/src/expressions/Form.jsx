import React from 'react';
import { Formik, Field, Form } from 'formik';

const MyForm = ({ fieldNames, method, action }) => {
  const initialValues = fieldNames.reduce((values, fieldName) => {
    values[fieldName] = '';
    return values;
  }, {});

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log('Submitting:', values);
    const dataToSubmit = fieldNames.reduce((data, fieldName) => {
      data[fieldName] = values[fieldName];
      return data;
    }, {});

    try {
      const response = await fetch(action, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSubmit)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }

    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        {fieldNames.map((fieldName) => (
          <div key={fieldName}>
            <label htmlFor={fieldName}>{fieldName}</label>
            <Field id={fieldName} name={fieldName} type="text" />
          </div>
        ))}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default MyForm;