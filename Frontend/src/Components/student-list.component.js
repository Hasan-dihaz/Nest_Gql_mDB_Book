import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.log("students...", students);

    //!========================================
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          fetchAll {
            _id
            publishYear
            name
            author
          }
        }`
      })
    })
      .then(res => res.json())
      .then(res => {
        setStudents(res.data.fetchAll)
        console.log('res.data',res.data)
      });
    //!========================================
    // axios
    //   .get("http://localhost:4000/students/")
    //   .then(({ data }) => {
    //     setStudents(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);
  console.log("students", students);

  
    const DataTable = () => {
      console.log("students.map", typeof students);
      if(students.length > 0) {
        console.log("students.map", students.length);
      return students.map((res, i) => {
        console.log("students.map",res);
        return <StudentTableRow obj={res} key={i} />;
      }
      )
    };
      
    };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
            <th>Publish Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default StudentList;