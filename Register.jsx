import { useState } from "react";

function Register() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
  });

  const register = () => {
    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    alert("Registration Completed");

    setStudent({
      name: "",
      email: "",
    });
  };

  return (
    <div className="container">
      <h2>Student Registration</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={student.name}
        onChange={(e) =>
          setStudent({
            ...student,
            name: e.target.value,
          })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={student.email}
        onChange={(e) =>
          setStudent({
            ...student,
            email: e.target.value,
          })
        }
      />

      <button onClick={register}>Submit</button>
    </div>
  );
}

export default Register;
