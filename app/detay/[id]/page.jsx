import { notFound } from "next/navigation";
import Link from "next/link";
import data from "../../data.json";

export default function PostDetail({ params }) {
  const { id } = params;

  const student = data.students.find(student => student.id === parseInt(id));

  if (!student) {
    return notFound();
  }

  const attendedCount = student.attendance.filter(record => record.isAttended).length;
  const notAttendedCount = student.attendance.filter(record => !record.isAttended).length;

  return (
    <div className="container">
      <h1 className="title">{student.name}</h1>
      <div className="info-grid">
        <div className="info-item">
          <h2>Öğrenci Detayları</h2>
          <p><strong>Öğrenci Numarası:</strong> {student.number}</p>
          <p><strong>Eğitim Bilgisi:</strong> {student.education}</p>
          <p><strong>Cinsiyet:</strong> {student.gender}</p>
          <p><strong>Telefon:</strong> {student.phone}</p>
          <p><strong>E-posta:</strong> {student.ePosta}</p>
        </div>
        <div className="attendance-summary">
          <h2>Devamsızlık Bilgisi</h2>
          <ul className="attendance-list">
            {student.attendance.map((record, index) => (
              <li key={index} className={`attendance-record ${record.isAttended ? 'attended' : 'not-attended'}`}>
                {record.date}: {record.isAttended ? "Katıldı" : "Katılmadı"}
              </li>
            ))}
          </ul>
          <div className="attendance-counts">
            <p><strong>Toplam Ders Sayısı:</strong> {attendedCount + notAttendedCount}</p>
            <p><strong>Katıldığı Ders:</strong> {attendedCount}</p>
            <p><strong>Katılmadığı Ders:</strong> {notAttendedCount}</p>
          </div>
        </div>
      </div>
      <Link href="/detay">
        <button className="back-button">Geri Git</button>
      </Link>
    </div>
  );
}
