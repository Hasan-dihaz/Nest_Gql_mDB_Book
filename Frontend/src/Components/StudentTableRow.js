import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
  
const StudentTableRow = (props) => {
  console.log("props", props);
  const { _id, name, author, publishYear } = props.obj;
  console.log("props.obj", props.obj);
  
  const deleteStudent = () => {
    axios
      .delete(
"http://localhost:4000/students/delete-student/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
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