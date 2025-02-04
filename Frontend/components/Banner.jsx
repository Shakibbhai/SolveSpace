import React from "react";
import banner from "../../public/Banner2.png";

function Banner() {
  return (
    <div
      className="relative max-w-screen-2xl container mx-auto h-[500px] md:h-[600px] px-4 md:px-20 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white text-center md:text-left">
        <div className="space-y-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            Hello, welcomes here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-sm md:text-xl">
            SolveSpace is the tutor management software for private tutors,
            tutoring centers, and test prep centers. Student management,
            flexible scheduling, online payments, and more – all in one place!
          </p>
          <label className="flex items-center gap-2 bg-white text-black p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow outline-none bg-transparent"
              placeholder="Email"
            />
          </label>
        </div>
        <button className="btn mt-6 btn-secondary">Get Started today!</button>
      </div>
    </div>
  );
}

export default Banner;
