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

  //!!!!!!!!!!!!!!!
  const updatedVal = (updatedVal) => {
    // console.log("contactInfo__0");
    // console.log(contactInfo);
    let {book,author,year}=updatedVal;

    //! =============================
    const query = `
    mutation Update($updateBook: UpdateBookInput!) {
      update(updateBook: $updateBook) {
        publishYear
        name
        author
        _id
      }
    }
      `;
    
      const variables = {
        
          "updateBook": {
            "publishYear": year,
            "name": book,
            "id": id,
            "author": author
          }
        
      };
      // const variables = {
      //   "_id": _id,
      // };
    
      fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    //! =============================
  
  }
  //!!!!!!!!!!!!!!!


  const { id } = useParams()
    
  //onSubmit handler
  const onSubmit = (studentObject) => {
    const query = `
    mutation Update($updateBook: UpdateBookInput!) {
      update(updateBook: $updateBook) {
        publishYear
        name
        author
        _id
      }
    }
      `;
    
      const variables = {
        
          "updateBook": {
            "publishYear": formValues.year,
            "name": formValues.book,
            "id": id,
            "author": formValues.author
          }
        
      };
      // const variables = {
      //   "_id": _id,
      // };
    
      fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
  };

  
  // Load data from server and reinitialize student form

  // props.match.params.id

  // Return student form
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      updatedValue={updatedVal}
      enableReinitialize
    >
    Update Book
    </StudentForm>
    
  );
};
  
// Export EditStudent Component
export default EditStudent;