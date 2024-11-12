import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';

// Define validation schema with Zod
const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

function SignUpC() {
  const navigate = useNavigate(); // Initialize navigate
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // Handle form submission, e.g., send to API
    navigate('/store'); // Redirect to store page after signup
  };

  return (
    <section className="sign-up px-5 py-14">
      <div className="container grid grid-cols-2 px-12">
        <div className="left px-10">
          <h2 className="text-3xl font-bold py-4 mb-6">Continue With Email</h2>
          <p className="text-lg w-full mb-2">
            We’ll check if you have an account, and help create one if you don’t.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-box mb-7">
              <label htmlFor="email" className="font-semibold block mb-4">Email</label>
              <input
                type="text"
                placeholder="Enter Email"
                {...register('email')}
                className={`border-2 rounded-lg border-gray-400 px-10 py-3 mb-4 text-base focus:border-2 focus:border-black outline-none w-full ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="input-box mb-7">
              <label htmlFor="password" className="font-semibold block mb-4">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                {...register('password')}
                className={`border-2 rounded-lg border-gray-400 px-10 py-3 mb-4 text-base focus:border-2 focus:border-black outline-none w-full ${errors.password ? 'border-red-500' : ''}`}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
                
            <div className="input-box mb-7">
              <button
                name="continue"
                type="submit"
                className="px-10 py-3 bg-black rounded-lg text-lg font-semibold text-white w-full"
              >
                Sign Up
              </button>
              
              <p className="grid place-content-center py-3 font-semibold">OR</p>

              <button
                name="continue"
                type="button"
                className="px-10 py-3 rounded-lg text-lg font-semibold text-black border-2 border-gray-200 focus:bg-gray-200 w-full mb-2"
              >
                Login with a code instead
              </button>

              <p className="text-center">
                Go passwordless! We’ll send you an email
              </p>
              
              <a href="#" className="text-black px-10 py-3 text-base font-semibold text-center block">
                Forgot Password
              </a>
            </div>
          </form>
        </div>
    
        <div className="right py-10">
          <video src={`${process.env.PUBLIC_URL}/assets/videos/intro.mp4`} type="video/mp4" autoPlay muted loop></video>
        </div>
      </div>
    </section>
  );
}

export default SignUpC;
