import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Data from '../Data';

const Allapps = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredApps = Data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-10'>
            <div className='mb-10'>
            <h1 className='font-bold text-4xl mb-2 text-center'>All Apps</h1>
            <p className='text-center text-gray-600 opacity-70'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>
            
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10'>
                <div className='text-lg font-bold text-gray-700 order-2 sm:order-1'>
                    Total Apps: <span className='text-blue-600'>{filteredApps.length}</span>
                </div>
                <input
                    type='text'
                    placeholder='Search apps...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 order-1 sm:order-2'
                />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
                {filteredApps.map((item) => (
                    <Link
                        to={`/apps/${item.id}`}
                        key={item.id}
                        className='bg-white rounded-lg shadow p-4 flex flex-col hover:shadow-lg transition-shadow h-full block'
                    >
                        <img src={item.image} alt={item.title} className='h-40 w-full object-cover rounded' />
                        <h3 className='font-semibold mt-3 line-clamp-2'>{item.title}</h3>
                        <p className='text-sm opacity-70'>{item.companyName}</p>
                        <p className='text-sm mt-2 opacity-80 line-clamp-2'>{item.description}</p>
                        <div className='mt-auto flex items-center justify-between pt-3'>
                            <span className='font-bold text-yellow-500'>{item.ratingAvg}★</span>
                            <span className='text-sm opacity-70'>{Math.round(item.downloads / 1000000)}M</span>
                        </div>
                    </Link>
                ))}
            </div>
            {filteredApps.length === 0 && (
                <div className='text-center py-10'>
                    <p className='text-gray-500 text-lg'>No apps found matching "{searchTerm}"</p>
                </div>
            )}
        </div>
    );
};

export default Allapps;
