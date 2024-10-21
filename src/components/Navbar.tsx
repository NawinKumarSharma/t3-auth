import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 ">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="w-6 h-6" />
            <span className="font-bold sm:inline-block">Nawin</span>
          </Link>
        </div>{" "}
        <div className="flex items-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href="https://github.com/NawinKumarSharma/Writix-AI-assignment"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href="https://x.com/nawinscript"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="w-5 h-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
