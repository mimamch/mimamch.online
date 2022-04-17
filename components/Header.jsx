import React from "react";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function Header() {
  const [showNavbar, setshowNavbar] = useState(false);
  function onclick() {
    // setshowNavbar(!showNavbar);
  }

  return (
    <header>
      <div className="container mx-auto z-50">
        {" "}
        <div></div>
        <div className="flex justify-between px-3 items-center">
          <Link href="/">
            <a className="text-xl lg:text-2xl font-semibold tracking-wider z-50">
              💕MImamCh.
            </a>
          </Link>
          <Menu as="div" className="lg:hidden lg:invisible">
            <Menu.Button as="div" className="z-50">
              <div className="flex flex-col space-y-2 z-20 transition duration-100">
                <span className="w-10 h-1 rounded full bg-slate-100"></span>
                <span className="w-10 h-1 rounded full bg-slate-100"></span>
                <span className="w-10 h-1 rounded full bg-slate-100"></span>
              </div>
            </Menu.Button>

            <Menu.Items
              as="div"
              className="fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center space-y-10 text-xl bg-slate-800/90 w-full min-h-full z-30"
            >
              <Menu.Item>
                {({ active }) => {
                  return (
                    <Link href="#">
                      <a className=" opacity-90 hover:opacity-80 bg-slate-200 w-2/3 h-10 flex justify-center items-center rounded-full text-slate-700 font-medium">
                        Services
                      </a>
                    </Link>
                  );
                }}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="#">
                    <a className=" opacity-90 hover:opacity-80 bg-slate-200 w-2/3 h-10 flex justify-center items-center rounded-full text-slate-700 font-medium">
                      How We Work
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="#">
                    <a className=" opacity-90 hover:opacity-80 bg-slate-200 w-2/3 h-10 flex justify-center items-center rounded-full text-slate-700 font-medium">
                      Projects
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/about">
                    <a className=" opacity-90 hover:opacity-80 bg-slate-200 w-2/3 h-10 flex justify-center items-center rounded-full text-slate-700 font-medium">
                      About
                    </a>
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>

          <div className="hidden invisible lg:visible lg:block text-lg">
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
          <div className="hidden invisible lg:visible lg:block">
            <Button primary>Contact Me</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
