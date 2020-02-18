const express = require("express");
const employeeRouter = express.Router();
const Employee = require("../model/Employee");

// Read
employeeRouter.get("/", (req, res) => {
  Employee.find({}, (error, response) => {
    if (error)
      res.status(500).json({
        message: {
          messageBody: "Unable to get Employees",
          messageError: true
        }
      });
    else res.status(200).json({ response });
  });
});

// Create
employeeRouter.post("/", (req, res) => {
  const employee = new Employee(req.body);
  employee.save((error, document) => {
    if (error)
      res.status(500).json({
        message: {
          messageBody: "Unable to Add Employee",
          messageError: true
        }
      });
    else
      res.status(200).json({
        message: {
          messageBody: "Successfully Added Employee",
          messageError: false
        }
      });
  });
});

// Delete

employeeRouter.delete("/:id", (req, res) => {
  Employee.findByIdAndDelete(req.params.id, error => {
    if (error)
      res.status(500).json({
        message: {
          messageBody: "Unable to Delete Employee",
          messageError: true
        }
      });
    else
      res.status(200).json({
        message: {
          messageBody: "Successfully Deleted Employee",
          messageError: false
        }
      });
  });
});

// Update

employeeRouter.put("/:id", (req, res) => {
  Employee.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true },
    (error, response) => {
      if (error)
        res.status(500).json({
          message: {
            messageBody: "Unable to Update Employee",
            messageError: true
          }
        });
      else
        res.status(200).json({
          message: {
            messageBody: "Successfully Updated Employee",
            messageError: false
          }
        });
    }
  );
});

module.exports = employeeRouter;
