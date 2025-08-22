import React, { useState } from "react";

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    region: "",
    idNumber: "",
    nssfNumber: "",
    experienceLocation: "",
    reason: "",
    projectSummary: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-lg  mx-auto p-8 bg-white rounded-lg shadow-lg ">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        Apply for Idea Safari
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="region"
          placeholder="Region"
          value={formData.region}
          onChange={handleChange}
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="idNumber"
          placeholder="ID Number"
          value={formData.idNumber}
          onChange={handleChange}
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="nssfNumber"
          placeholder="NSSF Number"
          value={formData.nssfNumber}
          onChange={handleChange}
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="experienceLocation"
          placeholder="Experience Location"
          value={formData.experienceLocation}
          onChange={handleChange}
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          name="reason"
          placeholder="Reason for Applying"
          value={formData.reason}
          onChange={handleChange}
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[100px]"
        />
        <textarea
          name="projectSummary"
          placeholder="Project Summary"
          value={formData.projectSummary}
          onChange={handleChange}
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[150px]"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyNow;
