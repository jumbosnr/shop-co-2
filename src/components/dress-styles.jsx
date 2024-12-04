import React from 'react';
import { Link } from 'react-router-dom';
import casual from "../assets/Images/dress-styles/casual.png";
import formal from "../assets/Images/dress-styles/formal.png";
import party from "../assets/Images/dress-styles/party.png";
import gym from "../assets/Images/dress-styles/gym.png";


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
            <Link to="#" className="text-lg block">
              <img
                src={ casual }
                alt=""
                className="w-full h-44 object-cover object-center"   
              />
            </Link >
          </div>

          <div className="pic formal col-span-2 relative">
            <h4 className="absolute top-5 left-5 text-2xl font-bold text-black">
              Formal
            </h4>
            <Link to="#" className="text-lg block">
              <img
                src={ formal }
                alt=""
                className="w-full h-44 object-cover  object-center"
              />
            </Link >
          </div>

          <div className="pic party col-span-2 relative">
            <h4 className="absolute top-5 left-5 text-2xl font-bold text-black">
              Party
            </h4>
            <Link to="#" className="text-lg block">
              <img
                src={ party }
                alt=""
                className="w-full h-44 object-cover object-center"
              />
            </Link >
          </div>
          
          <div className="pic gym relative">
            <h4 className="absolute top-5 left-5 text-2xl font-bold text-black">
              Gym
            </h4>
            <Link to="#" className="text-lg block">
              <img
                src={ gym }
                alt=""
                className="w-full h-44 object-cover object-center"
              />
            </Link >
          </div>
        </div>
      </div>
    </section>
  );
}

export default DressStyle;