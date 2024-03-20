"use client"

import {useLogin} from "../hooks/getEmail";
import { Button } from "@/components/button";


export default function Dashboard() {
  const login = useLogin();

  const handleLogout = () => {
    localStorage.removeItem("email");
    window.location="/auth/login"
  };

  return (
    <>
      <section className="bg-gray-200 h-screen flex justify-center items-center flex-col space-y-3">
        <h1 className="text-xl"> Halo {login} </h1>
        <Button variant="danger" onClick={handleLogout}>Log Out</Button>
      </section>
    </>
  );
}
