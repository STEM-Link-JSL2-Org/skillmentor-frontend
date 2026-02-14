import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-black text-white flex gap-2 p-4 justify-around">
      <div className="flex gap-2">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-amber-400" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "text-amber-400" : "")}
        >
          Dashboard
        </NavLink>
      </div>
      <div className="flex gap-2">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        {/* Show the user button when the user is signed in */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
