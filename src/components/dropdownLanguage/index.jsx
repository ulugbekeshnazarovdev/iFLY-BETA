import React, { useState } from 'react';

const LanguageDropdown = () => {
  const [language, setLanguage] = useState('uz');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'uz', name: 'Uzbek', icon: 'fi-uz' },
    { code: 'ru', name: 'Russian', icon: 'fi-ru' },
    { code: 'en', name: 'English', icon: 'fi-gb' },
  ];

  const selectedLanguage = languages.find((lang) => lang.code === language);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false); // dropdownni yopish
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown tugmasi */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm"
      >
        <span className={`fi ${selectedLanguage.icon} mr-2`} />
        {selectedLanguage.name}
      </button>

      {/* Dropdown menyusi */}
      {isOpen && (
        <div className="absolute z-50 right-0 mt-2 w-44 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <span className={`fi ${lang.icon} mr-2`} />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
