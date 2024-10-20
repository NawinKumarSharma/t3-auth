// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import SignInWithGitHubButton from '~/components/SignInWithGithub';
// import SignInWithGoogleButton from '~/components/SignInWithGoogle';
// import Link from 'next/link';

// interface SignUpResponse {
//   message: string;
//   user?: {
//     id: string;
//     email: string;
//     name: string | null;
//   };
// }

// export default function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const response = await fetch('/api/auth/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password, name }),
//     });

//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//     const data: SignUpResponse = await response.json();

//     if (response.ok) {
//       // Redirect to sign in page
//       router.push('/auth/signin');
//     } else {
//       // Handle error
//       console.error(data.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <input type="hidden" name="remember" defaultValue="true" />
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="name" className="sr-only">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="email-address" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="new-password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Sign up
//             </button>
//           </div>
//         </form>
//         <div>
//           <Link href="/auth/signin">Already register</Link>
//         </div>
//         <SignInWithGitHubButton />
//         <SignInWithGoogleButton />
//       </div>
//     </div>
//   );
// }


import React from 'react'
import Link from 'next/link'
import RegisterForm from './component/RegisterForm'
import SignInWithGoogleButton from '~/components/SignInWithGoogle'
import SignInWithGitHubButton from '~/components/SignInWithGithub'

export default function SignUpPage() {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-gray-900'>
      <div className='p-10 bg-white rounded-lg shadow-lg w-full sm:w-3/4 lg:w-auto'>
        <h1 className='text-4xl font-semibold text-center text-neutral-900'>Register</h1>
        <hr className='my-5'/>
        <RegisterForm />
        <div className='text-sm text-center text-neutral-500 mt-5'>
          Have an accout? <Link href={"/signin"} className="font-bold text-neutral-900">Login</Link>
        </div>
        <div className="flex justify-center items-center mt-6 gap-10">
          <SignInWithGoogleButton />
          <span>or</span>
          <SignInWithGitHubButton />
        </div>
      </div>
    </div>
  )
}
