import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
  
const StudentTableRow = (props) => {
  const { _id, name, author, publishYear } = props.obj;
  
  const deleteStudent = () => {
    //!=======================
      const query = `
        mutation DeleteBook($bookid: ID!) {
          delete(bookid: $bookid) {
            publishYear
            name
            author
          }
        }
      `;
    
      const variables = {
        bookid: _id,
      };
    
      fetch('/graphql', {
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

    
    //!=======================
//     axios
//       .delete(
// "http://localhost:4000/graphql" )
//       .then((res) => {
//         if (res.status === 200) {
//           alert("Student successfully deleted");
//           window.location.reload();
//         } else Promise.reject();
//       })
//       .catch((err) => alert("Something went wrong"));
  };
  
  return (
    <tr>
      <td>{name}</td>
      <td>{author}</td>
      <td>{publishYear}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-student/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteStudent} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
  
};
  
export default StudentTableRow;