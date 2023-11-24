// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const NewRegistrationRequests = () => {
//   const [branch, setBranch] = useState("");
//   const [approvedStudents, setApprovedStudents] = useState([]); // Initialize as an empty array
//   const userData = JSON.parse(localStorage.getItem("AnkitHOD"));
//   const branch1 = "Mechanical";
//   console.log(branch1);
//   const fetchApprovedStudents = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:7786/api/NewRegistrationRequests?Branch=${branch1}`
//       );
//       // Update the local state with the fetched data
//       setApprovedStudents(response.data.students);
//       console.log(response.data.students, "bohot late ho gaya"); // Assuming the response contains an array of students
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchApprovedStudents();
//   }, [branch]); // Fetch approved students whenever the branch changes

//   return (
//     <div>
//       <h1>New Registration Requests</h1>
//       {/* <input
//         type="text"
//         placeholder="Enter Branch"
//         value={branch}
//         onChange={(e) => setBranch(e.target.value)}
//       /> */}
//       <ul>
//         {approvedStudents.map((student) => (
//           <li key={student._id}>
//             {student.name} - STUDENT EMAIL {student.email}- STUDENT COURSETYPE  {student.courseType} -{" "}
//             STUDENT COURSENAME  {student.courseName}- STUDENT COURSEBRANCH {student.courseBranch} - STUDENT DATH OF BIRTH     {student.dob}
//             STUDENT DOMICILE  {student.domicile} - STUDENT FATHERSNAME {student.fathersName}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NewRegistrationRequests;
