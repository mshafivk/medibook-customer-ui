import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../store';
import { createUser } from '../../thunks/user';
import { FormData as FormDataType } from '../../types';
import './RegisterForm.scss';

function RegisterForm() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();

  const onSubmit = (data: FormDataType) => {
    dispatch(createUser(data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 0a5 5 0 0 0-5 5c0 3.5 5 10 5 10s5-6.5 5-10a5 5 0 0 0-5-5z" />
        </svg>
      </div>
      <h3 className="text-2xl font-semibold text-gray-700 text-center">
        Get Started with Medibook: Create Your Account
      </h3>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Name:
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
            className={`mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? 'border-red-500' : ''
            }`}
          />
          {errors.name && (
            <span className="text-red-500 text-xs italic">
              Name is required
            </span>
          )}
        </label>
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email:
          <input
            type="email"
            id="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            className={`mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email?.type === 'required' && (
            <span className="text-red-500 text-xs italic">
              Email is required
            </span>
          )}
          {errors.email?.type === 'pattern' && (
            <span className="text-red-500 text-xs italic">
              Invalid email format
            </span>
          )}
        </label>
      </div>
      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Location:
          <input
            type="text"
            id="location"
            {...register('location', { required: true })}
            className={`mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.location ? 'border-red-500' : ''
            }`}
          />
          {errors.location && (
            <span className="text-red-500 text-xs italic">
              Location is required
            </span>
          )}
        </label>
      </div>
      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Phone Number:
          <input
            type="tel"
            id="phoneNumber"
            {...register('phoneNumber', {
              required: 'Phone number is required',
              minLength: {
                value: 10,
                message: 'Phone number must be at least 10 characters',
              },
              pattern: {
                value: /^\d+$/,
                message: 'Phone number must contain only digits',
              },
            })}
            className={`mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ${
              errors.phoneNumber ? 'border-red-500' : ''
            }`}
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-xs italic">
              {errors.phoneNumber.message}
            </span>
          )}
        </label>
      </div>
      <div className="form-group mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password:
          <input
            type="password"
            className={`mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ${
              errors.password ? 'border-red-500' : ''
            }`}
            {...register('password', { required: true, minLength: 8 })}
          />
          {errors.password && (
            <span className="text-red-500 text-xs italic">
              This field is required and must be at least 8 characters long
            </span>
          )}
        </label>
      </div>
      <div className="flex place-content-center">
        {user.status === 'loading' && (
          <span className="sr-only">Loading...</span>
        )}
        {user.error && (
          <p className="text-red-500 text-md italic" role="alert">
            {user.error}
          </p>
        )}
        {user.status === 'succeeded' && (
          <p className="text-green-500 text-md italic" role="alert">
            Welcome to Medibook... Click Here to Proceed to App
          </p>
        )}
      </div>
      <div className="flex  place-content-center">
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
export default RegisterForm;
