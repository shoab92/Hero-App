import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Data from '../Data';
import downloadsIcon from '../assets/icon-downloads.png';
import ratingsIcon from '../assets/icon-ratings.png';
import reviewIcon from '../assets/icon-review.png';

const SMplan = () => {
    const { id } = useParams();
    const item = Data.find((d) => String(d.id) === String(id));

    const handleInstall = () => {
        toast.info(`Installing ${item.title}...`, {
            position: "bottom-right",
            autoClose: 3000,
        });
    };

    if (!item) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <p className='text-gray-500'>App not found.</p>
            </div>
        );
    }

    return (
        <div className='min-h-screen px-4 sm:px-6 lg:px-8 py-10'>
            <div className='max-w-3xl mx-auto bg-white rounded-lg shadow p-6'>
                <div className='flex items-start gap-6'>
                    <img src={item.image} alt={item.title} className='h-32 w-32 object-cover rounded' />
                    <div className='flex-1'>
                        <h1 className='text-2xl font-bold'>{item.title}</h1>
                        <p className='text-sm opacity-70'>Developed by <span className='text-[#825ae9]'>{item.companyName}</span></p>
                        <p className='mt-3 text-sm'>{item.description}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <button className='bg-green-500 text-white px-4 py-2 rounded-lg font-semibold'>Installed</button>
                        <p className='text-xs mt-2 opacity-70'>{item.size} MB</p>
                    </div>
                </div>

                <div className='mt-6 grid grid-cols-3 gap-4 text-center'>
                    <div className='p-4'>
                        <img src={downloadsIcon} alt='downloads' className='h-8 w-8 mx-auto' />
                        <p className='opacity-75 mt-2'>Downloads</p>
                        <h5 className='text-2xl font-bold'>{Math.round(item.downloads / 1000000)}M</h5>
                    </div>
                    <div className='p-4'>
                        <img src={ratingsIcon} alt='ratings' className='h-8 w-8 mx-auto' />
                        <p className='opacity-75 mt-2'>Average Rating</p>
                        <h5 className='text-2xl font-bold'>{item.ratingAvg}</h5>
                    </div>
                    <div className='p-4'>
                        <img src={reviewIcon} alt='reviews' className='h-8 w-8 mx-auto' />
                        <p className='opacity-75 mt-2'>Reviews</p>
                        <h5 className='text-2xl font-bold'>{Math.round(item.reviews / 1000)}K</h5>
                    </div>
                </div>

                <div className='mt-6 text-right'>
                    <button 
                        onClick={handleInstall}
                        className='bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition'>
                        Install Now ({item.size} MB)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SMplan;