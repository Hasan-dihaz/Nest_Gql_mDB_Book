// EditStudent Component for update student data
  
// Import Modules
import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentForm from "./StudentForm";

import { useParams } from "react-router-dom";
  
// EditStudent Component
const EditStudent = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });
  // const  id = props.match.params.id;
  // console.log("This is ID:"+ id);

  const { id } = useParams()
    
  //onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .put(
        "http://localhost:4000/students/update-student/" + id,
        studentObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully updated");
          props.history.push("/student-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  
  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/students/update-student/" 
        + id
        // "http://localhost:4000/students/update-student/633032f20120e00fed259779"
      )
      .then((res) => {
        const { name, email, rollno } = res.data;
        setFormValues({ name, email, rollno });
      })
      .catch((err) => console.log(err));    
  },[id]);

  // props.match.params.id

  // Return student form
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
    Update Book
    </StudentForm>
    
  );
};
  
// Export EditStudent Component
export default EditStudent;