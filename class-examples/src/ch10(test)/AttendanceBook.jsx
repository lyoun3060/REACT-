import React from "react";

const student = [
  { id: 1, name: "Inje" },
  { id: 2, name: "Steve" },
  { id: 3, name: "Bill" },
  { id: 4, name: "Jeff" },
];

const AttendanceBook = (props) => {
  return (
    <div>
      <ul>
        {student.map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceBook;
