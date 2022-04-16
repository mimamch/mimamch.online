import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto py-10">
        {" "}
        <div className="flex justify-around ">
          <Link href="/">
            <a className="text-2xl font-semibold tracking-wider">💕MImamCh.</a>
          </Link>
          <div className="">
            <a className="mx-5 opacity-80 hover:opacity-95" href="#">
              Services
            </a>
            <a className="mx-5 opacity-80 hover:opacity-95" href="#">
              How We Work
            </a>
            <a className="mx-5 opacity-80 hover:opacity-95" href="#">
              Projects
            </a>
            <Link href="/about">
              <a className="mx-5 opacity-80 hover:opacity-95">About</a>
            </Link>
          </div>
          <div className="">
            <Button primary>Contact Me</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
