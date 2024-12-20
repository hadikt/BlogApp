'use client';
import { Button, Navbar, TextInput } from "flowbite-react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";

// Rest of the file

function Header() {
  const path = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <Navbar className="border-b-2">
      <Link
        href="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-3 py-1 bg-gradient-to-r from-slate-700 via-purple-500 to-pink-500 rounded-full text-white shadow-lg animate-pulse">
          Hadi&apos;s
        </span>
        <span className="text-gray-800 dark:text-gray-200">Blog</span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden " pill color="gray">
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline "
          color="gray"
          pill
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        <SignedIn>
          <UserButton
            appearance={{
              baseTheme: theme === "light" ? neobrutalism : dark,
            }}
          />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline >Sign In
 </Button>
 </Link>
        </SignedOut>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link href="/">
          <Navbar.Link active={path === "/"} as={"div"}>
            Home
          </Navbar.Link>
        </Link>
        <Link href="/about">
          <Navbar.Link active={path === "/about"} as={"div"}>
            About
          </Navbar.Link> 
        </Link>
        <Link href="/project">
          <Navbar.Link active={path === "/project"} as={"div"}>
            Project
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
