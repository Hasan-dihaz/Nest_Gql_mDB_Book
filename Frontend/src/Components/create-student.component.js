// CreateStudent Component for add new student
  
// Import Modules
import React from "react";
import StudentForm from "./StudentForm";
  
// CreateStudent Component
const CreateStudent = () => {

  // const [contacts, updateContacts] = useState({ book: '', author: '', year: ''});
  // const [contacts, updateContacts] = useState({ });
let contact={}
  // {
  //   book:"",
  //   author:"",
  //   year:""
  // }
  const addContact = (contactInfo) => {
    // console.log("contactInfo__0");
    // console.log(contactInfo);
    let {book,author,year}=contactInfo;
    contact = {book,author,year};
    // updateContacts({...contacts, ...contactInfo});
    // console.log("contactInfo");
    // console.log(contact);
  }
  
  

  // ---------------
  const endpoint = "http://localhost:4000/graphql";
  const query = `
  mutation CreateBook($input: CreateBookInput!) {
    createBook(input: $input) {
      name
      author
      publishYear
    }
  }`;

// const inputsend =  
// { 
//   "input": {
//     "name": contact.book,
//     "author": contact.author,
//     "publishYear": contact.year
//   }  
// }
// console.log("book here");
// console.log(contact.book);

const onSubmit = studentObject => {
  const inputsend =  
  { 
    "input": {
      "name": contact.book,
      "author": contact.author,
      "publishYear": contact.year
    }  
  }

// console.log("hiiiiiiiiii");
    fetch(endpoint, {
      method: 'POST',
      headers: { "Content-Type": "application/json",
                  "Accept":"application/json",
     },
      body: JSON.stringify({ query:query, variables: inputsend })
   })
    // .then(Response=>Response.json())
    // .then(Response=>console.log(Response))
    // .then(data => console.log(data))
    // .then(data => {let {book,author,year}=data.createBook;
    //       contact = {book,author,year};})
    .then(res => {
        if (res.status === 200)
          alert('Student successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'));
  }
  // ---------------


    
  // Return student form
  return(
    <StudentForm 
      addContact={addContact}
      onSubmit={onSubmit} >
       Create Book 
    </StudentForm>
  )
}
  
// Export CreateStudent Component
export default CreateStudent