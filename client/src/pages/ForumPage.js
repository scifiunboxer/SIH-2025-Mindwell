import React, { useState } from 'react';

const questionnaire = [
    { id: 'A1', question: "Been feeling perfectly well and in good health?", options: ["Better than usual", "Same as usual", "Worse than usual", "Much worse than usual"] },
    { id: 'A2', question: "Been feeling in need of a good tonic?", options: ["Not at all", "No more than usual", "Rather more than usual", "Much more than usual"] },
    { id: 'A3', question: "Been feeling run down and out of sorts?", options: ["Not at all", "No more than usual", "Rather more than usual", "Much more than usual"] },
    { id: 'B1', question: "Lost much sleep over worry?", options: ["Not at all", "No more than usual", "Rather more than usual", "Much more than usual"] },
    { id: 'B3', question: "Felt constantly under strain?", options: ["Not at all", "No more than usual", "Rather more than usual", "Much more than usual"] },
    { id: 'C1', question: "Been managing to keep yourself busy and occupied?", options: ["More so than usual", "Same as usual", "Rather less than usual", "Much less than usual"] },
    { id: 'C7', question: "Been able to enjoy your normal day-to-day activities?", options: ["More so than usual", "Same as usual", "Less so than usual", "Much less than usual"] },
    { id: 'D1', question: "Been thinking of yourself as a worthless person?", options: ["Not at all", "No more than usual", "Rather more than usual", "Much more than usual"] },
    { id: 'D2', question: "Felt that life is entirely hopeless?", options: ["Not at all", "No more than usual", "Rather more than usual", "Much more than usual"] },
    { id: 'D4', question: "Thought of the possibility that you might make away with yourself?", options: ["Definitely not", "I don’t think so", "Has crossed my mind", "Definitely have"] },
];

const QuestionItem = ({ item, selectedAnswer, onAnswerChange }) => (
    <div className="p-6 bg-white/40 backdrop-blur-lg rounded-2xl shadow-md border border-white/30 mb-6">
        <p className="text-xl font-semibold text-gray-800 mb-4">{item.question}</p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-2">
            {item.options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => onAnswerChange(item.id, option)}
                    className={`flex-1 min-w-[120px] text-sm text-center px-4 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 ${
                        selectedAnswer === option
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                >
                    {option}
                </button>
            ))}
        </div>
    </div>
);

const ForumPage = () => {
    const [answers, setAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAnswerChange = (questionId, answer) => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would process the answers here
        setIsSubmitted(true);
    };

    const allQuestionsAnswered = Object.keys(answers).length === questionnaire.length;

    if (isSubmitted) {
        return (
            <div className="flex items-center justify-center min-h-[80vh] w-full animate-fade-in-up">
                <div className="w-full max-w-2xl p-8 text-center bg-white/40 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30">
                    <h1 className="text-4xl font-bold text-purple-700 mb-4">Thank You for Sharing</h1>
                    <p className="text-gray-700 text-lg mb-6">
                        Taking a moment to check in with yourself is a sign of great strength. Remember, these results are just a snapshot, not a label.
                    </p>
                    <p className="text-gray-600">If you feel you need support, please consider booking a session with a counselor.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full animate-fade-in-up">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Wellness Check-in</h1>
                    <p className="text-gray-600 mt-2 text-lg">Take a moment to reflect on your well-being. Your answers are completely confidential.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    {questionnaire.map(item => (
                        <QuestionItem 
                            key={item.id}
                            item={item}
                            selectedAnswer={answers[item.id]}
                            onAnswerChange={handleAnswerChange}
                        />
                    ))}
                    <div className="mt-8">
                        <button
                            type="submit"
                            disabled={!allQuestionsAnswered}
                            className="w-full py-4 text-lg font-bold text-white bg-purple-600 rounded-xl shadow-lg transition-all duration-300 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105"
                        >
                            See My Results
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForumPage;