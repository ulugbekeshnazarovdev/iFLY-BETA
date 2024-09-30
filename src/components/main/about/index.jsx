import React from 'react';
import { FaPlane, FaHotel, FaRoute, FaUserFriends } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import IFLY from '../../../assets/ifly.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const AboutSection = () => {
  const testimonials = [
    {
      text: 'Traveling with this company is a true delight! They pay attention to every detail and ensure your trip is unforgettable.',
      author: 'Alice Johnson, New York',
    },
    {
      text: 'The tour guides were knowledgeable and friendly. I learned so much about the culture and history of each place we visited.',
      author: 'Mark Thompson, London',
    },
    {
      text: "From booking to return, everything was smooth and well-organized. I'll definitely use their services again!",
      author: 'Sarah Lee, Sydney',
    },
    {
      text: 'The customized itinerary they created for us was perfect. It was like they read our minds!',
      author: 'John Davis, Toronto',
    },
    {
      text: 'The accommodations were top-notch, and the local experiences were authentic and engaging. Highly recommended!',
      author: 'Emma Wilson, Berlin',
    },
  ];

  return (
    <div
      className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Our Company
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Providing exceptional travel experiences for over 20 years
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaPlane className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              International Travel
            </h3>
            <p className="text-gray-600">
              We organize trips to the most beautiful places in the world.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaHotel className="w-12 h-12 text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Comfortable Hotels
            </h3>
            <p className="text-gray-600">
              Stay in the best and most comfortable hotels.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaRoute className="w-12 h-12 text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Custom Routes
            </h3>
            <p className="text-gray-600">
              We create individual routes for each client.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaUserFriends className="w-12 h-12 text-purple-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Professional Guides
            </h3>
            <p className="text-gray-600">
              Experienced and knowledgeable guides at your service.
            </p>
          </div>
        </div>

        {/* Company history */}
        <div
          className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden"
          data-aos="fade-up"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src={IFLY}
                alt="Company image"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Our History
              </div>
              <p className="mt-2 text-gray-600">
                Our company was founded in 2003 and has been providing
                unforgettable travel experiences to thousands of clients over
                the years. We always strive to provide the highest quality
                services, taking into account the wishes and requirements of our
                clients.
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-600 font-medium"
                >
                  Read more &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            What Our Clients Say
          </h3>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-8 p-4"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white min-h-40 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                  <p className="italic text-gray-600 mb-4">
                    {testimonial.text.slice(0, 90)}
                  </p>
                  <p className="text-gray-500 text-right">
                    - {testimonial.author}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
