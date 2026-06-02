function Nav() {
    return (
        <div className='fixed top-0 left-0 right-0 z-50 bg-blue-950 text-white flex items-center justify-between px-10 py-3 border-b border-b-[#1C91FF]'>
            <div>
                <h2 className='inline-block bg-linear-to-r from-[#1C91FF] to-[#FB3B3E] bg-clip-text text-transparent text-2xl font-bold'>MERN Stack Developer</h2>
            </div>
            <div className='flex gap-8 text-xl'>
                <a href="#home" className='text-white hover:text-[#1C91FF]'>Home</a>
                <a href="#about" className='text-white hover:text-[#1C91FF]'>About</a>
                <a href="#skills" className='text-white hover:text-[#1C91FF]'>Skills</a>
                <a href="#projects" className='text-white hover:text-[#1C91FF]'>Projects</a>
            </div>
            <div>
                <button className='hover:cursor-pointer flex gap-0.5 px-5 py-2 bg-linear-to-r from-[#1C91FF] to-[#FB3B3E] border-[#1C91FF] rounded-2xl'>
                    <img src="/hire.svg" alt="" />
                    <span>Hire Me</span>
                </button>
            </div>
        </div>
    )
}

export default Nav