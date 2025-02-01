import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const AppNavigationHelp = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="min-h-screen bg-[#005C2D] text-[#FFFFFF] p-8">
      <div className="max-w-4xl mx-auto">
        {/* Go Back Link */}
        <button
          onClick={() => navigate(-1)} // Navigate to the previous page
          className="text-lg underline hover:text-[#CCCCCC] mb-8"
        >
          &larr; Go Back
        </button>

        <h1 className="text-4xl font-bold mb-8">How to Navigate Through the App</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Watch These Videos</h2>
          <p className="text-lg mb-4">
            To help you get started, we've created two short videos that walk you through the key features of the Argich app. Please watch the videos below:
          </p>

          {/* Video 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Video 1: Getting Started</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.loom.com/embed/dfefead7f2e949f9b996dc1ad51f599c"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Video 2 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Video 2: Advanced Features</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.loom.com/embed/6bedae19ddff4ff7a5f10f38a5b5c763"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Need Further Assistance?</h2>
          <p className="text-lg">
            If you have any questions or need additional help, feel free to reach out to us at:
          </p>
          <p className="text-lg">
            Email: <a href="mailto:info@argichfarmerschoice.com" className="underline">info@argichfarmerschoice.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AppNavigationHelp;