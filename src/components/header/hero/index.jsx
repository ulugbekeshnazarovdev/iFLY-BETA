import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// Import your images
import Australia from '../../../assets/a-1.jpeg';
import Dubai from '../../../assets/d-1.jpg';
import Island from '../../../assets/i-1.jpg';
import LosAngeles from '../../../assets/los-1.jpg';
import Tailand from '../../../assets/t-1.jpg';
import Tokyo from '../../../assets/t-2.jpg';
import Turkia from '../../../assets/tur-3.jpg';

const Hero = () => {
  // Array of images for the slider
  const images = [
    {
      img: Tokyo,
      title: 'Explore Tokyo',
      subtitle: 'Discover the vibrant culture and technology of Japan.',
    },
    {
      img: Island,
      title: 'Island Getaway',
      subtitle: 'Experience tranquility in breathtaking island settings.',
    },
    {
      img: Australia,
      title: 'Australia Adventure',
      subtitle: 'Explore the stunning landscapes and wildlife of Australia.',
    },
    {
      img: Dubai,
      title: 'Explore Dubai',
      subtitle: 'Discover luxury, innovation, and adventure in the UAE.',
    },
    {
      img: LosAngeles,
      title: 'City of Angels',
      subtitle: 'Dive into the entertainment capital of the world.',
    },
    {
      img: Tailand,
      title: 'Tropical Thailand',
      subtitle: 'Unwind on beautiful beaches and savor delicious cuisine.',
    },
    {
      img: Turkia,
      title: 'Magical Turkey',
      subtitle: 'Explore the rich history and stunning landscapes of Turkey.',
    },
  ];

  return (
    <div className="relative border w-full h-auto" id="hero">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-screen w-full"
      >
        {images.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="absolute z-10 flex flex-col items-center justify-center h-full w-full text-center text-white px-4 sm:px-6">
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 sm:mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Cards Section */}
      <div className="container mx-auto px-5 py-10">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white dark:bg-gray-900 dark:text-white p-6 rounded-xl shadow-lg border w-full backdrop-blur-xl">
            <h3 className="text-xl font-semibold mb-4">Amazing Beach</h3>
            <p className="text-zinc-400 dark:text-white">
              Discover stunning beaches and relax under the sun.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 dark:text-white p-6 rounded-xl shadow-lg border w-full backdrop-blur-xl">
            <h3 className="text-xl font-semibold mb-4">Mountain Adventures</h3>
            <p className="text-zinc-400 dark:text-white">
              Embark on thrilling mountain hikes and explore nature.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 dark:text-white p-6 rounded-xl shadow-lg border w-full backdrop-blur-xl">
            <h3 className="text-xl font-semibold mb-4">City Tours</h3>
            <p className="text-zinc-400 dark:text-white">
              Experience the culture and history of iconic cities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
