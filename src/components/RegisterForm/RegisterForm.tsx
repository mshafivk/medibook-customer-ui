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
    <div className="flex flex-col">
      <div className="flex text-xl justify-start items-center px-3 bg-slate-50  min-h-[9vh]">
        <span className="font-bold underline underline-offset-3 decoration-orange-700">
          Medi
        </span>
        <span className="font-light">Token</span>
      </div>
      <div className="bg-gradient-to-r from-sky-600 to-sky-400 min-h-[91vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-4xl items-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/3"
        >
          <h3 className="text-2xl font-sans font-bold text-gray-700 text-center">
            Create a new account
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
                className={`mt-2 textbox ${
                  errors.name ? 'border-red-500' : ''
                }`}
              />
              {errors.name && (
                <span className="alert-text">Name is required</span>
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
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className={`mt-2 textbox ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email?.type === 'required' && (
                <span className="alert-text">Email is required</span>
              )}
              {errors.email?.type === 'pattern' && (
                <span className="alert-text">Invalid email format</span>
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
                className={`mt-2 textbox ${
                  errors.location ? 'border-red-500' : ''
                }`}
              />
              {errors.location && (
                <span className="alert-text">Location is required</span>
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
                className={`mt-2 textbox  ${
                  errors.phoneNumber ? 'border-red-500' : ''
                }`}
              />
              {errors.phoneNumber && (
                <span className="alert-text">{errors.phoneNumber.message}</span>
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
                className={`mt-2 textbox  ${
                  errors.password ? 'border-red-500' : ''
                }`}
                {...register('password', { required: true, minLength: 8 })}
              />
              {errors.password && (
                <span className="alert-text">
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
              <p className="text-red-500 text-md" role="alert">
                {user.error}
              </p>
            )}
            {user.status === 'succeeded' && (
              <p className="text-green-500 text-md" role="alert">
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
      </div>
    </div>
  );
}
export default RegisterForm;
