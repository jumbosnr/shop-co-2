import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import { AuthContext } from './AuthContext'; // Adjust the path if necessary

const schema = z.object({
  fullName: z.string().min(1, { message: 'Full Name is required' }),
  address1: z.string().min(1, { message: 'Address 1 is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  state: z.string().min(1, { message: 'State is required' }),
  zipCode: z.string().min(10, { message: 'ZIP Code is required' }),
  nameOnCard: z.string().min(1, { message: 'Name on Card is required' }),
  cardNumber: z.string()
    .length(16, { message: 'Card Number must be 16 digits' })
    .regex(/^\d+$/, { message: 'Card Number must be numeric' }),
  cvv: z.string()
    .length(3, { message: 'CVV must be 3 digits' })
    .regex(/^\d+$/, { message: 'CVV must be numeric' }),
  expMonth: z.string().min(2, { message: 'Expiration Month is required' }),
  expYear: z.string().min(4, { message: 'Expiration Year is required' }),
});

const StateSelector = ({ register, errors }) => {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const stateList = response.data.map(country => country.name.common); // Adjust as per the API structure
        setStates(stateList);
      } catch (error) {
        setError('Failed to load states');
      } finally {
        setLoading(false);
      }
    };
    fetchStates();
  }, []);

  if (loading) return <p>Loading states...</p>;
  if (error) return <p>{error}</p>;

  return (
    <select {...register('state')} className={`border-2 px-3 py-3 w-full ${errors.state ? 'border-red-500' : ''}`}>
      <option value="">Select a state</option>
      {states.map((state, index) => (
        <option key={index} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
};

function PaymentPage() {
  const { user } = useContext(AuthContext); // Assuming AuthContext provides user info
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  const [serverError, setServerError] = useState(null);


  const onSubmit = async (data) => {
    console.log('Form data:', data);
  
    try {
      const response = await axios.post('/api/payment', data,{
        headers: { 'Content-Type': 'application/json'},
      });
      
      console.log('Server response:', response);

      // Handle successful submission (e.g., display success message)
    } catch (error) {
      console.error('Error submitting form:', error);
      setServerError('Payment failed. try again.');
      // Handle form submission errors
    }

  };

  // return (
  //   <section className="check-out py-10">
  //     <div className="container px-12 mx-auto max-w-6xl">
  //       <h2 className="text-2xl font-bold text-black grid place-content-center py-2">Billing</h2>
  //       <p className="text-base text-gray-500 grid place-content-center mb-5">
  //         Fill out the appropriate information below
  //       </p>
  //       <form onSubmit={handleSubmit(onSubmit)} className="billing-details grid grid-cols-2 gap-5">
  //         <div className="left rounded-lg border-2 px-5">
  //           <h2 className="text-2xl font-semibold py-4 border-b-2 mb-7">Billing Address</h2>
  //           <div className="input-box mb-7">
  //             <label className="text-base font-semibold block mb-2">Full Name</label>
  //             <input
  //               type="text"
  //               {...register('fullName')}
  //               className={`border-2 px-3 py-3 w-full ${errors.fullName ? 'border-red-500' : ''}`}
  //               required
  //             />
  //             {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
  //           </div>
  //           {/* Address fields and State Selector */}
  //           <div className="input-box mb-7">
  //             <label className="text-base font-semibold block mb-2">State</label>
  //             <StateSelector register={register} errors={errors} />
  //           </div>
  //           {/* Other form fields */}
  //           <button type="submit" className="bg-black text-white font-bold py-2 px-4 rounded-lg mt-5">
  //             Submit
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </section>
  // );
  return (

    <section className="check-out py-10">
    <div className="container px-12 mx-auto max-w-6xl">
      <h2 className="text-2xl font-bold text-black grid place-content-center py-2">
        Billing
      </h2>
      <p className="text-base text-gray-500 grid place-content-center mb-5">
        Fill out the appropriate information below
      </p>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="billing-details grid grid-cols-2 gap-5">

          <div className="left rounded-lg border-2 px-5">
            <h2 className="text-2xl font-semibold py-4 border-b-2 mb-7">
              <i className="bi bi-1-circle"></i> Billing Address
            </h2>

            <div className="input-box mb-7">
              <label className="text-base font-semibold block mb-2">Full Name</label>
              <input
                type="text"
                {...register('fullName')}
                className={`border-2 border-gray-200 focus:outline-none focus:bg-gray-200 px-3 py-3 w-full ${errors.fullName ? 'border-red-500' : ''}`}
                required
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>

            <div className="input-box mb-7 py-2">
              <label className="text-base font-semibold block mb-2">ADDRESS 1</label>
              <input
                type="text"
                {...register('address1')}
                className={`border-2 border-gray-200 focus:outline-none focus:bg-gray-200 px-3 py-3 w-full ${errors.address1 ? 'border-red-500' : ''}`}
                required
              />
              {errors.address1 && <p className="text-red-500 text-sm">{errors.address1.message}</p>}
            </div>

            <div className="input-box mb-7 py-2">
              <label className="text-base font-semibold block mb-2">ADDRESS 2 ( Optional )</label>
              <input
                type="text"
                {...register('address2')}
                className="border-2 border-gray-200 focus:outline-none focus:bg-gray-200 px-3 py-3 w-full"
                required
              />
            </div>

            <div className="input-box mb-7 py-2">
              <label className="text-base font-semibold block mb-2">COUNTRY</label>
              <input
                type="text"
                {...register('city')}
                className={`border-2 border-gray-200 focus:outline-none focus:bg-gray-200 px-3 py-3 w-full ${errors.city ? 'border-red-500' : ''}`}
                required
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
            </div>

            
            

            <div className="input-box grid grid-cols-2 gap-4">
              <div className="col-1 py-2 mb-7">
                <label className="text-base font-semibold block mb-2">STATE</label>
                <StateSelector register={register} errors={errors} />
              </div>
              <div className="col-2 py-2 mb-7">
                <label className="text-base font-semibold block mb-2">ZIP CODE</label>
                <input
                  type="text"
                  {...register('zipCode')}
                  className={`border-2 border-gray-200 focus:outline-none focus:bg-gray-200 px-3 py-3 w-full ${errors.zipCode ? 'border-red-500' : ''}`}
                  required
                />
                {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode.message}</p>}
              </div>
            </div>



            <div className="input-box mb-7 py-2">
              <label className="text-base font-semibold block mb-2">CITY</label>
              <input
                type="text"
                {...register('city')}
                className={`border-2 border-gray-200 focus:outline-none focus:bg-gray-200 px-3 py-3 w-full ${errors.city ? 'border-red-500' : ''}`}
                required
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
            </div>
          </div>

          <div className="right rounded-lg border-2 px-5 h-[calc(100%-100px)]">
            <h2 className="text-2xl font-semibold py-4 border-b-2 mb-7">
              <i className="bi bi-2-circle"></i> Credit Card Info
            </h2>

            <div className="input-box mb-7">
              <label className="text-base font-semibold block mb-2">NAME ON CARD</label>
              <input
                type="text"
                {...register('nameOnCard')}
                  className={`border-2 border-gray-200 focus:outline-none focus:bg-gray-200 px-3 py-3 mb-3 w-full ${errors.nameOnCard ? 'border-red-500' : ''}`}
                required
              />
              {errors.nameOnCard && <p className="text-red-500 text-sm">{errors.nameOnCard.message}</p>}
            </div>

            <div className="input-box mb-7">
              <label className="text-base font-semibold block mb-2">CARD NUMBER</label>
              <input
                type="text"
                {...register('cardNumber')}
                className={`border-2 border-gray-200 focus:outline-none focus:bg-gray-200 px-3 py-3 mb-3 w-full ${errors.cardNumber ? 'border-red-500' : ''}`}
                placeholder="0000-0000-0000-0000"
                required
              />
              {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}
            </div>

            <div className="input-box grid grid-cols-3 gap-4 py-5">
              <div className="col-1 mb-7">
                <label className="text-base font-semibold block mb-2">CVV NUMBER</label>
                <input
                  type="text"
                  {...register('cvv')}
                  className={`border-2 border-gray-200 focus:outline-none focus:bg-gray-200 px-3 py-3 mb-3 w-full ${errors.cvv ? 'border-red-500' : ''}`}
                  placeholder="CVV"
                  required
                />
                {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv.message}</p>}
              </div>

              <div className="col-2 mb-7 col-span-2">
                <label className="text-base font-semibold block mb-2">EXPIRATION</label>
                <input
                  type="text"
                  {...register('expMonth')}
                  className={`border-2 border-gray-200 focus:outline-none focus:bg-gray-200 px-3 py-3 mb-3 w-full ${errors.expMonth ? 'border-red-500' : ''}`}
                  placeholder="MM/YYYY"
                  required
                />
                {errors.expMonth && <p className="text-red-500 text-sm">{errors.expMonth.message}</p>}

              </div>
              {/* <div className="col-3 mb-7">
                <label className="text-base font-semibold block mb-2">EXPIRATION YEAR</label>
                <input
                  type="text"
                  {...register('expYear')}
                  className={`border-2 border-gray-200 focus:outline-none focus:bg-gray-200 px-3 py-3 mb-3 w-full ${errors.expYear ? 'border-red-500' : ''}`}
                  placeholder="YY"
                  required
                />
                {errors.expYear && <p className="text-red-500 text-sm">{errors.expYear.message}</p>}
              </div> */}

            </div>

          <button type="submit" className="bg-black text-white font-bold py-2 px-4 rounded-lg mt-5">
            Submit
          </button>

          </div>
        </form>
      </div>
    </div>
    </section>
);
}

export default PaymentPage;

