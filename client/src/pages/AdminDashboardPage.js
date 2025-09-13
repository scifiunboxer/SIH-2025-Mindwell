import React from 'react';

const StatCardIcon = ({ children }) => (
  <div className="absolute top-4 right-4 text-purple-300 opacity-20">
    {children}
  </div>
);

const AdminDashboardPage = () => {
    const anonymizedData = {
        totalUsers: 152,
        appointmentsThisMonth: 43,
        engagementRate: '78%',
        commonIssues: [
            { issue: 'Academic Stress', count: 68, percentage: 45 },
            { issue: 'Anxiety', count: 45, percentage: 30 },
            { issue: 'Social Isolation', count: 21, percentage: 14 },
            { issue: 'Depression', count: 18, percentage: 11 },
        ],
    };

    return (
        <div className="w-full animate-fade-in-up">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Admin Dashboard</h1>
                <p className="text-gray-600 mt-2">Aggregated and anonymized data for institutional insights.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative p-6 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 transform transition-transform duration-300 hover:-translate-y-2">
                     <StatCardIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </StatCardIcon>
                    <h3 className="text-gray-600 text-lg">Total Active Students</h3>
                    <p className="text-5xl font-bold text-purple-700 mt-2">{anonymizedData.totalUsers}</p>
                </div>

                <div className="relative p-6 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 transform transition-transform duration-300 hover:-translate-y-2">
                    <StatCardIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </StatCardIcon>
                    <h3 className="text-gray-600 text-lg">Appointments This Month</h3>
                    <p className="text-5xl font-bold text-purple-700 mt-2">{anonymizedData.appointmentsThisMonth}</p>
                </div>

                <div className="relative p-6 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 transform transition-transform duration-300 hover:-translate-y-2">
                    <StatCardIcon>
                       <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                    </StatCardIcon>
                    <h3 className="text-gray-600 text-lg">Student Engagement Rate</h3>
                    <p className="text-5xl font-bold text-purple-700 mt-2">{anonymizedData.engagementRate}</p>
                </div>
            </div>

            <div className="mt-8 p-6 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Most Discussed Topics</h2>
                <div className="space-y-5">
                    {anonymizedData.commonIssues.map(item => (
                        <div key={item.issue}>
                            <div className="flex justify-between mb-1">
                                <span className="text-base font-medium text-gray-700">{item.issue}</span>
                                <span className="text-sm font-medium text-gray-700">{item.count} mentions</span>
                            </div>
                            <div className="w-full bg-white/50 rounded-full h-4 shadow-inner">
                                <div 
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-width duration-500 ease-in-out" 
                                    style={{ width: `${item.percentage}%` }}>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;