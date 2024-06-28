import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className='px-2 py-32 bg-black mx-auto my-auto text-white shadow-md'>
            <div className='text-center'>
                <h1 className=' font-bold leading-snug text-5xl lg:7xl mb-5'>Welcome to Our Blog</h1>
                <p className='mx-auto text-gray-100 lg:w-3/5 mb-5 px-2 font-primary'>Start your blog today and join a community of passionate writers and readers who share their stories and ideas. We offer everything you need t o get started from helpful tips and tutorials</p>
                <Link to="/about" className='font-medium hover:text-orange-500 inline-flex items-center py-1 text-xl italic'>Learn more <FaArrowRight className='mt-1 ml-2' /></Link>
            </div>
        </div>
    )
}

export default Banner