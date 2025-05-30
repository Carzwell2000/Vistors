import React, { useState } from "react";
import { icon } from "./assets/icons";
import { db } from "./config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Madomasi = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    visitedBefore: "",
    expectationsMet: "",
    ifNotWhy: "",
    gotSomething: "",
    neededAssistance: "",
    satisfactionWithSupport: "",
    rating: "",
    WouldYouRecommendHub: "",
    Why: "",
    improvements: "",
    recommendations: "",
    comment: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "feedback"), formData);
      alert("Feedback submitted successfully!");
      setFormData({
        name: "",
        email: "",
        visitedBefore: "",
        expectationsMet: "",
        ifNotWhy: "",
        gotSomething: "",
        neededAssistance: "",
        satisfactionWithSupport: "",
        rating: "",
        WouldYouRecommendHub: "",
        Why: "",
        improvements: "",
        recommendations: "",
        comment: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500 min-h-screen px-4 sm:px-6 md:px-10 py-6">
      {/* Removed the horizontal divider */}

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
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          FEEDBACK
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 1. Basic Info */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>

          {/* 2. Visit Info */}
          <div>
            <label htmlFor="visitedBefore" className="block text-gray-700 font-medium mb-1">Have you visited the Innovation Hub before?</label>
            <select name="visitedBefore" value={formData.visitedBefore} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* 3. Expectations */}
          <div>
            <label htmlFor="expectationsMet" className="block text-gray-700 font-medium mb-1">Did your visit meet your expectations?</label>
            <select name="expectationsMet" value={formData.expectationsMet} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {formData.expectationsMet === "No" && (
            <div>
              <label htmlFor="ifNotWhy" className="block text-gray-700 font-medium mb-1">If not, why?</label>
              <textarea name="ifNotWhy" value={formData.ifNotWhy} onChange={handleChange} placeholder="Please explain" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none min-h-[60px]" />
            </div>
          )}

          <div>
            <label htmlFor="gotSomething" className="block text-gray-700 font-medium mb-1">Did you benefit from the visit?</label>
            <select name="gotSomething" value={formData.gotSomething} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* 4. Assistance */}
          <div>
            <label htmlFor="neededAssistance" className="block text-gray-700 font-medium mb-1">Were you satisfied with the assistance you received?</label>
            <select name="neededAssistance" value={formData.neededAssistance} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {formData.neededAssistance === "Yes" && (
            <div>
              <label htmlFor="satisfactionWithSupport" className="block text-gray-700 font-medium mb-1">How satisfied were you with the support you received?</label>
              <select name="satisfactionWithSupport" value={formData.satisfactionWithSupport} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                <option value="">Select</option>
                <option value="Very Satisfied">Very Satisfied</option>
                <option value="Satisfied">Satisfied</option>
                <option value="Neutral">Neutral</option>
                <option value="Dissatisfied">Dissatisfied</option>
                <option value="Very Dissatisfied">Very Dissatisfied</option>
              </select>
            </div>
          )}

          {/* 5. Rating */}
          <div>
            <label htmlFor="rating" className="block text-gray-700 font-medium mb-1">Rate us</label>
            <select name="rating" value={formData.rating} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="">Select</option>
              {[1, 2, 3, 4, 5].map((val) => (
                <option key={val} value={val}>{val}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="WouldYouRecommendHub" className="block text-gray-700 font-medium mb-1">Would you recommend the Innovation Hub to others?</label>
            <select name="WouldYouRecommendHub" value={formData.WouldYouRecommendHub} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {formData.WouldYouRecommendHub && (
            <div>
              <label htmlFor="Why" className="block text-gray-700 font-medium mb-1">Why?</label>
              <textarea name="Why" value={formData.Why} onChange={handleChange} placeholder="Please explain" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none min-h-[60px]" />
            </div>
          )}

          {/* 6. Suggestions */}
          <div>
            <label htmlFor="improvements" className="block text-gray-700 font-medium mb-1">In what ways can we improve our services?</label>
            <textarea name="improvements" value={formData.improvements} onChange={handleChange} placeholder="Your suggestions..." className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none min-h-[60px]" />
          </div>

          <div>
            <label htmlFor="recommendations" className="block text-gray-700 font-medium mb-1">Any recommendations?</label>
            <textarea name="recommendations" value={formData.recommendations} onChange={handleChange} placeholder="Additional recommendations..." className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none min-h-[60px]" />
          </div>

          <div>
            <label htmlFor="comment" className="block text-gray-700 font-medium mb-1">Any additional comments</label>
            <textarea name="comment" value={formData.comment} onChange={handleChange} placeholder="Leave a comment..." required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none min-h-[80px]" />
          </div>

          <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 active:bg-green-600 transition duration-200">
            Submit
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/" className="px-4 py-4 inline-block text-blue-600 font-semibold hover:underline bg-green-200">
            Register
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Madomasi;
