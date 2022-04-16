import React from "react";
import Head from "next/head";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Head>
        <title>MImamCh</title>
        <meta name="description" content="MImamCh Persoal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-gradient-to-b from-slate-700 to-slate-900 pt-10 text-white/90 min-h-screen">
        <Header />
        <section>
          <div className="container mx-auto">
            <h1 className="text-4xl text-center font-bold">
              THIS IS ABOUT PAGE
            </h1>
          </div>
        </section>
        <hr className="my-10 opacity-20" />
        <footer className="pb-10">
          <div className=" container mx-auto">
            <div className="mx-auto  flex w-8/12 items-start justify-between space-x-10 font-light tracking-wider">
              <div className="flex flex-col ">
                <a className=" mb-4 text-2xl font-semibold" href="#">
                  MImamCh.❤️
                </a>
                <div className=" space-y-3 opacity-90">
                  <p className="text-xs ">Copyright © 2022.</p>
                  <p className=" text-xs ">Design by MImamCh</p>
                </div>
              </div>
              <div className="flex flex-col ">
                <h4 className="mb-4 uppercase">Services</h4>
                <div className="space-y-3 opacity-90">
                  <p className="text-xs ">Web Development</p>
                  <p className=" text-xs ">App Development</p>
                  <p className=" text-xs ">UI Design</p>
                  <p className=" text-xs ">Consultant</p>
                  <p className=" text-xs ">Maintenance</p>
                </div>
              </div>
              <div className="flex flex-col ">
                <h4 className="mb-4 uppercase">Company</h4>
                <div className="space-y-3 opacity-90">
                  <p className="text-xs ">About</p>
                  <p className=" text-xs ">Contact</p>
                  <p className=" text-xs ">Send Quote</p>
                  <p className=" text-xs ">Privacy Policy</p>
                  <p className=" text-xs ">Terms of Services</p>
                  <p className=" text-xs ">Jobs</p>
                </div>
              </div>
              <div className="flex flex-col ">
                <h4 className="mb-4 uppercase">Resource</h4>
                <div className="space-y-3 opacity-90">
                  <p className="text-xs ">Support</p>
                  <p className="text-xs ">Documentation</p>
                  <p className="text-xs ">Sitemap</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
