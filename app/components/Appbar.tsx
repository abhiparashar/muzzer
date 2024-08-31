"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function Appbar() {
  const session = useSession();
  return (
    <div>
      <div className="flex justify-between">
        <div>Muzzer</div>
        <div>
          {session?.data?.user ? (
            <button className="p-2 m-2 bg-blue-400" onClick={() => signOut()}>
              signOut
            </button>
          ) : (
            <button className="p-2 m-2 bg-blue-400" onClick={() => signIn()}>
              signIn
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Appbar;
