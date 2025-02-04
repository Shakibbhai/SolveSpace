import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white">
      {/* Contact Section */}
      <div className="flex flex-col items-center py-12">
        <h2 className="text-4xl font-bold mb-4">Contact us</h2>
        <p className="text-lg">HEARD ENOUGH? ➜</p>
        <a
          href="#"
          className="mt-4 bg-yellow-500 text-black font-bold py-2 px-6 rounded-full flex items-center hover:bg-yellow-600"
        >
          <span>Get in Touch</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      {/* Footer Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20 py-10 border-t border-gray-700">
        {/* Solve Space Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Solve Space</h3>
          <p className="text-gray-400">
            The all-in-one tutor management software for private tutors, tutoring centers, and test prep centers.
          </p>
        </div>

        {/* Office Locations */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Platform</h3>
          <p>
            <strong>Bangladesh,Dhaka:</strong>
            <br />
            tution@solvespace.com
            <br />
            +880-1829750291
            <br />
            shahidullah hall,University of Dhaka.
          </p>
          <p className="mt-4">
            <strong>Dhaka:</strong>
            <br />
            DU@solvespace.com
            <br />
            +880-1829750291
            <br />
            Amar Ekushey hall,University of Dhaka.
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-14 mt-4">
            {/* Facebook */}
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img
                src="fb.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            {/* Twitter */}
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img
                src="linkd.png"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/fb.png"
                alt="Instagram"
                className="w-3 h-6"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 border-t border-gray-700 text-gray-400">
        <p>
          © {new Date().getFullYear()} Solve Space. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
