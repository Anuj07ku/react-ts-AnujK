import React from 'react';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';

const EmployFormFormixYup = ({ values, errors, touched, isSubmiting }) => (
  <div>
    <h1> Employee Form Formik Validation </h1>
    <Form>
      <div>
        Employee Name
        <Field type="text" name="empName" />
        <br />
        {errors.empName && (
          <span style={{ color: 'red' }}>{errors.empName}</span>
        )}
        <br />
        Employee
        <Field type="checkbox" name="manager" checked={values.manager} />
        <br />
        {errors.manager && (
          <span style={{ color: 'red' }}>{errors.manager}</span>
        )}
        <br />
        <button type="submit" disabled={isSubmiting}>
          Submit
        </button>
      </div>
    </Form>
  </div>
);

const EmployForm = withFormik({
  mapPropsToValues({ empName, manager }) {
    return {
      empName: empName || '',
      manager: manager || false,
    };
  },

  validationSchema: Yup.object().shape({
    empName: Yup.string()
      .min(5, 'Employee Name Must be 5 charector long')
      .required('Employee field can not be blank'),
  }),
  /*
  handleSubmit(values) {
    alert('CHECK');
    console.log(values);
  },
*/

  handleSubmit(values, { resetForm, setSubmitting, setErrors }) {
    console.log(values);
    setTimeout(() => {
      if (values.empName === 'Sunil') {
        setErrors({ empName: 'Sunil can not be set as Employee Name' });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  },
})(EmployFormFormixYup);

export default EmployForm;
