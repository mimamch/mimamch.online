import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <main className="pt-10 text-white/90">
        <div className="container mx-auto py-10">
          {' '}
          <div className="flex justify-around ">
            <div className="text-2xl font-semibold tracking-wider">
              MImamCh.
            </div>
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
              <a className="mx-5 opacity-80 hover:opacity-90" href="#">
                About
              </a>
            </div>
            <div className="">
              <a
                className="rounded-full bg-slate-600 px-5 py-3 font-medium transition duration-200 ease-in-out hover:bg-slate-500"
                href=""
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <section>
          <div className="container mx-auto mt-10 w-6/12">
            <div className="flex flex-col flex-wrap items-center justify-center text-center">
              <h3 className="text-xl font-light">
                Halo Semuanya 👋 Saya adalah
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
              <h3 className="mb-5 text-center text-3xl font-medium">
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
                quas ut delectus dolore suscipit nemo placeat.
              </p>
              <a
                className="mt-8 flex h-10 w-56 items-center justify-center rounded-full bg-slate-600 font-semibold transition duration-150 hover:bg-slate-500"
                href="#"
              >
                See My Portofolio
              </a>
            </div>
            <div className="w-4/12 px-3">
              <img
                className="h-80 w-80 rounded-full  object-cover"
                src="https://placeimg.com/1000/1000/people"
                alt="mimamch"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
