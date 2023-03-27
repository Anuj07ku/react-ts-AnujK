import React from 'react';
import { withFormik } from 'formik';

const EmployeeFormFormix = ({ Values }) => (
  <div>
    <h1>Employee Form </h1>
    <form>
      Location
      <input type="checkbox" checked={Values.manager} name="manager" />
      <br />
      Name
      <input type="text" name="empName" value={Values.empName} />
      <br />
      <button type="Button">Submit</button>
    </form>
  </div>
);

const EmployeeForm = withFormik({
  mapPropsToValues({ empName, manager }) {
    return {
      empName: empName || '',
      manager: empName || false,
    };
  },
})(EmployeeFormFormix);

export default EmployeeForm;
