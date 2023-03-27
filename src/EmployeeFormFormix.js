import React from 'react';
import { withFormik } from 'formik';

const EmployeeFormFormix = ({ Values }) => (
  <div>
    <h1>Employee Form </h1>
    <form>
      Location
      <input
        type="checkbox"
        name="manager"
        checked={Values.manager}
        name="manager"
      />
      <br />
      Name
      <input type="text" name="empName" onChange={Values.empName} />
      <br />
      <button type="Button">Submit</button>
    </form>
  </div>
);

const FormixEmployeeForm = withFormik({
  mapPropsToValues({ empName, manager }) {
    return {
      manager: manager || false,
      empName: empName || '',
    };
  },
})(EmployeeFormFormix);

export default FormixEmployeeForm;
