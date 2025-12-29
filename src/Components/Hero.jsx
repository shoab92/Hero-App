import React from 'react';
import { useNavigate } from 'react-router-dom';
import Data from '../Data.js';
import HeroImage from '../assets/hero.png';
import PlayStore from '../assets/google-play.png';
import AppStore from '../assets/app-store.png';

const Hero = () => {
const navigate = useNavigate();
return (
    <>
    <div className="hero bg-base-200 min-h-screen flex flex-col">
        <div className="hero-content text-center my-5">
    <div className="max-w-md  flex flex-col">
    <h1 className="text-5xl font-bold flex flex-col justify-center items-center">We Build <span className='bg-gradient-to-r from-[#825ae8] to-[#9a65ef] bg-clip-text text-transparent'>Productive</span> Apps</h1>
    <p className="py-6 opacity-70">
        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
    </p>
            <section className='mx-auto flex gap-5 border-red-400'>
                <a href="https://play.google.com/store/games?hl=en" target="_blank" rel="noopener noreferrer" className="btn inline-flex items-center gap-2 px-4 py-2">
                    <img src={PlayStore} alt="Google Play" className="h-5 w-auto sm:h-7" />
                    <span className="ml-1">Google Play</span>
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="btn inline-flex items-center gap-2 px-4 py-2">
                    <img src={AppStore} alt="App Store" className="h-5 w-auto sm:h-7" />
                    <span className="ml-1">App Store</span>
                </a>
            </section>
    </div>
        </div>
        <div>
            <img src={HeroImage} alt="404 Error !" className="w-full h-auto mx-auto" />
        </div>

    <section className='tape bg-gradient-to-r from-[#6b56e3] to-[#9f62f2] w-full h-auto mx-auto my-auto flex flex-col justify-center items-center py-10'>
        <div className='text-white font-bold text-4xl text-center mb-8'>
            <h5>Trusted by Millions, Built for You</h5>
        </div>
        <div className='text-white flex flex-row gap-[40px] justify-center items-center w-full mx-auto'>
            <section>
                <ul className=' flex flex-col justify-center items-center p-4'>
                    <li>Total Downloads</li>
                    <li className='text-5xl font-bold my-3'>29.6M</li>
                    <li>21% More Than Last Month</li>
                </ul>
            </section>
            <section>
                <ul className='flex flex-col justify-center items-center p-4'>
                    <li>Total Rewards</li>
                    <li className='text-5xl font-bold my-3'>906K</li>
                    <li>46% More Than Last Month</li>
                </ul>
            </section>
            <section>
                <ul className='flex flex-col justify-center items-center p-4 '>
                    <li>Active Apps</li>
                    <li className='text-5xl font-bold my-3'>132+</li>
                    <li>31 More Will Launch</li>
                </ul>
            </section>
        </div>
    </section>


    <div className='Trending-apps flex flex-col justify-center items-center p-10 my-5'>
        <h1 className='font-bold text-4xl mb-2'>Trending Apps</h1>
        <p className='opacity-70'>Explore All Trending Apps on the Market Developed By Us</p>
                <section className='sm:w-[1000px] w-full my-7'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {Data.slice(0, 8).map((item) => (
                            <div key={item.id} className='bg-white rounded-lg shadow p-4 flex flex-col'>
                                <img src={item.image} alt={item.title} className='h-40 w-full object-cover rounded' />
                                <h3 className='font-semibold mt-3'>{item.title}</h3>
                                <p className='text-sm opacity-70'>{item.companyName}</p>
                                <p className='text-sm mt-2'>{item.description}</p>
                                <div className='mt-auto flex items-center justify-between pt-3'>
                                    <span className='font-bold'>{item.ratingAvg}★</span>
                                    <span className='text-sm opacity-70'>{Math.round(item.downloads / 1000000)}M downloads</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <button 
                onClick={() => navigate('/apps')}
                className='text-white py-3 px-7 rounded-lg gradient font-bold bg-gradient-to-r from-[#7157e5] to-[#9c60f1] hover:shadow-lg transition-shadow'>
                Show All
                </button>

                


    </div>
</div>
</>
)
};

export { Hero as default };
