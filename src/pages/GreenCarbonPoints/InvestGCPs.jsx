
import React, { useState } from "react";

const RedeemGCP = () => {
  const [formData, setFormData] = useState({
    organization: "",
    country: "",
    sector: "",
    contact: "",
    email: "",
    projectTitle: "",
    summary: "",
    technology: "",
    reductionEstimate: "",
    coordinates: "",
    registryType: "",
    files: {},
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Send to backend or upload to IPFS or S3
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        Apply to Register Your Carbon Project
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Organization Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="organization"
            type="text"
            placeholder="Organization / Project Name"
            onChange={handleChange}
            required
            className="p-3 border rounded-lg w-full text-black"
          />
          <input
            name="country"
            type="text"
            placeholder="Country & Region"
            onChange={handleChange}
            required
            className="p-3 border rounded-lg w-full text-black"
          />
          <input
            name="sector"
            type="text"
            placeholder="Sector (Energy, Waste, Forestry...)"
            onChange={handleChange}
            required
            className="p-3 border rounded-lg w-full text-black"
          />
          <input
            name="contact"
            type="text"
            placeholder="Contact Person"
            onChange={handleChange}
            required
            className="p-3 border rounded-lg w-full text-black"
          />
        </div>

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
          className="p-3 border rounded-lg w-full text-black"
        />

        {/* Project Info */}
        <input
          name="projectTitle"
          type="text"
          placeholder="Project Title"
          onChange={handleChange}
          required
          className="p-3 border rounded-lg w-full text-black"
        />
        <textarea
          name="summary"
          placeholder="Brief Project Summary (300 characters max)"
          onChange={handleChange}
          rows={3}
          className="p-3 border rounded-lg w-full text-black"
        />
        <input
          name="technology"
          type="text"
          placeholder="Technology Used (e.g., Biochar)"
          onChange={handleChange}
          required
          className="p-3 border rounded-lg w-full text-black"
        />
        <input
          name="reductionEstimate"
          type="number"
          placeholder="Estimated CO₂ Reduction (tons/year)"
          onChange={handleChange}
          className="p-3 border rounded-lg w-full text-black"
        />
        <input
          name="coordinates"
          type="text"
          placeholder="GPS Coordinates"
          onChange={handleChange}
          className="p-3 border rounded-lg w-full text-black"
        />

        <select
          name="registryType"
          onChange={handleChange}
          required
          className="p-3 border rounded-lg w-full text-black"
        >
          <option value="">-- Select Registry Type --</option>
          <option value="new">New Project</option>
          <option value="transfer">Transferring from Another Registry</option>
        </select>

        {/* File Uploads */}
        <div className="grid md:grid-cols-2 gap-4">
          <label className="block text-black">
            Project Design Document (PDF)
            <input
              name="files.pdd"
              type="file"
              accept=".pdf"
              onChange={handleChange}
              className="block mt-1 text-black"
            />
          </label>
          <label className="block text-black">
            Feasibility Study
            <input
              name="files.feasibility"
              type="file"
              accept=".pdf"
              onChange={handleChange}
              className="block mt-1 text-black"
            />
          </label>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default RedeemGCP;

