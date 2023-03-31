import { ErrorMessage, Field, Form, Formik } from "formik";
// import React from "react";
import { Button, FormGroup } from "react-bootstrap";
import * as Yup from "yup";

import React, { useState } from "react";
  
const StudentForm = (props) => {

  const [formValues, setFormValues] = 
    useState({ book: ' ', author: '', year: '' })

    const handleChange = (event) => {
      setFormValues({ ...formValues, [event.target.name]: event.target.value });
      // props.addContact(formValues)
      // props.addContact(formValues);
    };
    // console.log("Form");
    //  console.log(formValues);
    // const onsubmit=()=>{
    //   props.addContact(formValues);
    // }
const onsbmit=()=>{
  console.log("Form_1");
     console.log(formValues);
     if(props.children==='Create Book'){
       props.addContact(formValues);
     }else{
       props.updatedValue(formValues);
     }
  // setFormValues({ book: '', author: '', year: '' });
  props.onSubmit();
}

  // ----------------------------

  const validationSchema = Yup.object().shape({
    book: Yup.string()
      .matches(/^[aA-zZ\s]+$/, "Invalid Book-name")
      .required("Required"),
    author: Yup.string()
      .matches(/^[aA-zZ\s]+$/, "Invalid Author-name")
      .required("Required"),
    // email: Yup.string()
    //   .email("You have enter an invalid email address")
    //   .required("Required"),
    year: Yup.number()
      .positive("Invalid Year")
      .integer("Invalid Year")
      // .matches(/^[0-9]+$/, "Must be only digits")
      .test('len', 'Must be exactly 4 characters', 
              val => val && val.toString().length === 4 )
      .min(1900,"Year after 1900")
      .max(new Date().getFullYear(),`Year must be less than ${new Date().getFullYear()}`)
      // .max(new Yup.date().year(),"Year before " + new Yup.date().year())
      .required("Required"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik initialValues={formValues} {...props} /*validationSchema={validationSchema}*/>
        <Form onSubmit={onsbmit}>
          <FormGroup>
            <label>Book</label>
            <Field 
              name="book" 
              type="text"
              className="form-control" 
              onChange={handleChange}
              value={formValues.book}
              // onChange={handleChange}
            />
            <ErrorMessage
              name="book"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label>Author</label>
            <Field 
              name="author" 
              type="text" 
              className="form-control" 
              value={formValues.author}
              onChange={handleChange}
            />
            <ErrorMessage
              name="author"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          {/* <FormGroup>
          <label>Author</label>
            <Field name="email" type="text" 
                className="form-control" />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup> */}
          <FormGroup>
          <label>Publish Year</label>
            <Field 
              name="year" 
              type="number" 
              className="form-control"
              value={formValues.year}
              onChange={handleChange}
           />
            <ErrorMessage
              name="year"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <br/>
          <Button 
            variant="danger" 
            size="lg" 
            block="block" 
            type="submit" 
            className="form-control">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default StudentForm;