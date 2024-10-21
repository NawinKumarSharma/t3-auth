import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "~/providers/authOptions";
import { motion } from 'framer-motion'
import Link from "next/link";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);
  console.log(session?.user);

  if (!session) {
    redirect("/signin");
  }
  return (
    <div className="h-screen w-full justify-center items-center bg-gray-900">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-center mt-9 text-3xl"> This is the Protected Page</h1>
        <p className="text-white mt-5 text-xl">Welcome {session.user?.email}!</p>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-2xl text-white">
            {session && <span>Logged in as {session.user?.email}</span>}
          </p>
          <Link
            href={session ? "/api/auth/signout" : "/signin"}
            className="rounded-full bg-white/50 px-10 py-3 font-semibold no-underline transition hover:bg-white/40"
          >
            {session ? "Sign out" : "Sign in"}
          </Link>
        </div>
      </div>
    </div>
  );
}
