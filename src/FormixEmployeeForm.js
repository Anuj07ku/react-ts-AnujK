import React from 'react';
import { withFormik } from 'formik';

const EmployeeForm = ({ Values }) => (
  <div>
    <h1>Employee Form </h1>
    <form>
      Name
      <input type="text" name="empName" onChange={Values.empName} />
      <br />
      Location
      <input
        name="manager"
        type="checkbox"
        checked={Values.manager}
        name="manager"
      />
      <br />
      <button type="Button">Submit</button>
    </form>
  </div>
);

const FormixEmployeeForm = withFormik({
  mapPropsToValues({ empName, manager }) {
    return {
      manager: manager || '',
      empName: empName || false,
    };
  },
})(EmployeeForm);

export default FormixEmployeeForm;
