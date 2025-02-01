import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const ReturnPolicy = () => {
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

        <h1 className="text-4xl font-bold mb-8">Return Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Eligibility for Returns</h2>
          <p className="text-lg">
            At Argich, we want you to be completely satisfied with your purchase. If you are not satisfied, you may return eligible items within <strong>30 days</strong> of delivery for a refund or exchange. To be eligible for a return:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>The item must be unused, in its original packaging, and in the same condition as when you received it.</li>
            <li>The item must be accompanied by the original receipt or proof of purchase.</li>
            <li>Certain items, such as perishable goods or personalized products, may not be eligible for return. Please check the product description for details.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How to Initiate a Return</h2>
          <p className="text-lg">
            To initiate a return, please follow these steps:
          </p>
          <ol className="list-decimal list-inside text-lg">
            <li>Contact our customer support team at <a href="mailto:support@argich.com" className="underline">support@argich.com</a> to request a Return Authorization (RA) number.</li>
            <li>Pack the item securely in its original packaging, including all accessories and documentation.</li>
            <li>Include the RA number on the outside of the package.</li>
            <li>Ship the item to the address provided by our customer support team.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Refund Process</h2>
          <p className="text-lg">
            Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Refunds will be processed within <strong>7-10 business days</strong>.</li>
            <li>Refunds will be issued to the original payment method used for the purchase.</li>
            <li>Shipping costs are non-refundable unless the return is due to an error on our part.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Exchanges</h2>
          <p className="text-lg">
            If you would like to exchange an item, please indicate this when requesting your Return Authorization. Exchanges are subject to product availability. If the requested item is not available, we will issue a refund instead.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Damaged or Defective Items</h2>
          <p className="text-lg">
            If you receive a damaged or defective item, please contact us immediately at <a href="mailto:support@argich.com" className="underline">support@argich.com</a>. We will provide instructions for returning the item and will cover the cost of return shipping.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p className="text-lg">
            If you have any questions about our return policy, please contact us at:
          </p>
          <p className="text-lg">
            Email: <a href="mailto:info@argichfarmerschoice.com" className="underline">info@argichfarmerschoice.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ReturnPolicy;