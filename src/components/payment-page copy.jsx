import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';

// Define your validation schema with Zod
const schema = z.object({
  fullName: z.string().min(1, { message: 'Full Name is required' }),
  address1: z.string().min(1, { message: 'Address 1 is required' }),
  address2: z.string().optional(), // Optional field
  city: z.string().min(1, { message: 'City is required' }),
  state: z.string().min(1, { message: 'State is required' }),
  zipCode: z.string().min(1, { message: 'ZIP Code is required' }),
  nameOnCard: z.string().min(1, { message: 'Name on Card is required' }),
  cardNumber: z.string().min(16, { message: 'Card Number must be at least 16 digits' }).regex(/^\d+$/, { message: 'Card Number must be numeric' }), // Ensure it's numeric
  cvv: z.string().min(3, { message: 'CVV must be at least 3 digits' }).regex(/^\d+$/, { message: 'CVV must be numeric' }), // Ensure it's numeric
  expMonth: z.string().min(1, { message: 'Expiration Month is required' }),
  expYear: z.string().min(1, { message: 'Expiration Year is required' }),
});

const StateSelector = ({ register, errors }) => {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/name/nigeria?fullText=true');
        
        // Log the response to check its structure
        console.log('API Response:', response.data);
        
        const stateList = response.data[0].subdivisions || []; // Default to empty array if undefined
        setStates(stateList);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching states:', err); // Log error for debugging
      } finally {
        setLoading(false);
      }
    };

    fetchStates();
  }, []);

  if (loading) return <option value="">Loading...</option>;
  if (error) return <option value="">Error: {error}</option>;

  return (
    <select {...register('state')} className={`px-3 py-4 w-full ${errors.state ? 'border-red-500' : ''}`}>
      <option value="">Select State</option>
      {states.map((state) => (
        <option key={state.code} value={state.name}>
          {state.name}
        </option>
      ))}
      {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
    </select>
  );
};


function PaymentPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema), // Use Zod resolver for validation
  });

  const onSubmit = (data) => {
    console.log(data); // Handle form submission, e.g., send to API
  };

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

                <div className="col-2 mb-7">
                  <label className="text-base font-semibold block mb-2">EXPIRATION MONTH</label>
                  <input
                    type="text"
                    {...register('expMonth')}
                    className={`border-2 border-gray-200 focus:outline-none focus:bg-gray-200 px-3 py-3 mb-3 w-full ${errors.expMonth ? 'border-red-500' : ''}`}
                    placeholder="MM"
                    required
                  />
                  {errors.expMonth && <p className="text-red-500 text-sm">{errors.expMonth.message}</p>}
                </div>

                <div className="col-3 mb-7">
                  <label className="text-base font-semibold block mb-2">EXPIRATION YEAR</label>
                  <input
                    type="text"
                    {...register('expYear')}
                    className={`border-2 border-gray-200 focus:outline-none focus:bg-gray-200 px-3 py-3 mb-3 w-full ${errors.expYear ? 'border-red-500' : ''}`}
                    placeholder="YY"
                    required
                  />
                  {errors.expYear && <p className="text-red-500 text-sm">{errors.expYear.message}</p>}
                </div>
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
