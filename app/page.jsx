"use client"
import Feed from "@components/Feed";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
const Home = () => {
  const text = "Explore captivating blogs that ignite your imagination. Dive into a world of inspiring narratives and endless stories, waiting to be unveiled";
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const intervalId = setInterval(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [text, currentIndex]);

  return (

    <section className='w-full flex-center flex-col mt-6'>
      <h1 className='head_text text-center scale-up-center'>

        Discover, Explore, and Inspire
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> Unveiling a World of Endless Stories</span>
      </h1>
      <p className='desc text-center mt-8'>
        {currentText}
      </p>

      {/* <div className="flex items-center justify-center w-full rounded-full mt-20 gap-x-2">


      </div> */}
      {/* <Feed /> */}
    </section>
  )
};

export default Home;
