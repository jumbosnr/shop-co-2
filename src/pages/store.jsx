import React from 'react';
import Head from '../head-tags/home';
import Slider from '../components/slider'; // Adjust the path as necessary
// import Header from '../components/header';
import Main from '../components/main-section';
// import Footer from '../components/footer';


function Store() {
    return (
        <div>
            <Head />
            {/* <Header /> */}
            <main className="mx-auto max-w-6xl grid grid-cols-[max-content_auto] gap-5 px-10 py-14">
                <aside className="max-w-6xl mx-auto px-10 border-2 border-gray-400 rounded-xl h-[calc(100%-600px)]">
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
                        {/* <div className="price border-b-2 py-6">

                            <h4 className="text-2xl font-semibold text-black py-2">Price</h4>
                            <div className="slider-box px-2">
                                <div className="range bg-gray-200 h-1 rounded-md">
                                    <div className="slider h-full bg-black w-4/5 rounded-full relative">
                                        <span className="btn block rounded-full w-6 h-6 bg-black absolute right-0 top-2/4 transform -translate-y-1/2 translate-x-1/2"></span>
                                    </div>
                                </div>
                            </div> 
                            <div className="indicators flex items-center justify-between mb-4 px-2">
                                <h4 className="text-black text-lg font-semibold">$50</h4>
                                <h4 className="text-black text-lg font-semibold">$200</h4>
                            </div>
                        </div>  */}

                        {/* <div className="colors border-b-2 py-6">
                            <h4 className="text-2xl font-semibold text-black mb-4">Colours</h4>
                            <div className="col-c">
                                <div className="icons flex flex-cols-1 gap-4 mb-4">
                                    <a href="#" className="w-9 h-9 grid place-content-center rounded-full bg-yellow-500"></a>
                                    <a href="#" className="w-9 h-9 grid place-content-center rounded-full bg-red-500"></a>
                                    <a href="#" className="w-9 h-9 grid place-content-center rounded-full bg-green-500"></a>
                                    <a href="#" className="w-9 h-9 grid place-content-center rounded-full bg-blue-500"></a>
                                    <a href="#" className="w-9 h-9 grid place-content-center rounded-full bg-purple-500"></a>
                                </div>
                            </div>
                        </div> */}

                        <div className="size mb-4 border-b-2">
                            <p className="text-gray-600 text-2xl font-semibold mb-4 py-4">Size</p>
                            <div className="flex gap-2 py-4">
                                <a className="size bg-gray-200 text-[#00000099] font-light rounded-full px-4 py-2 text-center">Small</a>
                                <a className="size bg-gray-200 text-[#00000099] font-light rounded-full px-4 py-2 border text-center">Medium</a>
                            </div>
                            <div className="flex gap-2 py-4">
                                <a className="size bg-black text-base text-white font-light rounded-full px-4 py-2 text-center">Large</a>
                                <a className="size bg-gray-200 text-[#00000099] text-base font-light rounded-full px-4 py-2 border text-center">X-Large</a>
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
            {/* <Footer /> */}
        </div>
    );
};

export default Store;