import React from "react";
import Input from "./Input";

const Form = props => {
  return (
    <form onSubmit={props.handler}>
      <h4>{props.isEditForm ? "Editing Employee: " : "Add Employee: "}</h4>
      <div className="form-group">
        <Input
          name="firstName"
          placeholder="Enter First Name"
          labelName="First Name: "
          handleChange={props.changeHandler}
          value={props.employee.firstName}
        />
        <Input
          name="lastName"
          placeholder="Enter Last Name"
          labelName="Last Name: "
          handleChange={props.changeHandler}
          value={props.employee.lastName}
        />
        <Input
          name="job"
          placeholder="Enter Job Title"
          labelName="Job Title: "
          handleChange={props.changeHandler}
          value={props.employee.job}
        />
        <Input
          name="salary"
          placeholder="Enter Salary"
          labelName="Salary: "
          handleChange={props.changeHandler}
          value={props.employee.salary}
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
