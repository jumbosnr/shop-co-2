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
  zipCode: z.string().min(1, { message: 'ZIP Code is required' }),
  cardNumber: z.string()
    .length(16, { message: 'Card Number must be 16 digits' })
    .regex(/^\d+$/, { message: 'Card Number must be numeric' }),
  cvv: z.string()
    .length(3, { message: 'CVV must be 3 digits' })
    .regex(/^\d+$/, { message: 'CVV must be numeric' }),
  expMonth: z.string().min(1, { message: 'Expiration Month is required' }),
  expYear: z.string().min(1, { message: 'Expiration Year is required' }),
});

function PaymentPage() {
  const { user, setUser } = useContext(AuthContext); // Assuming AuthContext provides user info
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const sortedCountries = response.data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sortedCountries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Full Name</label>
        <input type="text" {...register('fullName')} />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>
      <div>
        <label>Address 1</label>
        <input type="text" {...register('address1')} />
        {errors.address1 && <p>{errors.address1.message}</p>}
      </div>
      <div>
        <label>City</label>
        <input type="text" {...register('city')} />
        {errors.city && <p>{errors.city.message}</p>}
      </div>
      <div>
        <label>State</label>
        <input type="text" {...register('state')} />
        {errors.state && <p>{errors.state.message}</p>}
      </div>
      <div>
        <label>ZIP Code</label>
        <input type="text" {...register('zipCode')} />
        {errors.zipCode && <p>{errors.zipCode.message}</p>}
      </div>
      <div>
        <label>Card Number</label>
        <input type="text" {...register('cardNumber')} />
        {errors.cardNumber && <p>{errors.cardNumber.message}</p>}
      </div>
      <div>
        <label>CVV</label>
        <input type="text" {...register('cvv')} />
        {errors.cvv && <p>{errors.cvv.message}</p>}
      </div>
      <div>
        <label>Expiration Month</label>
        <input type="text" {...register('expMonth')} />
        {errors.expMonth && <p>{errors.expMonth.message}</p>}
      </div>
      <div>
        <label>Expiration Year</label>
        <input type="text" {...register('expYear')} />
        {errors.expYear && <p>{errors.expYear.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PaymentPage;
