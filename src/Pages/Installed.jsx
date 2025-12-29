import React from 'react';
import { toast } from 'react-toastify';
import Data from '../Data';

const Installed = () => {
    const installedApps = Data.slice(0, 3);

    const handleUpdate = (appTitle) => {
        toast.info(`Updating ${appTitle}...`, {
            position: "bottom-right",
            autoClose: 3000,
        });
    };

    return (
        <div className='min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-10'>
            <div className='mb-10'>
                <h1 className='font-bold text-4xl mb-2 text-center'>Your Installed Apps</h1>
                <p className='text-center text-gray-600 opacity-70'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='mb-8 text-lg font-bold text-gray-700'>
                Total Installed: <span className='text-blue-600'>{installedApps.length}</span>
            </div>
            <div className='flex flex-col gap-6 max-w-2xl mx-auto'>
                {installedApps.map((item) => (
                    <div key={item.id} className='bg-white rounded-lg shadow p-6 flex flex-row items-center hover:shadow-lg transition-shadow'>
                        <img src={item.image} alt={item.title} className='h-24 w-24 object-cover rounded mr-6' />
                        <div className='flex-1'>
                            <h3 className='font-bold text-lg'>{item.title}</h3>
                            <p className='text-sm opacity-70 mb-2'>{item.companyName}</p>
                            <p className='text-sm opacity-80 mb-3'>{item.description}</p>
                            <div className='flex items-center gap-4'>
                                <span className='font-bold text-yellow-500'>{item.ratingAvg}★</span>
                                <span className='text-sm opacity-70'>{Math.round(item.downloads / 1000000)}M downloads</span>
                            </div>
                        </div>
                        <div className='ml-6 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold flex flex-col items-center cursor-pointer hover:bg-green-600 transition' onClick={() => handleUpdate(item.title)}>
                            <svg className='w-6 h-6 mb-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
                            </svg>
                            <span className='text-sm'>Installed</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Installed;