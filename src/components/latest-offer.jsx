import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define the validation schema for email
const schema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

function LatestOffer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Subscribed with:', data.email);
  };

  return (
    <section className="latest-offer relative top-12">
      <div className="container main mx-auto px-12 mb-4 box bg-black rounded-lg max-w-6xl">
        <div className="container wrapper pt-8 pr-40 pb-8 pl-12 grid grid-cols-[60%_40%] gap-40">
          <div className="left">
            <h2 className="font-bold text-white text-5xl py-4 leading-12">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-4">
              <div className="input-box bg-white mb-5 rounded-full flex align-middle">
                <i className="bi bi-envelope email text-base p-5" aria-hidden="true"></i>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="text-base focus:border-none focus:outline-none outline-none"
                  {...register('email')}
                  required
                  aria-label="Email address"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              <button
                type="submit"
                className="bg-white text-black text-base p-5 rounded-full block w-full"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestOffer;
