"use client";
import { useState } from "react";

export default async function Home() {
  const [credentials, setCredentials] = useState<{
    name: string;
    email: string;
    password: string;
  }>();

  return (
    <div className="flex flex-col w-96 ms-20 mt-20">
      <form>
        <input
          className="p-3 border border-slate-400"
          type="text"
          placeholder="Nome asdsss"
        />
      </form>
    </div>
  );
}
