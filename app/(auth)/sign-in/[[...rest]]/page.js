"use client"; // Required for Clerk components

import { SignIn } from "@clerk/nextjs";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex justify-center bg-[#131322]">
      <div className="my-15">
        <SignIn/>
        
      </div>

    </div>
  );
}
