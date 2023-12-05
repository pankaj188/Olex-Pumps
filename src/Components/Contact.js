import React, { useState } from 'react';
import Footer from './Footer';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // You would typically make a POST request to your server here
      // and handle the email sending and form submission on the server.
      // For demonstration purposes, we simulate a successful submission.
      // Replace the following line with your actual server request logic.
      await simulateServerRequest(formData);

      setSubmitStatus('success');
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }
  };

  const simulateServerRequest = (data) => {
    return new Promise((resolve, reject) => {
      // Simulate a server request delay
      setTimeout(() => {
        // Replace the following line with your actual server request logic.
        // For now, we just resolve the promise to simulate success.
        resolve();
      }, 1000);
    });
  };


  return (
    <div>  
    <div className=" sm:w-1/4 mx-10 md:w-[720px] md:mx-auto my-16 p-6 bg-slate-50 rounded-md shadow-md">
    <h2 className="md:text-5xl font-semibold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
      {submitStatus === 'success' && (
        <p className="text-green-600 mb-4 md:mx-52">Thank you! Your submission has been received!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 mb-4 md:mx-52">Oops, something went wrong. Please try again later.</p>
      )}
        <div className="mb-4">
          <label htmlFor="name" className="block text-xl font-semibold text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-xl font-semibold text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="enquiry" className="block text-xl font-semibold text-gray-600">
          Enquiry for
          </label>
          <input
            type="enquiry"
            id="enquiry"
            name="enquiry"
            value={formData.enquiry}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-xl font-semibold text-gray-600">
          Phone
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-xl font-semibold text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-8 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;