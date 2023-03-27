import React from 'react';
import { withFormik, Field } from 'formik';
import * as Yup from 'yup';

const EmployFormFormixYup = ({ values }) => (
  <div>
    <h1> Employee Form Formik Validation </h1>
    <form>
      <div>
        Employee Name
        <Field type="text" name="empName" value={values.empName} />
        <br />
        Employee
        <Field type="checkbox" name="manager" checked={values.manager} />
        <br />
        <button type="submit">Submit </button>
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

    validationSchema: Yup.object().shape({
      empName: Yup.string()
        .min(5, 'Employee Name Must be 5 charector long')
        .required('Employee field can not be blank'),
    });
  },
})(EmployFormFormixYup);

export default EmployForm;