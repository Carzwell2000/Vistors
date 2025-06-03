import React, { useState } from "react";
import { icon } from "./assets/icons";
import { db } from "./config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    department: "",
    email: "",
    phone: "",
    purpose: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "visitors"), formData);
      alert("Request sent successfully!");
      setFormData({
        name: "",
        date: "",
        department: "",
        email: "",
        phone: "",
        purpose: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-blue-500 px-4 sm:px-6 md:px-10 py-6 ">

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-center md:text-left mb-8">
        <img src={icon} alt="icon" className="h-16 w-16 sm:h-20 sm:w-20" />
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            CHINHOYI UNIVERSITY OF TECHNOLOGY
          </h1>
          <p className="text-md sm:text-lg text-white font-medium">
            RESEARCH INNOVATION & BUSINESS INCUBATION
          </p>
        </div>
        <img
          src={icon}
          alt="icon"
          className="hidden md:block h-16 w-16 sm:h-20 sm:w-20"
        />
      </div>

      <div className="w-full max-w-xl mx-auto p-6 sm:p-8 bg-white shadow-xl rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Visitor 's Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Full Name(s)
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-gray-700 font-medium mb-1">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="department" className="block text-gray-700 font-medium mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              placeholder="Enter department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="purpose" className="block text-gray-700 font-medium mb-1">
              Purpose of Visit
            </label>
            <textarea
              name="purpose"
              placeholder="Purpose of visit"
              value={formData.purpose}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none min-h-[80px]"
            />
          </div>


          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-bold rounded-lg transition duration-200"
          >
            Submit
          </button>


          <div className="text-center mt-4">
            <Link
              to="/madomasi"
              className="w-full inline-block text-blue-600 font-semibold py-2 px-4 rounded transition duration-200"
            >
              Give Feedback
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default App;
