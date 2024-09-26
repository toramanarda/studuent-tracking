"use client";

import { useEffect, useState } from "react";
import ClassData from "./data.json";

export default function Home() {
  const [students, setStudents] = useState(
    ClassData.students.map(student => ({
      ...student,
      isAttended: false
    }))
  );

  const [showAttendance, setShowAttendance] = useState(true);

  const handleClick = (studentId) => {
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        return {
          ...student,
          isAttended: !student.isAttended
        };
      }
      return student;
    });

    setStudents(updatedStudents);
  };

  useEffect(() => {
    console.log(students);
  }, [students]);

  const attendedStudents = students.filter(student => student.isAttended);
  const absentStudents = students.filter(student => !student.isAttended);

  return (
    <>
      {showAttendance ? (
        <div className="studentCheckList">
          {students.map(student => (
            <li key={student.id}>
              <input onClick={() => handleClick(student.id)} type="checkbox" />
              {student.name}
            </li>
          ))}
        </div>
      ) : (
        <div className="checkedList">
          <div className="attendedAbsentStudent">
            <div className="attendedStudents">
              <h3>Derse Katılan Öğrenciler</h3>
              {attendedStudents.map(student => (
                <li key={student.id}>
                  {student.name} <h4>Katıldı</h4>
                </li>
              ))}
            </div>

            <div className="allStudentList">
              <span>Derse katılan toplam öğrenci sayısı: <strong>{attendedStudents.length}</strong></span><br />
              <span>Derse katılmayan toplam öğrenci sayısı: <strong>{absentStudents.length}</strong></span><br />
              <span>Toplam öğrenci sayısı: <strong>{ClassData.students.length}</strong></span>
            </div>

            <div className="absentStudent">
              <h3>Derse Katılmayan Öğrenciler</h3>
              {absentStudents.map(student => (
                <li key={student.id}>
                  {student.name} <h4>Katılmadı</h4>
                </li>
              ))}
            </div>
          </div>
        </div>
      )}
      {showAttendance && (
        <button onClick={() => {
          setShowAttendance(false);
          localStorage.setItem("savedStudents", JSON.stringify(students));
        }}>
          Yoklamayı Tamamla
        </button>
      )}
    </>
  );
}
