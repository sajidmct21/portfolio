import { NavLink } from 'react-router-dom'

function Nav() {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "font-bold text-[#1C91FF]"
            : "text-white";
    return (
        <div className='bg-blue-950 text-white flex items-center justify-between px-10 py-3 border-b border-b-[#1C91FF]'>
            <div>
                <h2 className='inline-block bg-linear-to-r from-[#1C91FF] to-[#FB3B3E] bg-clip-text text-transparent text-2xl font-bold'>MERN Stack Developer</h2>
            </div>
            <div className='flex gap-8 text-xl'>
                <NavLink to="/" className={linkClass}>Home</NavLink>
                <NavLink to="/about" className={linkClass}>About</NavLink>
                <NavLink to="/services" className={linkClass}>Services</NavLink>
                <NavLink to="/projects" className={linkClass}>Projects</NavLink>
                <NavLink to="/Contact" className={linkClass}>Contact</NavLink>
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