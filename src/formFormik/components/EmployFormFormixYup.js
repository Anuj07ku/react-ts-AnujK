import React from 'react';
import { withFormik, Field } from 'formik';
import * as Yup from 'yup';

const EmployFormFormixYup = ({ values, errors, touched, isSubmiting }) => (
  <div>
    <h1> Employee Form Formik Validation </h1>
    <form>
      <div>
        Employee Name
        <Field type="text" name="empName" />
        <br />
        {touched.empName && errors.empName && 
          <spam style={{ color: 'red' }}>{errors.empName}</spam>
        }
        <br />
        Employee
        <Field type="checkbox" name="manager" checked={values.manager} />
        <br />
        {errors.manager && 
          <spam style={{ color: 'red' }}>{errors.manager}</spam>
        }
        <br />
        <button type="submit" disabled={isSubmiting}>
          Submit{' '}
        </button>
      </div>
    </form>
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
  handleSubmit(values, { resetForm, setSubmitting, setErrors }) {
    console.log(values);
    setTimeout(() => {
      if (values.empName === 'Anuj') {
        setErrors({ empName: 'Anuj can not be set as Employee Name' });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  },
})(EmployFormFormixYup);

export default EmployForm;
