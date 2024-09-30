import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Sample JSON data for countries
const countries = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'United Kingdom' },
  // Add the rest of your countries...
  { code: 'UZ', name: 'Uzbekistan' },
];

const FlightBookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('YOUR_TELEGRAM_BOT_API_URL', {
        chat_id: 'YOUR_CHAT_ID',
        text: `Yangi rezervatsiya:\n
        Ism: ${data.fullName}\n
        Telefon 1: ${data.phone1}\n
        Telefon 2: ${data.phone2}\n
        Qaysi davlatdan: ${data.departureCountry}\n
        Qaysi davlatga: ${data.destinationCountry}\n
        Ketish sanasi: ${data.departureDate}\n
        Qaytish sanasi: ${data.returnDate}\n
        Email: ${data.email}\n
        Telegram Nick: ${data.telegramNick}\n
        Instagram Nick: ${data.instagramNick}`,
      });
      toast.success('Rezyervatsiya muvaffaqiyatli yuborildi!');
    } catch (error) {
      toast.error('Xatolik... Iltimos, qaytadan urinib ko‘ring.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white border-t-2 border-orange-500 dark:bg-gray-900">
      <div className="relative z-10 flex items-center justify-center p-4  bg-opacity-50 min-h-screen">
        <div className="container mx-auto px-5">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Flight ticket booking
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name...
                </label>
                <input
                  type="text"
                  {...register('fullName', { required: true })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Ism, sharif, familyangizni kiriting"
                />
                {errors.fullName && (
                  <span className="text-red-500">Required field</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tel - Number 1
                </label>
                <input
                  type="text"
                  {...register('phone1', { required: true })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Telefon raqamingizni kiriting"
                />
                {errors.phone1 && (
                  <span className="text-red-500">Required field</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tel - Number 2
                </label>
                <input
                  type="text"
                  {...register('phone2', { required: true })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Ikkinchi telefon raqamingizni kiriting"
                />
                {errors.phone2 && (
                  <span className="text-red-500">Required field</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  From which country
                </label>
                <select
                  {...register('departureCountry', { required: true })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Choose...</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {errors.departureCountry && (
                  <span className="text-red-500">Required </span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  To which country
                </label>
                <select
                  {...register('destinationCountry', { required: true })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Choose...</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {errors.phone2 && (
                  <span className="text-red-500">Required field</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of departure
                </label>
                <input
                  type="date"
                  {...register('departureDate', { required: true })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.departureDate && (
                  <span className="text-red-500">Required field</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Return date
                </label>
                <input
                  type="date"
                  {...register('returnDate', { required: true })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.returnDate && (
                  <span className="text-red-500">Required field</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Email manzilingizni kiriting"
                />
                {errors.email && (
                  <span className="text-red-500">Required field</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telegram NickName
                </label>
                <input
                  type="text"
                  {...register('telegramNick')}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Telegram nickingizni kiriting"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Instagram Nickname
                </label>
                <input
                  type="text"
                  {...register('instagramNick')}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Instagram nickingizni kiriting"
                />
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <button
                  type="submit"
                  className={`w-full py-4 text-white font-semibold rounded-lg ${
                    isSubmitting
                      ? 'bg-gray-400'
                      : 'bg-orange-500 hover:bg-orange-600'
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default FlightBookingForm;
