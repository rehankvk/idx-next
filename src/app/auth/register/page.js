"use client";

import React from "react";
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
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

export default function Register() {
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
          <form>          
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Input Your Name" />
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Input Your Email" />
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Input Your Password" />
            </div>
        </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Register</Button>
        </CardFooter>
      </Card>
    </>
  );
}
