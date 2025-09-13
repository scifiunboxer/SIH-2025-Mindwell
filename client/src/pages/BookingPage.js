import React, { useState } from 'react';

const counselors = [
  { id: 1, name: 'Dr. Anjali Sharma', specialty: 'Academic Stress & Anxiety' },
  { id: 2, name: 'Mr. Rohan Desai', specialty: 'Depression & Relationships' },
  { id: 3, name: 'Ms. Priya Singh', specialty: 'General Wellness Advisor' },
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'
];

const BookingPage = () => {
    const [selectedCounselor, setSelectedCounselor] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleBooking = (e) => {
        e.preventDefault();
        if (selectedCounselor && selectedDate && selectedTime) {
            setIsConfirmed(true);
        }
    };
    
    const CalendarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    );

    if (isConfirmed) {
        return (
            <div className="flex items-center justify-center min-h-[80vh] w-full animate-fade-in-up">
                <div className="w-full max-w-2xl p-8 text-center bg-white/40 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30">
                    <h1 className="text-4xl font-bold text-purple-700 mb-4">Appointment Confirmed!</h1>
                    <p className="text-gray-700 text-lg mb-6">
                        Your appointment with <strong>{counselors.find(c => c.id === selectedCounselor).name}</strong> on <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> has been successfully scheduled.
                    </p>
                    <p className="text-gray-600">You will receive an email confirmation shortly. Please be on time.</p>
                </div>
            </div>
        );
    }
    
    return (
        <div className="w-full animate-fade-in-up">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 tracking-tight mb-8 text-center">Book a Confidential Session</h1>

                <div className="p-8 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20">
                    <form onSubmit={handleBooking} className="space-y-8">
                        <div>
                            <label className="text-xl font-semibold text-gray-700 mb-4 block">1. Select a Counselor</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {counselors.map(counselor => (
                                    <button
                                        key={counselor.id}
                                        type="button"
                                        onClick={() => setSelectedCounselor(counselor.id)}
                                        className={`p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                                            selectedCounselor === counselor.id 
                                            ? 'bg-purple-600 text-white shadow-lg' 
                                            : 'bg-white/50 hover:bg-white/80'
                                        }`}
                                    >
                                        <p className="font-bold text-lg">{counselor.name}</p>
                                        <p className="text-sm">{counselor.specialty}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="date" className="text-xl font-semibold text-gray-700 mb-4 block">2. Choose a Date</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    id="date"
                                    value={selectedDate}
                                    onChange={e => setSelectedDate(e.target.value)}
                                    className="w-full p-4 pl-12 bg-white/50 rounded-xl border-none focus:ring-2 focus:ring-purple-500 shadow-inner"
                                    min={new Date().toISOString().split("T")[0]}
                                />
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                    <CalendarIcon />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="text-xl font-semibold text-gray-700 mb-4 block">3. Pick a Time Slot</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                                {timeSlots.map(time => (
                                    <button
                                        key={time}
                                        type="button"
                                        onClick={() => setSelectedTime(time)}
                                        className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-105 text-center ${
                                            selectedTime === time
                                            ? 'bg-purple-600 text-white shadow-lg'
                                            : 'bg-white/50 hover:bg-white/80'
                                        }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={!selectedCounselor || !selectedDate || !selectedTime}
                                className="w-full py-4 text-lg font-bold text-white bg-purple-600 rounded-xl shadow-lg transition-all duration-300 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105"
                            >
                                Confirm Appointment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;