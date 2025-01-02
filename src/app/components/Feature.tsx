import React from 'react'

export default function Feature () {
    return (
        <div>
            <section className='py-8 bg-neutral-100 mb-40'>
<h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600'>
    Laraib Rizwan : Navigating the beauty of pakistsan Blogs!
    </h2>
    <div className='max-auto max-w-7xl px-5'>
 <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>
    Exploring Our Categories
 </h1>
 <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
{[
    "Faiey Meadow",
    "Neelum Valley",
    "Hunza Valley",
    "Naran Kaghan",
    "Skardu",
    "Chitral Valley"
].map((category,index) => (
    <div key={index}
    className='relative group p-6  bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600'>
<p className='text-center text-lg font-semibold'>
    {category}
</p>
<div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out'>

</div>
    </div>
))}
 </div>
 </div>
</section>
</div>
    )
}