import React, { useState, useMemo } from 'react';

const allResources = [
    { id: 1, type: 'video', title: 'Guided Meditation for Stress Relief', language: 'English', url: '#' },
    { id: 2, type: 'audio', title: 'Calming Sounds for Better Sleep', language: 'English', url: '#' },
    { id: 3, type: 'guide', title: 'Understanding Anxiety (A Guide)', language: 'Hindi', url: '#' },
    { id: 4, type: 'video', title: 'Yoga for Beginners', language: 'English', url: '#' },
    { id: 5, type: 'article', title: '5 Tips for Better Time Management', language: 'English', url: '#' },
    { id: 6, type: 'guide', title: 'மன அழுத்தத்தை நிர்வகித்தல் (Managing Stress)', language: 'Tamil', url: '#' },
    { id: 7, type: 'audio', title: 'Positive Affirmations Audio', language: 'Hindi', url: '#' },
];

const ResourceHubPage = () => {
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredResources = useMemo(() => {
        return allResources
            .filter(resource => filter === 'All' || resource.type === filter.toLowerCase())
            .filter(resource => resource.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [filter, searchTerm]);

    const FilterButton = ({ name }) => (
        <button
            onClick={() => setFilter(name)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                filter === name 
                ? 'bg-purple-600 text-white shadow-md' 
                : 'bg-white/50 text-gray-700 hover:bg-white/80'
            }`}
        >
            {name}
        </button>
    );

    const ResourceIcon = ({ type }) => {
        const icons = {
            video: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>,
            audio: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v7l4 2"></path></svg>,
            guide: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>,
            article: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        };
        return <div className="text-purple-600">{icons[type]}</div>;
    };
    
    return (
        <div className="w-full animate-fade-in-up">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Resource Hub</h1>
                <p className="text-gray-600 mt-2 text-lg">Your library of tools for wellness and growth.</p>
            </div>
            
            <div className="p-4 mb-8 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                    <FilterButton name="All" />
                    <FilterButton name="Video" />
                    <FilterButton name="Audio" />
                    <FilterButton name="Guide" />
                    <FilterButton name="Article" />
                </div>
                <div className="relative w-full md:w-auto">
                     <input 
                        type="text"
                        placeholder="Search resources..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full md:w-64 pl-10 pr-4 py-2 bg-white/50 rounded-full border-none focus:ring-2 focus:ring-purple-500 shadow-inner"
                     />
                     <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                     </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.length > 0 ? (
                    filteredResources.map(resource => (
                        <a href={resource.url} key={resource.id} className="group block p-6 bg-white/40 backdrop-blur-lg rounded-2xl shadow-md border border-white/30 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>
                                <ResourceIcon type={resource.type} />
                            </div>
                            <span className="text-sm font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">{resource.language}</span>
                        </a>
                    ))
                ) : (
                     <div className="md:col-span-2 lg:col-span-3 text-center py-12">
                        <p className="text-xl text-gray-600">No resources found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResourceHubPage;