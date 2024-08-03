// components/HomePage.tsx
"use client"

import React, { useState } from 'react';
import EditBannerTemplateBs from '../components/second'; // Make sure to adjust the import path as necessary
import BannerImageComp from '../components/adBanner'; // Adjust this too if the path is different
import CopyHtmlButton from '../components/cButton';
import DownloadButton from '../components/dButton';

interface Banner {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  textColor: string;
}

/**
 * replace 
 * 
 */

const initialBanners: Banner[] = [
  {
    title: 'Banner 1',
    description: 'This is the first banner.',
    cta: 'Click Here',
    image: '/food.jpg',
    background: '/stars.jpg',
    textColor: 'text-white', 
  },
  {
    title: 'Banner 2',
    description: 'This is the second banner.',
    cta: 'Learn More',
    image: '/code.jpg',
    background: '/black.jpg',
    textColor: 'text-white', 
  },
  {
    title: 'Banner 3',
    description: 'This is the third banner.',
    cta: 'Learn More',
    image: '/grocery.jpg',
    background: '/space.jpg',
    textColor: 'text-white', 
  },
  {
    title: 'Banner 4',
    description: 'This is the fourth banner.',
    cta: 'Learn More',
    image: '/office.jpg',
    background: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png',
    textColor: 'text-black', 
  },
];

const bg = [
  {
    id: '1',
    src: '/stars.jpg',
  },
  {
    id: '2',
   src: '/code.jpg',
  },
  {
    id:'3',
    src: '/black.jpg',
  },
  {
    id:'4',
    src: '/gradient.jpg'
  },
]

const imgs = [
  {
    id: '1',
    src: '/food.jpg',
  },
  {
    id: '2',
   src: '/code.jpg',
  },
  {
    id:'3',
    src: '/grocery.jpg',
  },
  {
    id:'4',
    src: '/office.jpg',
  },

]

const HomePage: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>(initialBanners);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState<number | null>(null);

  const handleEditClick = (index: number) => {
    setCurrentBannerIndex(index);
    setIsEditing(true);
  };

  const handleAddNewBanner = () => {
    const newBanner: Banner = {
      title: 'New Banner',
      description: 'Describe your new banner here.',
      cta: 'New CTA',
      image: '',
      background: '',
      textColor: 'text-black', // default text color
    };
    // Prepend the new banner to the beginning of the banners array
    setBanners([newBanner, ...banners]);
    setCurrentBannerIndex(0); // Set the index to 0 as the new banner is now at the beginning
    setIsEditing(true);
  };
  

  const handleSave = (updatedBanner: Banner) => {
    if (currentBannerIndex !== null) {
      const newBanners = [...banners];
      newBanners[currentBannerIndex] = updatedBanner;
      setBanners(newBanners);
    }
    setIsEditing(false);
  };

  return (
    <div className="w-full h-full min-h-screen p-4 bg-gradient-to-r from-blue-400 via-indigo-500 to-emerald-600 flex flex-col items-center justify-center">
      <div className='flex flex-col'>
        <h1 className="text-4xl font-bold text-center animate-gradient">Bot Banners</h1>
        <h1 className="font-light text-lg text-center mb-8 text-white">Easy Edits</h1>
      </div>
      <button onClick={handleAddNewBanner} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Add New Banner</button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-center place-items-center justify-center">
        {banners.map((banner, index) => (
        <div  key={index} className=" relative w-fit bg-slate-200 bg-opacity-30 rounded-3xl">
          <button className="absolute top-4 right-4 cursor-pointer z-20" onClick={()=>handleEditClick(index)}>
            <img src="/pen.png" alt="Edit" className="w-6 h-6" />
          </button>
          <div id={`banner-${index}`} className='w-96'>
            <BannerImageComp  {...banner}  />
          </div >
          <div className="flex p-4 m-4 justify-between mt-2">
            <CopyHtmlButton elementId={`banner-${index}`} label='Copy'  />
            <DownloadButton elementId={`banner-${index}`} label='Download' format='png'/>
          </div>
        </div>
        ))}
      </div>
      {isEditing && currentBannerIndex !== null && (
        <EditBannerTemplateBs
          isOpen={isEditing}
          onClose={() => setIsEditing(false)}
          banner={banners[currentBannerIndex]}
          onSave={handleSave}
          backgrounds={
            bg
          }
          otherImages={
            imgs
          }
        />
      )}
    </div>
  );
};

export default HomePage;
