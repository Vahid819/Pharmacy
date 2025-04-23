"use client";
import Link from "next/link";
import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

function page() {
  const { user } = useUser();
  const { isSignedIn } = useUser();
  const { isLoaded } = useUser();

  return (
    <div>
      {isSignedIn ? (
        <div>
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          {!isLoaded ? <p>Loadding....</p> : <UserButton />}
          {/* <UserButton /> */}
        </div>
      ) : (
        <div>
          {!isLoaded ? (
            <p>Loadding.....</p>
          ) : (
            <div>
              <Link href={"/sign-in"}>Sign In</Link>
              <Link href={"/sign-up"}>Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default page;
