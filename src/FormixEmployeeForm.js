import React from 'react';
import { withFormik, Field } from 'formik';


const EmployeeForm = {(Value)} => (
  
  <div>
  <h1>Employee Form </h1>
  <form >
  Name
  <input type="text" name="empName"  onChange={Value.empName} />
  <br />
  Location
  <input name="manager" type="checkbox" checked={Value.manager} name="manager" />
  <br />
  <button type="Button">
    Submit
  </button>
  </form>

</div>
);

const FormixEmployeeForm  = withFormik({
  mapPropsToValues({empName,manager}){
    return {
      manager: manager || '',
      empName: empName|| false
    }
  }
})(EmployeeForm)

export default FormixEmployeeForm;
