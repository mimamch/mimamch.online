import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>MImamCh</title>
        <meta name="description" content="MImamCh Persoal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-gradient-to-b from-slate-700 to-slate-900 pt-5 text-white/90 min-h-screen">
        <Header />
        <section className="mt-13">
          <div className="container mx-auto mt-20 w-full">
            <div className="flex flex-col flex-wrap items-center justify-center text-center">
              <h3 className="text-xl lg:text-2xl font-light">
                Halo Semuanya 👋, Saya adalah
              </h3>
              <p className="bg-gradient-to-tr lg:text-5xl lg:font-semibold from-orange-500 to-indigo-500  bg-clip-text text-3xl font-bold tracking-wide uppercase text-transparent">
                Muhammad Imam Choirudin
              </p>
            </div>
          </div>
        </section>
        <section className="mt-10 ">
          <div className="container mx-auto flex flex-col-reverse lg:flex-row lg:w-8/12 flex-wrap lg:flex-nowrap lg:space-x-10  w-full items-center justify-center px-5">
            <div className="w-full ">
              <h3 className="my-5 text-center text-3xl font-medium">
                About Me
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quidem, eaque at nemo, officia impedit perferendis unde aliquam
                commodi beatae tempore similique maiores voluptate, tempora
                optio et aut. Modi, numquam laborum, velit sequi commodi
                reiciendis voluptas ipsa minima, sed esse eos. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Fuga quisquam
                itaque ullam assumenda, numquam perspiciatis earum dolore
                deserunt! Voluptatibus sapiente totam dolorum, reprehenderit
                quas ut delectus dolore suscipit nemo placeat. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Consequuntur magni fugiat
                excepturi unde. Expedita doloribus, voluptas necessitatibus
                officia molestias, fuga cumque dignissimos harum itaque amet
                quod, esse et nam ullam.
              </p>
              <div className="my-5 flex items-center">
                <a
                  className=" flex h-10 w-56 items-center justify-center rounded-full bg-slate-600 font-semibold transition duration-150 hover:opacity-75"
                  href="#"
                >
                  See My Portofolio
                </a>
                <a
                  className="ml-5 flex h-10 w-56 items-center justify-center rounded-full bg-primary font-semibold transition duration-150 hover:opacity-75"
                  href="#"
                >
                  Projects
                </a>
              </div>
            </div>
            <div className="w-10/12 lg:w-8/12  block justify-center items-center  overflow-hidden rounded-full relative">
              <Image
                // className="object-cover"
                src="/img/hero.jpg"
                alt="mimamch"
                width={300}
                // objectFit="cover"
                height={300}
                layout="responsive"
              />
            </div>
          </div>
        </section>
        <hr className="my-10 opacity-20" />
        <footer className="pb-10 ">
          <div className=" container mx-auto">
            <div className="mx-auto px-10 flex flex-col space-y-10 items-start justify-between opacity-80 font-light tracking-wider lg:flex-row lg:space-y-0 ">
              <div className="flex flex-col ">
                <a className=" mb-4 text-2xl font-semibold" href="#">
                  MImamCh.❤️
                </a>
                <div className=" space-y-3 opacity-90">
                  <p className=" ">Copyright © 2022.</p>
                  <p className="  ">Design by MImamCh</p>
                </div>
              </div>
              <div className="flex flex-col ">
                <h4 className="mb-2 uppercase text-lg">Services</h4>
                <div className="space-y-3 opacity-90">
                  <p className=" ">Web Development</p>
                  <p className="  ">App Development</p>
                  <p className="  ">UI Design</p>
                  <p className="  ">Consultant</p>
                  <p className="  ">Maintenance</p>
                </div>
              </div>
              <div className="flex flex-col ">
                <h4 className="mb-2 uppercase text-lg">Company</h4>
                <div className="space-y-3 opacity-90">
                  <p className=" ">About</p>
                  <p className="  ">Contact</p>
                  <p className="  ">Send Quote</p>
                  <p className="  ">Privacy Policy</p>
                  <p className="  ">Terms of Services</p>
                  <p className="  ">Jobs</p>
                </div>
              </div>
              <div className="flex flex-col ">
                <h4 className="mb-2 uppercase text-lg">Resource</h4>
                <div className="space-y-3 opacity-90">
                  <p className=" ">Support</p>
                  <p className=" ">Documentation</p>
                  <p className=" ">Sitemap</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
