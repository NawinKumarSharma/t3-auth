# Credential-Based Authentication with NextAuth.js in a T3 Stack

This repository implements a user authentication system using **NextAuth.js** with credentials (sign-in and sign-up) along with google and github authentication in a **T3 stack** application. It utilizes **Prisma ORM** for database operations and session storage.

## Objective

The goal of this project is to create a simple credential-based authentication system where users can sign up and log in using their email and password, with user data and session information being managed using **Prisma ORM**.

## Tech Stack

- **Next.js**
- **TypeScript**
- **tRPC**
- **Prisma ORM**
- **NextAuth.js**
- **Shadcn**
- **Tailwind CSS**


## Project Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <your-project-folder>
pnpm install
```
### 2.Setup DATABASE_URL
NEXTAUTH_SECRET=<Randomly generated secret>
NEXTAUTH_URL=http://localhost:3000
```bash
DATABASE_URL="postgresql://postgres:password@localhost:5432/t3-auth"
OR you can use from neon.tech
NEXTAUTH_SECRET=<Randomly generated secret>
NEXTAUTH_URL=http://localhost:3000
DISCORD_CLIENT_ID=""
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

NEXTAUTH_SECRET=

```
### 3.prisma setup
```bash
pnpm db:migrate
pnpm db:push
```

### 4. Run the application
```bash
pnpm run dev
```
