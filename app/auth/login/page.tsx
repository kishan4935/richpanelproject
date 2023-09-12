'use client';

import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Link from "next/link";
import { SignIn } from "@/appwrite/Auth";
import { useState } from "react";
import { useRouter } from "next/navigation";


function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter()

  const onSubmit = async (e:any)=> {
    e.preventDefault();
    await SignIn(email,password);
    router.push('/')
    
  }

  return (
    <main className="bg-[#1e4d91] h-screen flex justify-center items-center ">
      <Card>
        <h2 className="text-center text-xl font-semibold my-4">
          Login to your Account
        </h2>

        <form>
          <Input title="Email" placeholder="manoj@richpanel.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input title="Password" placeholder="********" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input title="Remember Me" type="checkbox" />
          <Button onClick={onSubmit} style="bg-[#1e4d91]">Login</Button>
        </form>
        <p className="mt-7 text-center">
          New to MyApp?{" "}
          <Link className="text-[#1e4d91]" href="/auth/signup">
            Sign Up
          </Link>{" "}
        </p>
      </Card>
    </main>
  );
}

export default Login