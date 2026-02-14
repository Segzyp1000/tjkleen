import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Scheduled = () => {
  const [date, setDate] = useState(new Date());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-32">

      {/* Hero Image */}
      <div className="relative w-full h-[55vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&q=80&w=1400"
          alt="Laundry Service"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-5xl font-black tracking-tight">
            Book Your Pickup
          </h1>
        </div>
      </div>

      {/* Floating Booking Card */}
      <div className="max-w-4xl  mx-auto -mt-12 px-6 relative z-10">
        <div className="backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl p-8 md:p-14 border border-white/40">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-3">
              Select a Pickup Date
            </h2>
            <p className="text-slate-600 text-sm">
              Choose a convenient date and we’ll handle the rest.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-slate-50 p-6 rounded-2xl shadow-inner w-full max-w-md">
              <Calendar
                onChange={setDate}
                value={date}
                minDate={today}
                className="custom-calendar"
              />
            </div>
          </div>

          {/* Selected Date Section */}
          <div className="mt-10 bg-blue-50 rounded-2xl p-6 text-center">
            <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">
              Selected Date
            </p>

            <p className="text-2xl font-black text-blue-600 mb-6">
              {date.toDateString()}
            </p>

            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5 active:scale-95">
              Confirm Pickup
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Scheduled;