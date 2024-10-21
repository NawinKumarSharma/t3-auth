"use client"

import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Input from '~/components/ui/input';

export default function LoginForm() {
const router = useRouter();

  useEffect(() => {
    void signOut({
      redirect: false,
    });
  }, [])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    const login = await signIn("credentials", {
      email, password, redirect: false,
    });

    if(login?.ok){
      router.push("/dashboard");
      toast.success("Correct login");
    }
    else if(login?.error){
      toast.error(login?.error);
    }

    setLoading(false);
  }

  return (
    <div className='space-y-5 flex flex-col items-center'>
      <Input 
        label='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />
      <Input 
        label='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
        type='password'
      />
      <div
        onClick={login}
        className='px-10 py-3 bg-neutral-900 rounded-full text-white disabled:opacity-70 cursor-pointer'
      >
        Login
      </div>
    </div>  
  )
}