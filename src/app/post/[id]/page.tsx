'use client'; // This makes the file run on the client side in Next.js

import React from 'react';
import CommentSection from "@/app/components/CommentSection";
import AuthorCard from '@/app/components/AuthorCard';
import Footer from '@/app/components/Footer';

// Data for posts
const posts = [
    {
        id: '1',
        title: 'Naran Kaghan',
        description: 'Naran Kaghan is a top-notch visiting place for couples who want to relax in the serene areas of Kaghan Valley. Surrounded by Lake Saif ul Malook, Lulusar Lake, and the Kunhar River, splashing its milky waters with all-time-like soothing sounds to listen to all day long. Naran Valley Luxury tour packages are only for those who do not want any compromise on quality and want to enjoy maximum pleasure in a private tour offered in Naran Kaghan Valley.',
        image: '../Image/Naran.jpg'
    },
    {
        id: '2',
        title: 'Skardu Valley',
        description: 'We are presenting one more exciting & Most Selling 6days Skardu Tour Plan, which is best for Honeymoon goers to explore this majestic lands beauty with full solace. This Skardu Tour Trip in 2024 suits anyone, whether a honeymoon couple or a family tour. You can have top services in this exotic location.',
        image: '../Image/Skardu.jpg',
    },
    {
        id: '3',
        title: 'Chitral Kalash',
        description: 'People are interested in loving flowers, which you can see everywhere around the Chitral region. Chitral Kalash Tour is a selling tour package that blends beauty with culture. Henceforth, you flourish by listening to some mind-blowing tales of ancient Greek culture in Kalash Bumburat and enjoying fantastic views in Chitral Gol.',
        image: '../Image/Chitral.png',
    },
    {
        id: '4',
        title: 'Fairy Meadows',
        description: 'Fairy Meadows is an ideal setting in the stunning scenery of Pakistan’s northern regions and is included in a Trekking Pakistan Tour Package. Explore the beautiful splendor of Fairy Meadows, surrounded by towering mountains, lush green meadows, and breathtaking views.',
        image: '../Image/Fairy.jpg',
    },
    {
        id: '5',
        title: 'Hunza Valley',
        description: 'The valley has different beautiful natural sights which are the attractions for tourists. Among these attractions the Baltit and Altit fort are also well known. The Baltit fort, after renovation, has recently been turned into heritage museum. In Hunza, the bazaar of Karimbad is famous for its local handicrafts, handmade rugs, traditional embroidered caps, shawls, hand woven cloth (paffu) and its gemstones which are famous all over the world, particularly Ruby. The Ruby mines are famous tourist attractions.',
        image: '../Image/Hunza.jpg',
    },
    {
        id: '6',
        title: 'Neelum Valley',
        description: 'Neelum Valley, a hidden gem nestled in the heart of Pakistan, is a must-visit destination for nature lovers and adventure enthusiasts. With its breathtaking landscapes, pristine lakes, and majestic mountains, Neelum Valley offers an unparalleled experience that will leave you in awe. In this article, we will explore the top 10 must-visit places in Neelum Valley and provide you with valuable tips on planning your trip.',
        image: '../Image/Neelum.jpg',
    },
];

// Main Post component
export default function Post ({ params }: { params: { id: string } }) {
    const { id } = params;
    
    // Find the post based on the id from the posts array
    const post = posts.find((p) => p.id === id);

    // If the post is not found, display an error message
    if (!post) {
        return (
            <h2 className='text-2xl font-bold text-center mt-10'>
                Post Not Found
            </h2>
        );
    }

    // Function to render paragraphs from the description
    const renderParagraphs = (description: string) => {
        return description.split('/n').map((para, index) => (
            <p key={index} className='mt-4 text-justify'>
                {para.trim()}
            </p>
        ));
    };

    return (
        <div className='max-w-3xl mx-auto p-5'>
            <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center'>{post.title}</h1>

            {post.image && (
                <img
                    src={post.image}
                    alt={post.title}
                    className='w-full h-auto rounded-md mt-4'
                />
            )}

            <div className='mt-6 text-lg text-slate-700'>
                {renderParagraphs(post.description)}
            </div>

            <CommentSection postId={post.id} />
            <AuthorCard />
            <Footer/>
        </div>
    );
}
