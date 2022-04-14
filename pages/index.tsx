import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <main className=" bg-gradient-to-b from-slate-700 to-slate-900 pt-10 text-white/90">
      <header>
        <div className="container mx-auto py-10">
          {' '}
          <div className="flex justify-around ">
            <Link href="/">
              <a className="text-2xl font-semibold tracking-wider">
                💕MImamCh.
              </a>
            </Link>
            <div className="">
              <a className="mx-5 opacity-80 hover:opacity-90" href="#">
                Services
              </a>
              <a className="mx-5 opacity-80 hover:opacity-90" href="#">
                How We Work
              </a>
              <a className="mx-5 opacity-80 hover:opacity-90" href="#">
                Projects
              </a>
              <Link href="/about">
                <a className="mx-5 opacity-80 hover:opacity-90">About</a>
              </Link>
            </div>
            <div className="">
              <a
                className="rounded-full bg-primary px-5 py-3 font-medium transition duration-200 ease-in-out hover:opacity-80"
                href=""
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container mx-auto mt-10 w-6/12">
          <div className="flex flex-col flex-wrap items-center justify-center text-center">
            <h3 className="text-xl font-light">
              Halo Semuanya 👋, Saya adalah
            </h3>
            <p className="bg-gradient-to-tr from-orange-500 to-indigo-500  bg-clip-text text-5xl font-semibold uppercase text-transparent">
              Muhammad Imam Choirudin
            </p>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="container mx-auto flex w-10/12 items-center justify-center space-x-20">
          <div className="w-6/12 px-3">
            <h3 className="mb-5 text-center text-3xl font-medium">About Me</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              eaque at nemo, officia impedit perferendis unde aliquam commodi
              beatae tempore similique maiores voluptate, tempora optio et aut.
              Modi, numquam laborum, velit sequi commodi reiciendis voluptas
              ipsa minima, sed esse eos. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Fuga quisquam itaque ullam assumenda, numquam
              perspiciatis earum dolore deserunt! Voluptatibus sapiente totam
              dolorum, reprehenderit quas ut delectus dolore suscipit nemo
              placeat.
            </p>
            <div className="mt-16 flex items-center">
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
          <div className="w-4/12 px-3">
            <Image
              className="h-80 w-80 rounded-full  object-cover "
              src="/img/hero.jpg"
              alt="mimamch"
              width="400"
              height="400"
            />
          </div>
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
  )
}

export default Home
