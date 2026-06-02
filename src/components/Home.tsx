function Home() {
  return (
    <section id="home" className="bg-blue-900 text-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-8">
          {/* <span className="inline-block rounded-full border border-sky-500 px-4 py-1 text-sm text-sky-200">
                        Full-stack Developer
                    </span> */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Hi, I&apos;m <br />
              Sajid Yaqub
            </h1>
            <p className="max-w-xl text-slate-200 text-lg sm:text-xl">
              I build scalable full-stack applications using React, Node.js, Express and MongoDB. I love clean code, smooth UX and lightning-fast interfaces.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className='hover:cursor-pointer flex gap-0.5 px-5 py-2 bg-linear-to-r from-[#1C91FF] to-[#FB3B3E] border-[#1C91FF] rounded-2xl'>
              View Projects
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              <span>Let’s Collaborate</span>
              <img src="/arrow.svg" alt="Arrow Icon" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative rounded-full bg-slate-900/80 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.7)]">
            <img
              src="/aboutpic.png"
              alt="About Pic"
              className="h-96 w-96 rounded-full object-cover border border-sky-500"
            />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-sky-500/30" />
          </div>

          <img src="/github.svg" alt="Github Icon" className="absolute left-11 top-4 h-14 w-14 rounded-full border border-sky-500 bg-slate-900 p-3 shadow-xl" />
          <img src="/aboutreact.svg" alt="Github Icon" className="absolute right-11 top-4 h-14 w-14 rounded-full border border-sky-500 bg-slate-900 p-3 shadow-xl" />
          <img src="/aboutjs.svg" alt="Github Icon" className="absolute left-8 bottom-8 h-14 w-14 rounded-full border border-sky-500 bg-slate-900 p-3 shadow-xl" />
          <img src="/aboutjs.svg" alt="Github Icon" className="absolute right-8 bottom-8 h-14 w-14 rounded-full border border-sky-500 bg-slate-900 p-3 shadow-xl" />
          <img src="/abouttaiwind.svg" alt="Github Icon" className="absolute left-0.5 top-50 h-14 w-14 rounded-full border border-sky-500 bg-slate-900 p-3 shadow-xl transform -translate-x-1/2" />
          <img src="/abouttaiwind.svg" alt="Github Icon" className="absolute -right-14 top-50 h-14 w-14 rounded-full border border-sky-500 bg-slate-900 p-3 shadow-xl transform -translate-x-1/2" />
        </div>
      </div>
    </section>
  )
}

export default Home