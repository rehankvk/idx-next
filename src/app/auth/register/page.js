"use client";

import React,{ useState } from "react";
import Link from "next/link"
import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Input } from "@/components/input"
import { Label } from "@/components/label"

export default function Register() {
  
  const [user, setUser] = useState({
    username:"",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
 
    setUser((prevalue) => {
      return {
        ...prevalue,   // Spread Operator               
        [name]: value
      }
    })
  };

  const postRegist = () => {
    // console.log(user);
    localStorage.setItem('email', JSON.stringify(user.email))
    router.push('/products')
  };

  return (
    <>
      <Card className="w-[350px] bg-white">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Enter your details to register.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col space-y-4">
            <div className="space-y-3 flex flex-col">
              <Label htmlFor="name" className="text-left">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Input Your Name"
                onChange={handleChange}
                value={user.username}
                required
              />
            </div>
            <div className="space-y-3 flex flex-col">
              <Label htmlFor="email" className="text-left">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Input Your Email"
                onChange={handleChange}
                value={user.email}
                required
              />
            </div>
            <div className="space-y-3 flex flex-col">
              <Label htmlFor="password" className="text-left">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Input Your Password"
                onChange={handleChange}
                value={user.password}
                required
              />
            </div>
          </form>
          <p>Have an account? <Link href={'/auth/login'} className="hover:text-blue-500">Login</Link> </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" onClick={postRegist}>Register</Button>
        </CardFooter>
      </Card>
    </>
  );
}
