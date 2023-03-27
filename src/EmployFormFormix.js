import React from 'react';
import { withFormik } from 'formik';

const EmployFormFormix = ({ values }) => (
  <div>
    <h1> Employee Form Formik</h1>
    <form>
      <div>
        <input type="text" name="empName" value={values.empName} />
        <input type="checkbox" name="manager" checked={values.manager} />
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
