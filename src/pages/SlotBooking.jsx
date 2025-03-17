import React from 'react';
import { useParams } from 'react-router-dom';

const SlotBooking = () => {
  const { kitId } = useParams(); // Get kitId if available

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          {kitId ? `Booking Slot for Kit ${kitId}` : 'Select a Kit to Book a Slot'}
        </h2>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default SlotBooking;
