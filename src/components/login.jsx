import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

function LoginC() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        localStorage.setItem('userEmail', data.email);
        navigate('/store');
      } else {
        const errorData = await response.json();
        setServerError(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setServerError('Login failed. Please try again.');
    }
  };

  return (
    <section className="sign-up px-5 py-14">
      <div className="container grid grid-cols-2">
        <div className="left px-10">
          <h2 className="text-3xl font-bold py-4 mb-6">Log in to your account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-box mb-7">
              <label htmlFor="email" className="font-semibold block mb-4">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Enter Email"
                {...register('email')}
                className="border-2 rounded-lg border-gray-400 px-10 py-3 mb-4 text-base focus:border-2 focus:border-black outline-none w-full"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="input-box mb-7">
              <label htmlFor="password" className="font-semibold block mb-4">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                {...register('password')}
                className="border-2 rounded-lg border-gray-400 px-10 py-3 mb-4 text-base focus:border-2 focus:border-black outline-none w-full"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <div className="input-box mb-7">
              <button
                type="submit"
                className="px-10 py-3 bg-black rounded-lg text-lg font-semibold text-white w-full active:bg-gray-700"
              >
                Log In
              </button>
              {serverError && <p className="text-red-500 text-sm">{serverError}</p>}
            </div>
           
            <div className="input-box mb-7">
              <p
                className="px-10  text-lg font-semibold text-center text-black w-full "
                >
                  Don't an account?
                <a
                  href="/signup"

                >
                
                  <span className="text-red-500 focus:font-bold" >  Sign Up</span>
                </a>
              </p>
              {serverError && <p className="text-red-700 text-sm">{serverError}</p>}
            </div>
          </form>
        </div>

        <div className="right py-10">
          <video
            src={`${process.env.PUBLIC_URL}/assets/videos/intro.mp4`}
            type="video/mp4"
            autoPlay
            muted
            loop
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default LoginC;
