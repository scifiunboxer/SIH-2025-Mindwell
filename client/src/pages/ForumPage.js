import React, { useState } from 'react';

// Mock data for forum posts
const mockPosts = [
    { id: 1, title: "Feeling overwhelmed with final exams", author: 'Anonymous', time: '2 hours ago', replies: 12, tags: ['Exams', 'Stress'] },
    { id: 2, title: "Tips for making friends in a new city?", author: 'Riya S.', time: '8 hours ago', replies: 8, tags: ['Social', 'Friendship'] },
    { id: 3, title: "How do you deal with procrastination?", author: 'Anonymous', time: '1 day ago', replies: 23, tags: ['Productivity', 'Study'] },
    { id: 4, title: "Just need to vent about my roommate situation", author: 'Amit K.', time: '2 days ago', replies: 5, tags: ['Relationships', 'Venting'] },
];

const ForumPage = () => {
    // In a real app, this would be fetched from your API
    const [posts] = useState(mockPosts);
    return (
        <div className="min-h-[80vh] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Peer Support Forum</h1>
                    <p className="text-gray-600 mt-2 text-lg">A safe and anonymous space to share and connect.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Forum Posts List */}
                    <div className="lg:col-span-2 space-y-6">
                        {posts.map(post => (
                            <div key={post.id} className="p-6 bg-white/40 backdrop-blur-lg rounded-2xl shadow-md border border-white/30 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                                <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
                                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                                    <span>By <strong>{post.author}</strong></span>
                                    <span>•</span>
                                    <span>{post.time}</span>
                                    <span>•</span>
                                    <span>{post.replies} replies</span>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* "Create Post" Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 p-6 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Share Your Thoughts</h3>
                            <p className="text-gray-600 mb-6">Create a new post to start a discussion. You can choose to post anonymously.</p>
                            <button className="w-full py-3 text-lg font-bold text-white bg-purple-600 rounded-xl shadow-lg transition-all duration-300 hover:bg-purple-700 transform hover:scale-105">
                                Create New Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForumPage;