// 'use client';

// import { useState } from 'react';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import SignInWithGitHubButton from '~/components/SignInWithGithub';
// import SignInWithGoogleButton from '~/components/SignInWithGoogle';
// import Link from 'next/link';

// export default function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const result = await signIn('credentials', {
//       redirect: false,
//       email,
//       password,
//     });
//     if (result?.error) {
//       // Handle error
//       console.error(result.error);
//     } else {
//       // Redirect to home page
//       router.push('/');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <input type="hidden" name="remember" defaultValue="true" />
//           <div className="rounded-md shadow-sm -space-y-px">
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
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
//                 autoComplete="current-password"
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
//               Sign in
//             </button>
//           </div>
//         </form>
//         <div>
//           <Link href="/auth/signup">Not resgistered</Link>
//         </div>
//         <SignInWithGitHubButton />
//         <SignInWithGoogleButton />
//       </div>
//     </div>
//   );
// }

import React from 'react'
import Link from 'next/link'
import LoginForm from './component/LoginForm'
import SignInWithGoogleButton from '~/components/SignInWithGoogle'
import SignInWithGitHubButton from '~/components/SignInWithGithub'

export default function LoginPage() {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-gray-900'>
      <div className='p-10 bg-white rounded-lg shadow-lg w-full swhitem:w-3/4 lg:w-auto'>
        <h1 className='text-4xl font-semibold text-center text-neutral-900'>Login</h1>
        <hr className='my-5'/>
        <LoginForm />
        <div className='text-sm text-center text-neutral-500 mt-5'>
          Not have an accout? <Link href={"/signup"} className="font-bold text-neutral-900">Register</Link>
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
