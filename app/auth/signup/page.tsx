'use client'

import { SignUp } from '@/appwrite/Auth';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react'

const Signup: FunctionComponent = () => {

  const [name, setName] = useState<string>('');
  const [email, setEmail] =useState<any>();
  const [password, setPassword] = useState<string>('');

  const onSubmit = async(e: any) => {
    e.preventDefault();
    console.log(name, email, password)
    await SignUp(email, password, name);
  }

  return (
    <main className="bg-[#1e4d91] h-screen flex justify-center items-center ">
      <Card>
        <h2 className="text-center text-xl font-semibold my-4">
          Create Account
        </h2>

        <form>
          <Input title="Name" placeholder="Manoj Kumar" type="text" onChange={(e) => setName(e.target.value)} />
          <Input title="Email" placeholder="manoj@richpanel.com" type="email" onChange={(e) =>setEmail(e.target.value)} />
          <Input title="Password" placeholder="********" type="password" onChange={(e) => setPassword(e.target.value)} />
          <Input title="Remember Me" type="checkbox" />
          <Button style="bg-[#1e4d91]" onClick={onSubmit}>Sign Up</Button>
        </form>
        <p className='mt-7 text-center'>
          Already have an account?{" "}
          <Link className="text-[#1e4d91]" href="/auth/login">
            Login
          </Link>{" "}
        </p>
      </Card>
    </main>
  );
}

export default Signup