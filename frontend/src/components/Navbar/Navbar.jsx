import React from 'react'
import { Link , NavLink } from 'react-scroll'
import robo_logo from '../../assets/robo_logo.png'

const is_user_logged_in = false;

export const Navbar = () => {
    return (
        <div className='fixed w-full'>
            <div>
                <div className=' flex flex-row justify-between p-5 md:px-16 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]' >
                    <div className='flex flex-row items-center cursor-pointer' >
                        <span>
                            <img src={robo_logo} alt="Virtual Machine" className='-mt-1 h-9' />
                        </span>
                        <h1 className='text-3xl font-semibold ml-2' >Virtual Machine</h1>
                    </div>
                    <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8' >
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='hover:text-sky-400 transsition cursor-pointer'
                        >Home</Link>
                        <Link
                            to="/about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='hover:text-sky-400 transsition cursor-pointer'
                        >About</Link>
                        <Link
                            to="/services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='hover:text-sky-400 transsition cursor-pointer'
                        >Services</Link>
                    </nav>
                    {is_user_logged_in ? (
                        <div className='hidden md:flex flex-row items-center gap-6'>
                            <Link
                                to="/profile"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className='bg-green-900 font-bold text-white px-4 py-2 rounded-lg hover:bg-green-600 transition cursor-pointer'
                            >
                                Profile
                            </Link>
                            <Link
                                to="logout"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className='bg-red-900 font-bold text-white px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer'
                            >
                                Logout
                            </Link>
                        </div>
                    ) : (
                        <div className='hidden md:flex flex-row items-center gap-6'>
                            <Link
                                to="/signup"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className='bg-cyan-900 font-bold text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition cursor-pointer'
                            >
                                Sign Up
                            </Link>
                            <Link
                                to="/login"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className='bg-cyan-900 font-bold text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition cursor-pointer'
                            >
                                Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
