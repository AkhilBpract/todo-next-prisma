"user client"
import React from "react";
import { useAuth } from "../context/auth-provider";
import { loginUser } from "./login-user";

export default function Page() {
  const SITE_NAME = process.env.SITE_NAME;
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Login {SITE_NAME} </h1>
      </header>
      <form action="/" className="flex gap-2 flex-col mt-5">
        <input
          type="text"
          name="name"
          placeholder="name"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            login
          </button>
        </div>
      </form>
    </>
  );
}
