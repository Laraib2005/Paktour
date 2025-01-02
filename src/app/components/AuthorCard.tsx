import React from 'react'

export default function AuthorCard () {
    return (
        <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
<div className='flex items-center animation-fadeIn'>



<img
className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-500'
src='../Image/abc.jpg'
alt='Author'/>
<div>
    <h3 className='text-xl font-bold'>Laraib Rizwan</h3>
    <p className='text-slate-500'>HTML | CSS | Typescript | Nextjs </p>
</div>
</div>
<div className='mt-4 flex space-x-3'>
<a
href='#'
className='px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-700 transition duration-300'>
    Twitter
</a>
<a
href='#'      
className='px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-700 transition duration-300'>
    LinkedIn
</a>
<a
href='#'
className='px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-700 transition duration-300'>
    GitHub
</a>
</div>
        </div>
    )}