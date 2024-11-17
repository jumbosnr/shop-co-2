import React from 'react';

function DressStyle() {
  return (
    <section className="dress-style px-16 py-14">
      <div className="container mx-auto max-w-6xl py-12  bg-gray-400 rounded-xl">
        <h2 className="font-bold text-4xl flex place-content-center text-black mb-6">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="wrapper grid grid-cols-3 gap-4 px-20 items-center">

          <div className="pic casual relative">
            <h4 className="absolute top-5 left-5 text-2xl font-bold text-black">
              Casual
            </h4>
            <a href="#" className="text-lg block">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/dress-styles/casual.png`}
                alt=""
                className="w-full h-44 object-cover object-center"   
              />
            </a>
          </div>

          <div className="pic formal col-span-2 relative">
            <h4 className="absolute top-5 left-5 text-2xl font-bold text-black">
              Formal
            </h4>
            <a href="#" className="text-lg block">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/dress-styles/formal.png`}
                alt=""
                className="w-full h-44 object-cover  object-center"
              />
            </a>
          </div>

          <div className="pic party col-span-2 relative">
            <h4 className="absolute top-5 left-5 text-2xl font-bold text-black">
              Party
            </h4>
            <a href="#" className="text-lg block">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/dress-styles/party.png`}
                alt=""
                className="w-full h-44 object-cover object-center"
              />
            </a>
          </div>
          
          <div className="pic gym relative">
            <h4 className="absolute top-5 left-5 text-2xl font-bold text-black">
              Gym
            </h4>
            <a href="#" className="text-lg block">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/dress-styles/gym.png`}
                alt=""
                className="w-full h-44 object-cover object-center"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DressStyle;