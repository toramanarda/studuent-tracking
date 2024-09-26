"use client"

import { useRouter } from "next/navigation";

export default function About() {

  const router = useRouter();
  const handleSubmit = e => {
    e.preventDefault();
    const formObj = Object.fromEntries(new FormData(e.target));
    // fetch kodu çalıştı

    router.push("/");
  }
  return (
    <div>
      <h1>Hakkımda</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="adınızı giriniz" />
        <button>Formu gönder</button>
      </form>
    </div>
  )
}