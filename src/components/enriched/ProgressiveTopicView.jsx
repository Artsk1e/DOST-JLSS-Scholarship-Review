import React, { useState } from 'react';
import StepRenderer from './StepRenderer';

export default function ProgressiveTopicView({ topic, onClose }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showChallenge, setShowChallenge] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [challengeSubmitted, setChallengeSubmitted] = useState(false);

  if (!topic || !topic.steps) {
    return <div className="p-6 text-gray-600">Topic not found</div>;
  }

  const currentStep = topic.steps[currentStepIndex];
  const totalSteps = topic.steps.length;
  const progress = ((currentStepIndex + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      setShowChallenge(false);
      setChallengeSubmitted(false);
    } else {
      setShowChallenge(true);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      setShowChallenge(false);
      setChallengeSubmitted(false);
    }
  };

  const handleSubmitChallenge = () => {
    setChallengeSubmitted(true);
  };

  const isCorrect = selectedAnswer === topic.challenge.correctAnswer;

  return (
    <div className="progressive-topic-view space-y-6">
      {/* Header */}
      <div className="header pb-4 border-b border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{topic.title}</h2>
            <p className="text-sm text-gray-600 mt-1">Topic {topic.topicId}</p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ✕
            </button>
          )}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-600 mt-2">
          Step {currentStepIndex + 1} of {totalSteps}
          {showChallenge && ' + Challenge Quiz'}
        </p>
      </div>

      {/* Main Content Area */}
      <div className="content min-h-96">
        {!showChallenge ? (
          <StepRenderer step={currentStep} />
        ) : (
          <div className="challenge p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg border border-indigo-200">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              🎯 Challenge Quiz
            </h3>
            <p className="text-gray-800 mb-6 text-lg font-semibold">
              {topic.challenge.question}
            </p>

            <div className="space-y-3">
              {topic.challenge.options.map((option, idx) => (
                <label
                  key={idx}
                  className={`flex items-center p-4 rounded border-2 cursor-pointer transition ${
                    selectedAnswer === idx
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-300 hover:border-indigo-400'
                  } ${
                    challengeSubmitted
                      ? idx === topic.challenge.correctAnswer
                        ? 'border-green-600 bg-green-50'
                        : idx === selectedAnswer
                        ? 'border-red-600 bg-red-50'
                        : 'border-gray-300'
                      : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="challenge"
                    value={idx}
                    checked={selectedAnswer === idx}
                    onChange={() => setSelectedAnswer(idx)}
                    disabled={challengeSubmitted}
                    className="w-5 h-5"
                  />
                  <span className="ml-3 text-gray-800">{option}</span>
                  {challengeSubmitted && idx === topic.challenge.correctAnswer && (
                    <span className="ml-auto text-green-600 font-bold">✓</span>
                  )}
                  {challengeSubmitted && idx === selectedAnswer && idx !== topic.challenge.correctAnswer && (
                    <span className="ml-auto text-red-600 font-bold">✗</span>
                  )}
                </label>
              ))}
            </div>

            {challengeSubmitted && (
              <div className={`mt-6 p-4 rounded ${
                isCorrect
                  ? 'bg-green-100 border border-green-400 text-green-800'
                  : 'bg-red-100 border border-red-400 text-red-800'
              }`}>
                <p className="font-bold">
                  {isCorrect ? '🎉 Correct!' : '❌ Incorrect'}
                </p>
                <p className="text-sm mt-2">{topic.challenge.explanation}</p>
              </div>
            )}

            {!challengeSubmitted && selectedAnswer !== null && (
              <button
                onClick={handleSubmitChallenge}
                className="mt-6 w-full bg-indigo-600 text-white py-3 rounded font-bold hover:bg-indigo-700 transition"
              >
                Submit Answer
              </button>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="navigation flex justify-between items-center pt-6 border-t border-gray-200">
        <button
          onClick={handlePrevious}
          disabled={currentStepIndex === 0}
          className="px-6 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition font-medium"
        >
          ← Previous
        </button>

        <div className="step-indicators flex gap-2">
          {topic.steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentStepIndex(idx);
                setShowChallenge(false);
              }}
              className={`w-8 h-8 rounded-full text-xs font-bold transition ${
                idx === currentStepIndex
                  ? 'bg-blue-600 text-white'
                  : idx < currentStepIndex
                  ? 'bg-blue-200 text-blue-900'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              title={topic.steps[idx].title}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className={`px-6 py-2 rounded text-white font-medium transition ${
            showChallenge
              ? 'bg-gray-200 text-gray-700 cursor-default opacity-50'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={showChallenge}
        >
          {currentStepIndex === totalSteps - 1 ? 'Challenge →' : 'Next →'}
        </button>
      </div>
    </div>
  );
}
