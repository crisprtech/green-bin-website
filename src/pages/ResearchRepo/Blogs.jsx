import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    category: "Waste Management",
    title: "Innovative Waste Solutions in Urban Areas",
    image: "waste-management.jpg",
    excerpt:
      "Discover cutting-edge waste management techniques making cities cleaner.",
  },
  {
    id: 2,
    category: "Conservation",
    title: "Protecting Our Green Spaces",
    image: "conservation.jpg",
    excerpt: "How communities are working together to preserve nature.",
  },
  {
    id: 3,
    category: "Sustainability",
    title: "Eco-Friendly Living: Simple Steps to Start",
    image: "sustainability.jpg",
    excerpt: "Practical tips on making your lifestyle more sustainable.",
  },
  {
    id: 4,
    category: "Recycling",
    title: "Revolutionizing Recycling: What's Next?",
    image: "recycling.jpg",
    excerpt: "Innovations that are changing the recycling industry.",
  },
  {
    id: 5,
    category: "Green Tech",
    title: "The Role of Technology in a Greener Future",
    image: "green-tech.jpg",
    excerpt: "Exploring green technologies driving environmental change.",
  },
  {
    id: 6,
    category: "Eco-Living",
    title: "Zero-Waste Homes: A Growing Trend",
    image: "eco-living.jpg",
    excerpt: "How people are reducing waste in their households.",
  },
];

const BlogScreen = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Introduction Section */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="blog-intro.jpg"
          alt="Blog Introduction"
          className="rounded-lg mb-4 w-full h-auto"
        />
        <h2 className="text-3xl font-bold mb-2">Explore GreenBin Insights</h2>
        <p className="text-gray-600">
          Stay updated with the latest in waste management, sustainability, and
          eco-living.
        </p>
      </motion.div>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{blog.category}</p>
              <p className="text-gray-700">{blog.excerpt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogScreen;
