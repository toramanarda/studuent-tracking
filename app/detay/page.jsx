import Link from "next/link";
import data from "../data.json"; 

export default function Detay() {
  return (
    <div className="studentsList">
      <ul>
        {data.students.map(student => (
          <li key={student.id}>
            <h2>{student.name}</h2>
            <Link href={`/detay/${student.id}`}><button>Öğrenci Detayı</button></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
