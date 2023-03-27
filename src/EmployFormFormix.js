import React from 'react';
import { withFormik, Field } from 'formik';

const EmployFormFormix = ({ values }) => (
  <div>
    <h1> Employee Form Formik</h1>
    <form>
      <div>
        <Field type="text" name="empName" value={values.empName} />
        <Field type="checkbox" name="manager" checked={values.manager} />
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
})(EmployFormFormix);

export default EmployForm;
