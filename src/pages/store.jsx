// import React from 'react';
import React, { useState, }from 'react';
import Head from '../head-tags/home';
import Slider from '../components/slider'; // Adjust the path as necessary
// import Header from '../components/header';
import Main from '../components/main-section';
// import Footer from '../components/footer';


function Store() {
    const [selectedSize, setSelectedSize] = useState(''); // Default size
    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };
    
    return (
        <div>
            <Head />
            <main className="mx-auto max-w-6xl grid grid-cols-[max-content_auto] gap-5 px-10 py-14">
                <aside className="max-w-6xl mx-auto px-10  border-gray-400 rounded-xl h-[calc(100%-600px)]">
                    <div className="filter mb-6">
                        <h4 className="border-b-2 text-xl font-semibold py-6 flex justify-between items-center">
                            Filters <span><i className="bi bi-funnel-fill"></i></span>
                        </h4>

                        <div className="items border-b-2 grid grid-rows-1 py-6 gap-4">
                            <a href="#" className="text-gray-500 text-base font-normal">T-Shirts</a>
                            <a href="#" className="text-gray-500 text-base font-normal">Shorts</a>
                            <a href="#" className="text-gray-500 text-base font-normal">Shirts</a>
                            <a href="#" className="text-gray-500 text-base font-normal">Hoodie</a>
                            <a href="#" className="text-gray-500 text-base font-normal">Jeans</a>
                        </div>

                        <Slider />
    
                        <div className="size py-4">
                            <p className="py-2 text-gray-600">Choose Size</p>
                            <div className="grid gap-2">
                                <button
                                  onClick={() => handleSizeSelection('Small')} 
                                  className={`size bg-gray-200 text-[#00000099] font-light rounded-full px-4 py-2 text-center 
                                  ${selectedSize === 'Small' ? 'bg-red-700 text-white' : '' }`}
                                >
                                  Small
                                </button>
    
                                <button 
                                  onClick={() => handleSizeSelection('Medium')} 
                                  className={`size bg-gray-200 text-[#00000099] font-light rounded-full px-4 py-2 border text-center 
                                  ${selectedSize === 'Medium' ? 'bg-red-700 text-white' : '' }`}
                                >
                                  Medium
                                </button>
                
                                <button 
                                  onClick={() => handleSizeSelection('Large')} 
                                  className={`size bg-gray-200 text-[#00000099] font-light rounded-full px-4 py-2 border text-center 
                                  ${selectedSize === 'Large' ? 'bg-red-700 text-white' : '' }`}
                                  >
                                    Large
                                </button>
                
                                <button 
                                  onClick={() => handleSizeSelection('X-Large')} 
                                  className={`size bg-gray-200 text-[#00000099] font-light rounded-full px-4 py-2 border text-center 
                                  ${selectedSize === 'X-Large' ? 'bg-red-700 text-white' : ''}`}
                                  >
                                    X-Large
                                </button>
                            </div>
                        </div>

                        <div className="dress-style mx-auto py6 mb-4">
                            <h4 className="text-2xl font-semibold text-black mb-4">Dress Style</h4>
                            <div className="items grid grid-rows-4 gap-2 py-4">
                                <a href="#" className="text-gray-500 text-base font-normal">Casual</a>
                                <a href="#" className="text-gray-500 text-base font-normal">Formal</a>
                                <a href="#" className="text-gray-500 text-base font-normal">Party</a>
                                <a href="#" className="text-gray-500 text-base font-normal">Gym</a>
                            </div>
                            <form action="#" method="post" className="w-full">
                                <button type="submit" name="Apply-Filter" value="2" className="text-white rounded-full bg-black py-3 px-12 flex items-center place-content-center gap-1 w-full">
                                    Apply Filter
                                </button>
                            </form>
                        </div>
                    </div>
                </aside>
            <Main />
            </main>
            <section className="latest-offer relative top-12">
                <div className="container mx-auto px-12 mb-4 box bg-black rounded-lg max-w-6xl">
                    <div className="container wrapper pt-8 pr-40 pb-8 pl-12 grid grid-cols-[60%_40%] gap-40">
                        <div className="left">
                            <h2 className="font-bold text-white text-5xl py-4 leading-12">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
                        </div>
                        <div className="right">
                            <form action="#" className="px-4 py-4">
                                <div className="input-box bg-white mb-5 rounded-full flex align-middle">
                                    <i className="bi bi-envelope email text-base p-5"></i>
                                    <input type="email" placeholder="Enter your email address" className="text-base focus:border-none focus:outline-none outline-none" />
                                </div>
                                <button type="submit" value="submit" className="bg-white text-black text-base p-5 rounded-full block w-full">
                                    Subscribe to Newsletter
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Store;