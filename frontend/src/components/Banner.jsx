
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'; // Ensure this file includes your animation styles

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };

  return (
    <div className="h-80">
      <Slider {...settings}>
        <div>
          <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner1.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn">Welcome to Bangladeshi Handicrafts</h1>
              <p className="mt-4 text-xl animate-slideIn">Bangladeshi Handicrafts are more attractive which is the golden part of bangladeshi heritage.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner2.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn">মৃৎশিল্প</h1>
              <p className="mt-4 text-xl animate-slideIn">Ceramic art </p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner3.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn">Clay Art</h1>
              <p className="mt-4 text-xl animate-slideIn">Clay art is a versatile and ancient form of art that involves shaping and molding clay into various forms, from decorative items to functional pottery</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner4.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn">Cane Art(বেতশিল্প)</h1>
              <p className="mt-4 text-xl animate-slideIn">Chairs, tables, and other household items are often made from intricately woven cane</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner5.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn">woolen Art (উলের শিল্প)</h1>
              <p className="mt-4 text-xl animate-slideIn">Woolen art, is a form of handicraft in Bangladesh that involves creating items using wool through knitting, crocheting, or felting</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner6.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn">Walpainting</h1>
              <p className="mt-4 text-xl animate-slideIn">Wall painting is a form of art where walls are used as the canvas for artistic expression</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner8.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn">Nakshi Katha</h1>
              <p className="mt-4 text-xl animate-slideIn">নকশি কাঁথা (Nakshi Kantha) is a traditional form of embroidered quilt from Bengal, including Bangladesh </p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner9.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn">Punch Niddle Art</h1>
              <p className="mt-4 text-xl animate-slideIn"> Punch needle art is a form of embroidery that uses a specialized needle to punch loops of thread or yarn through fabric, creating a textured, raised surface</p>
            </div>
          </div>
        </div>
        <div>
        <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner10.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn">Lippon Art</h1>
              <p className="mt-4 text-xl animate-slideIn"> This craft involves decorating walls with intricate patterns made of mud and small mirrors, creating stunning relief work that reflects light beautifully.</p>
            </div>
          </div>
        </div>
        <div>
        <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner11.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn">pot art</h1>
              <p className="mt-4 text-xl animate-slideIn">Artisans use paints, brushes, and other tools to create designs on the surface of clay pots </p>
            </div>
          </div>
        </div>
        <div>
        <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner12.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn"> Glass Painting</h1>
              <p className="mt-4 text-xl animate-slideIn">Artists use enamel paints to create designs on glass. These paints are often baked in an oven to set the colors and make them permanent. </p>
            </div>
          </div>
        </div>
        <div>
        <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner14.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn"> Tin Art</h1>
              <p className="mt-4 text-xl animate-slideIn">Tin art, known as টিন শিল্প (Tin Shilpo) in Bengali, involves creating decorative and functional items from tin, a metal that is easy to work with and has a distinctive shine </p>
            </div>
          </div>
        </div>
        <div>
        <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner15.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn"> Jamdani Saree</h1>
              <p className="mt-4 text-xl animate-slideIn">জামদানি শাড়ি হল বাংলাদেশের হাতে বোনা সিল্ক শাড়ির একটি ঐতিহ্যবাহী  যা এর জটিল নিদর্শন এবং সূক্ষ্ম কারুকার্যের জন্য বিখ্যাত</p>
            </div>
          </div>
        </div>
        <div>
        <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner17.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn">Jute Art </h1>
              <p className="mt-4 text-xl animate-slideIn">Jute art, known as জুট শিল্প (Jute Shilpo) in Bengali, involves crafting items using jute fibers</p>
            </div>
          </div>
        </div>
        <div>
        <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/banner18.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold animate-fadeIn">Monipuri Shawal </h1>
              <p className="mt-4 text-xl animate-slideIn">Manipuri shawl, known as মণিপুরি শাড়ি (Manipuri Shawal) in Bengali, is a traditional textile</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
