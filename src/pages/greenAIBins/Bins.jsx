import React from "react";

const ProductListing = () => {
  const bins = [
    {
      name: "GreenBin AI Mini",
      type: "Basic",
      price: "9,900 GCPs",
      option: "Lease or Buy",
      offer: "10% Off for Early Buyers!",
      image: "path/to/mini-image.png",
    },
    {
      name: "GreenBin AI Standard",
      type: "Standard",
      price: "19,500 GCPs",
      option: "Lease or Buy",
      image: "path/to/standard-image.png",
    },
    {
      name: "GreenBin AI Premium",
      type: "Premium",
      price: "29,900 GCPs",
      option: "Lease or Buy",
      image: "path/to/premium-image.png",
    },
    {
      name: "EcoSmart Bin Pro",
      type: "Premium",
      price: "32,500 GCPs",
      option: "Full Purchase Only",
      image: "path/to/pro-image.png",
    },
    {
      name: "Solar AI Bin",
      type: "Standard",
      price: "22,000 GCPs",
      option: "Lease or Buy",
      image: "path/to/solar-image.png",
    },
    {
      name: "Smart Recycle Bin",
      type: "Basic",
      price: "12,000 GCPs",
      option: "Lease or Buy",
      image: "path/to/recycle-image.png",
    },
  ];

  return (
    <div className="py-20 container mx-auto">
      <h2 className="text-center text-green-600 font-bold text-3xl mb-8">
        Explore Our Smart AI Bins
      </h2>
      <div className="flex flex-wrap justify-center">
        {bins.map((bin, index) => (
          <div key={index} className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={bin.image}
                alt={bin.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{bin.name}</h3>
                <div className="mb-4">
                  <span className="bg-blue-200 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {bin.type} Package
                  </span>
                  <span className="bg-gray-300 text-gray-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                    {bin.option}
                  </span>
                </div>
                <p className="text-green-600 font-bold text-lg">
                  💰 {bin.price}
                </p>
                {bin.offer && (
                  <p className="text-red-600 font-bold">{`🔥 ${bin.offer}`}</p>
                )}
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-green-600 transition mt-4">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
