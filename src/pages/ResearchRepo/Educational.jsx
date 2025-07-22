import React, { useState } from "react";

const courses = [
  {
    title: "AI in Waste Management",
    image: "ai-waste-management.jpg",
    progress: 70,
    category: "climate",
  },
  {
    title: "Renewable Energy Fundamentals",
    image: "renewable-energy.jpg",
    progress: 50,
    category: "green-tech",
  },
  {
    title: "Sustainable Agriculture Practices",
    image: "sustainable-agriculture.jpg",
    progress: 60,
    category: "climate",
  },
  {
    title: "Circular Economy Principles",
    image: "circular-economy.jpg",
    progress: 40,
    category: "recycling",
  },
  {
    title: "Green Building Techniques",
    image: "green-building.jpg",
    progress: 80,
    category: "green-tech",
  },
  {
    title: "Waste to Energy Technologies",
    image: "waste-to-energy.jpg",
    progress: 30,
    category: "recycling",
  },
  {
    title: "Environmental Policy and Management",
    image: "environmental-policy.jpg",
    progress: 55,
    category: "business-policy",
  },
  {
    title: "Carbon Footprint Reduction Strategies",
    image: "carbon-footprint.jpg",
    progress: 75,
    category: "climate",
  },
];

const EducationalPlatform = () => {
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const filterCourses = (category) => {
    const filtered =
      category === "all"
        ? courses
        : courses.filter((course) => course.category === category);
    setFilteredCourses(filtered);
  };

  return (
    <div className="container mx-auto py-8">
      <section id="learning-tracks" className="mb-8">
        <h2 className="text-center text-3xl font-bold mb-4">Learning Tracks</h2>
        <div className="flex justify-center mb-4">
          <button
            onClick={() => filterCourses("all")}
            className="mx-2 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
          >
            All Courses
          </button>
          <button
            onClick={() => filterCourses("climate")}
            className="mx-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Climate Science
          </button>
          <button
            onClick={() => filterCourses("recycling")}
            className="mx-2 text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded"
          >
            Recycling
          </button>
          <button
            onClick={() => filterCourses("green-tech")}
            className="mx-2 text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded"
          >
            Green Tech
          </button>
          <button
            onClick={() => filterCourses("business-policy")}
            className="mx-2 text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
          >
            Business & Policy
          </button>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="featured-courses">
        <h2 className="text-center text-3xl font-bold mb-4">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <div className="bg-gray-200 rounded-full mt-2 h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <button className="mt-4 w-full bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded">
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationalPlatform;
