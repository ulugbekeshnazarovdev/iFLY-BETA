import React from 'react';
import { Header } from './components';
import Main from './components/main';
import Footer from './components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const App = () => {
  return (
    <div className="font-mono">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
