import React, { useState, useEffect, useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import Australia from '../../../assets/a-1.jpeg';
import Dubai from '../../../assets/d-1.jpg';
import Island from '../../../assets/i-1.jpg';
import LosAngeles from '../../../assets/los-1.jpg';
import Tailand from '../../../assets/t-1.jpg';
import Tokyo from '../../../assets/t-2.jpg';
import Turkia from '../../../assets/tur-3.jpg';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { StateContext } from '../../../App';

// Set app element for accessibility
Modal.setAppElement('#root');

const Cite = () => {
  // useContext
  const { modalOpen, setModalOpen } = useContext(StateContext);

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  // Data array for the cards
  const countries = [
    {
      img: Tokyo,
      title: 'Tokyo, Japan',
      description:
        'Tokyo is the capital city of Japan, blending traditional temples with modern skyscrapers.',
      details:
        'Tokyo offers an amazing mix of culture, food, technology, and history.',
      population: '37.4 million',
      districts: '23 special wards',
      cities: 'Tokyo, Yokohama, Chiba',
      currency: 'Japanese Yen (JPY)',
    },
    {
      img: Island,
      title: 'Island Getaway',
      description:
        'Relax in the stunning beauty of nature, away from the city noise.',
      details:
        'Islands offer peaceful retreats where you can enjoy the sea, sand, and serenity.',
      population: '500,000',
      districts: 'Various islands',
      cities: 'Main island city, Beach Town',
      currency: 'Island Dollar (ID)',
    },
    {
      img: Australia,
      title: 'Australia Adventure',
      description:
        'Discover the wild landscapes of Australia, from outback deserts to vibrant coral reefs.',
      details:
        'Australia is home to a variety of wildlife and natural wonders.',
      population: '25.7 million',
      districts: '6 states, 2 territories',
      cities: 'Sydney, Melbourne, Brisbane',
      currency: 'Australian Dollar (AUD)',
    },
    {
      img: Dubai,
      title: 'Dubai, UAE',
      description: 'Witness the futuristic skyline and luxury of Dubai.',
      details:
        'Dubai offers endless shopping, world-class resorts, and extraordinary architecture.',
      population: '3.3 million',
      districts: 'Several areas and districts',
      cities: 'Dubai, Abu Dhabi',
      currency: 'UAE Dirham (AED)',
    },
    {
      img: LosAngeles,
      title: 'Los Angeles, USA',
      description: 'The city of dreams and Hollywood glitz.',
      details:
        'Los Angeles offers vibrant culture, iconic spots like the Hollywood sign.',
      population: '3.9 million',
      districts: 'Downtown, Hollywood, Santa Monica',
      cities: 'Los Angeles, Santa Monica, Beverly Hills',
      currency: 'US Dollar (USD)',
    },
    {
      img: Tailand,
      title: 'Tropical Thailand',
      description: 'Relax on beautiful beaches and discover ancient temples.',
      details:
        'Thailand is known for its beautiful islands, street food, and rich cultural heritage.',
      population: '69.8 million',
      districts: '76 provinces',
      cities: 'Bangkok, Chiang Mai, Phuket',
      currency: 'Thai Baht (THB)',
    },
    {
      img: Turkia,
      title: 'Magical Turkey',
      description:
        'Explore the rich history and stunning landscapes of Turkey.',
      details: 'Turkey offers a unique blend of European and Asian cultures.',
      population: '84 million',
      districts: '81 provinces',
      cities: 'Istanbul, Ankara, Izmir',
      currency: 'Turkish Lira (TRY)',
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCardClick = (country) => {
    setSelectedCountry(country);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCountry(null);
  };

  // Card animation using react-spring
  const springProps = useSpring({
    to: { opacity: 1, transform: 'scale(1)' },
    from: { opacity: 0, transform: 'scale(0.9)' },
    config: { tension: 200, friction: 15 },
  });

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="container mx-auto py-20 px-5  font-mono" id="cite">
      <h1 className="text-center text-4xl font-bold mb-8" data-aos="fade-up">
        Explore Countries
      </h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {countries.map((country, index) => (
          <animated.div
            style={springProps}
            key={index}
            className="bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => handleCardClick(country)}
            data-aos="zoom-in" // AOS attribute for card animation
          >
            <div
              className="relative h-48 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${country.img})` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{country.title}</h2>
              <p className="mt-2 text-gray-200">{country.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <button className="text-sm bg-white text-black rounded px-4 py-1">
                  Learn More
                </button>
              </div>
            </div>
          </animated.div>
        ))}
      </div>

      {/* Modal for additional information */}
      {selectedCountry && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Country Details"
          className="fixed inset-0 font-mono flex items-center justify-center bg-black/70 p-6"
        >
          <div className="bg-white dark:bg-gray-900 dark:text-white p-8 rounded-lg max-w-2xl w-full text-center">
            <div className="relative">
              <img
                src={selectedCountry.img}
                alt={selectedCountry.title}
                className="w-full h-72 object-cover rounded-lg mb-4"
                style={{ filter: 'grayscale(50%) brightness(80%)' }} // Adding gradient filter effect
              />
            </div>
            <h2 className="text-3xl font-bold mb-4">{selectedCountry.title}</h2>
            <p className="text-lg mb-4">{selectedCountry.details}</p>
            <p>
              <strong>Population:</strong> {selectedCountry.population}
            </p>
            <p>
              <strong>Districts:</strong> {selectedCountry.districts}
            </p>
            <p>
              <strong>Cities:</strong> {selectedCountry.cities}
            </p>
            <p>
              <strong>Currency:</strong> {selectedCountry.currency}
            </p>
            <div className="mt-6 flex justify-between gap-4 items-center">
              <button
                onClick={closeModal}
                className="bg-gray-500 w-full text-center text-white py-2 px-4 rounded-lg"
              >
                Close
              </button>
              <button
                onClick={toggleModal}
                className="bg-gray-500 w-full text-center text-white py-2 px-4 rounded-lg"
              >
                Contact
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Cite;
