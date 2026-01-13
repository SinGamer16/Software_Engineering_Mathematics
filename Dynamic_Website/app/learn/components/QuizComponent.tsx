'use client';

import { useState } from 'react';
import PracticeQuestion from './PracticeQuestion';

interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'short-answer' | 'fill-in';
  options?: Array<{ id: string; text: string; correct: boolean }>;
  correctAnswer?: string;
  explanation: string;
  hint?: string;
}

interface QuizComponentProps {
  title: string;
  description: string;
  questions: QuizQuestion[];
  moduleName: string;
}

export default function QuizComponent({
  title,
  description,
  questions,
  moduleName
}: QuizComponentProps) {
  const [quizStarted, setQuizStarted] = useState(false);
  const [scores, setScores] = useState<Record<string, boolean>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleQuestionAnswer = (questionId: string, isCorrect: boolean) => {
    setScores(prev => ({
      ...prev,
      [questionId]: isCorrect
    }));
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCompleted(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getScore = () => {
    const correct = Object.values(scores).filter(v => v).length;
    return { correct, total: questions.length };
  };

  const score = getScore();
  const percentage = Math.round((score.correct / score.total) * 100);

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 max-w-2xl w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Quiz Details:</strong> This quiz contains {questions.length} questions about {moduleName}. You'll receive feedback for each answer.
            </p>
          </div>

          <button
            onClick={() => setQuizStarted(true)}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quiz Complete!</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-600 mb-4">{percentage}%</div>
              <p className="text-2xl text-gray-900 mb-2">
                You scored {score.correct} out of {score.total}
              </p>
              <p className={`text-lg ${
                percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {percentage >= 80
                  ? '🎉 Excellent work!'
                  : percentage >= 60
                  ? '👍 Good effort!'
                  : '📚 Keep practicing!'}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Results Summary</h3>
            <div className="space-y-3">
              {questions.map((q, index) => (
                <div
                  key={q.id}
                  className={`flex items-center p-3 rounded-lg ${
                    scores[q.id]
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-red-50 border border-red-200'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 text-white font-semibold ${
                    scores[q.id] ? 'bg-green-600' : 'bg-red-600'
                  }`}>
                    {scores[q.id] ? '✓' : '✗'}
                  </span>
                  <span className="flex-1 text-gray-700">
                    Question {index + 1}: {q.question.substring(0, 50)}...
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => {
                setQuizStarted(false);
                setCurrentQuestionIndex(0);
                setCompleted(false);
                setScores({});
              }}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Retake Quiz
            </button>
            <button
              onClick={() => window.history.back()}
              className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Back to Module
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isAnswered = currentQuestion.id in scores;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            <span className="text-sm text-gray-600">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <PracticeQuestion
            questionId={currentQuestion.id}
            question={currentQuestion.question}
            type={currentQuestion.type}
            options={currentQuestion.options}
            correctAnswer={currentQuestion.correctAnswer}
            explanation={currentQuestion.explanation}
            hint={currentQuestion.hint}
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentQuestionIndex === 0
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            ← Previous
          </button>

          <div className="text-sm text-gray-600">
            {currentQuestionIndex + 1} / {questions.length}
          </div>

          <button
            onClick={goToNextQuestion}
            disabled={!isAnswered}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              !isAnswered
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'} →
          </button>
        </div>
      </div>
    </div>
  );
}
