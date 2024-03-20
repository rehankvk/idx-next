"use client";

import React, { useState,useEffect } from "react";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/card";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { useRouter } from "next/navigation"

export default function Login() {

  const router = useRouter()

  const [user, setUser] = useState({
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

  const postLogin = () => {
    // console.log(user);
    localStorage.setItem('email', JSON.stringify(user.email))
    router.push('/')
  };


  return (
    <>
      <Card className="w-[350px] bg-white">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your details to login.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col space-y-4">
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
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" onClick={postLogin}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
