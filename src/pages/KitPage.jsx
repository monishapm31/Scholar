import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const kits = [
  { id: 1, name: "Kit 1" },
  { id: 2, name: "Kit 2" },
  { id: 3, name: "Kit 3" },
  { id: 4, name: "Kit 4" },
  { id: 5, name: "Kit 5" },
  { id: 6, name: "Kit 6" },
  { id: 7, name: "Kit 7" },
  { id: 8, name: "Kit 8" },
  { id: 9, name: "Kit 9" },
  { id: 10, name: "Kit 10" },
];

const KitPage = () => {
  const navigate = useNavigate();
  const [bookedKits, setBookedKits] = useState([]); // Track booked kits

  const handleKitClick = (kitId) => {
    if (bookedKits.includes(kitId)) {
      alert("This kit is already booked. Try another kit.");
      return;
    }
    navigate(`/book-slot/${kitId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Select a Kit</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {kits.map((kit) => (
          <div
            key={kit.id}
            className={`p-6 rounded-lg shadow-md text-center transition cursor-pointer ${
              bookedKits.includes(kit.id)
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white hover:shadow-lg"
            }`}
            onClick={() => handleKitClick(kit.id)}
          >
            <h3 className="text-lg font-semibold">{kit.name}</h3>
            {bookedKits.includes(kit.id) && <p className="text-red-600">Already Booked</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KitPage;
