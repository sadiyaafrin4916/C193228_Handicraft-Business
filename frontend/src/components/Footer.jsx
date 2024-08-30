// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 via-yellow-500  p-5 shadow-lg">{'>'}
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-lg font-bold">Bangladeshi Handicrafts(বাংলাদেশী হস্তশিল্প)</h2>
          <p>Bangladesh is renowned for its rich tradition of handicrafts, which reflect the country’s cultural heritage and artisanal skills passed down through generations</p>
        </div>
        <div className="flex justify-center space-x-8 mb-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
         
        </div>
        <div className="mb-4">
          <p>Contact us: <a href="mailto:info@handicraftsbusiness.com" className="hover:underline">info@handicraftsbusiness.com</a></p>
          <p>Phone: +88011222345678</p>
          <p>Address: Kumira Chittagong</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=160&id=DUEq8l5qTqBE&format=png" alt="whatsapp" className="w-6 h-6" />
          </a>

          <a href="https://www.messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://www.svgrepo.com/show/299475/messenger.svg" alt="messenger" className="w-6 h-6" />
          </a>
          <a href="https://www.telegram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://www.svgrepo.com/show/299513/telegram.svg" alt="telegram" className="w-6 h-6" />
          </a>

        </div>
        <p className="mt-4">&copy; 2024 Bangladeshi Handicrafts Business. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
