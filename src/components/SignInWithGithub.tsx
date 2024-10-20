'use client'

import { signIn } from 'next-auth/react'
import { Button } from './ui/button'


const SignInWithGitHubButton = () => {
  const handleSignInWithGitHub = async () => {
    await signIn('github', { callbackUrl: '/dashboard' })
  }

  return <Button  className="mt-4 animate-fade-up animate-delay-200" onClick={handleSignInWithGitHub}>Sign in with github</Button>
}

export default SignInWithGitHubButton