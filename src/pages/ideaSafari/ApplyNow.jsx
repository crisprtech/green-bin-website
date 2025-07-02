import React, { useState } from 'react';

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    region: '',
    idNumber: '',
    nssfNumber: '',
    experienceLocation: '',
    reason: '',
    projectSummary: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Apply for Idea Safari</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded" />
        <input type="text" name="region" placeholder="Region" value={formData.region} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded" />
        <input type="text" name="idNumber" placeholder="ID Number" value={formData.idNumber} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded" />
        <input type="text" name="nssfNumber" placeholder="NSSF Number" value={formData.nssfNumber} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded" />
        <input type="text" name="experienceLocation" placeholder="Where do you want to experience Idea Safari?" value={formData.experienceLocation} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded" />
        <textarea name="reason" placeholder="Reason for applying" value={formData.reason} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded min-h-[100px]"></textarea>
        <textarea name="projectSummary" placeholder="Project Summary" value={formData.projectSummary} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded min-h-[150px]"></textarea>
        <button type="submit" className="w-full bg-green-500 text-white font-semibold py-3 rounded hover:bg-green-700 transition duration-300">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyNow;
