import React from 'react';
import BlogCard from '../components/BlogCard';

export default function mega () {
    const post = [
        {
            id:'1',
            title:'Naran Kaghan',
            description:'Naran Kaghan is a top-notch visiting place for couples who want to relax in the serene areas of Kaghan Valley. Surrounded by Lake Saif ul Malook, Lulusar Lake, and the Kunhar River, splashing its milky waters with all-time-like soothing sounds to listen to all day long. Naran Valley Luxury tour packages are only for those who do not want any compromise on quality and want to enjoy maximum pleasure in a private tour offered in Naran Kaghan Valley.',
            date:'2024-11-28',
            image:'../Image/Naran.jpg'
            
        },

        {
            id:'2',
            title:'Skardu Valley',
            description:'We are presenting one more exciting & Most Selling 6days Skardu Tour Plan, which is best for Honeymoon goers to explore this majestic lands beauty with full solace. This Skardu Tour Trip in 2024 suits anyone, whether a honeymoon couple or a family tour. You can have top services in this exotic location.',
            date:'2024-11-28',
            image:'../Image/Skardu.jpg',
            
        },

        {
            id:'3',
            title:'Chitral Kalash',
            description:'people are interested in loving flowers, which you can see everywhere around the Chitral region. Chitral Kalash Tour is a selling tour package that blends beauty with culture. Henceforth, you flourish by listening to some mind-blowing tales of ancient Greek culture in Kalash Bumburat and enjoying fantastic views in Chitral Gol.',
            date:'2024-11-28',
            image:'../Image/Chitral.png',
            
        },

        {
            id:'4',
            title:' Fairy Meadows',
            description:'Fairy Meadows is an ideal setting in the stunning scenery of Pakistan’s northern regions and is included in a Trekking Pakistan Tour Package. Explore the beautiful splendor of Fairy Meadows, surrounded by towering mountains, lush green meadows, and breathtaking views.',
            date:'2024-11-28',
            image:'../Image/Fairy.jpg',
            
        },

        {
            id:'5',
            title:'Hunza Valley',
            description:'The valley has different beautiful natural sights which are the attractions for tourists. Among these attractions the Baltit and Altit fort are also well known. The Baltit fort, after renovation, has recently been turned into heritage museum. In Hunza, the bazaar of Karimbad is famous for its local handicrafts, handmade rugs, traditional embroidered caps, shawls, hand woven cloth (paffu) and its gemstones which are famous all over the world, particularly Ruby. The Ruby mines are famous tourist attractions.',
            date:'2024-11-28',
            image:'../Image/Hunza.jpg',
            
        },

        {
            id:'6',
            title:'Neelum Valley',
            description:'Neelum Valley, a hidden gem nestled in the heart of Pakistan, is a must-visit destination for nature lovers and adventure enthusiasts. With its breathtaking landscapes, pristine lakes, and majestic mountains, Neelum Valley offers an unparalleled experience that will leave you in awe. In this article, we will explore the top 10 must-visit places in Neelum Valley and provide you with valuable tips on planning your trip.',
            date:'2024-11-28',
            image:'../Image/Neelum.jpg',
            
        },

    ];
    return (
        <div className='my-8'>
<h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-colors'>Exploring the beauty of nature</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
           {post.map((post,index) =>
        <div className='fade-in' key={post.id}>
            <div className='blog-card'>
<BlogCard post={post} isDarkBackground={index % 2 === 0}/>
                </div>
            </div>
        )}
            </div>
        </div>
    )
}