import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const FeedbackPolicy = () => {
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

        <h1 className="text-4xl font-bold mb-8">Feedback Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Purpose</h2>
          <p className="text-lg">
            At Argich, we value your feedback as it helps us improve our products and services. This policy outlines how we collect, use, and respond to feedback from our customers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Collection of Feedback</h2>
          <p className="text-lg">
            We collect feedback through various channels, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Customer surveys</li>
            <li>Product reviews</li>
            <li>Email communications</li>
            <li>Social media interactions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Use of Feedback</h2>
          <p className="text-lg">
            Your feedback is used to:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Improve product quality and customer experience</li>
            <li>Identify areas for service enhancement</li>
            <li>Develop new features and products</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Response to Feedback</h2>
          <p className="text-lg">
            We strive to respond to all feedback in a timely manner. Depending on the nature of the feedback, our response may include:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Acknowledgment of receipt</li>
            <li>Follow-up questions for clarification</li>
            <li>Information on actions taken or planned</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Confidentiality</h2>
          <p className="text-lg">
            All feedback is treated with confidentiality. Personal information associated with feedback will not be shared without your consent, except as required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p className="text-lg">
            If you have any questions about this feedback policy, please contact us at:
          </p>
          <p className="text-lg">
            Email: <a href="mailto:info@argichfarmerschoice.com" className="underline">info@argichfarmerschoice.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default FeedbackPolicy;