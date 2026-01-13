'use client';

import { useState } from 'react';

interface QuestionOption {
  id: string;
  text: string;
  correct: boolean;
}

interface PracticeQuestionProps {
  questionId: string;
  question: string;
  type: 'multiple-choice' | 'short-answer' | 'fill-in';
  options?: QuestionOption[];
  correctAnswer?: string;
  explanation: string;
  hint?: string;
}

export default function PracticeQuestion({
  questionId,
  question,
  type,
  options,
  correctAnswer,
  explanation,
  hint
}: PracticeQuestionProps) {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<string>('');
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);

  const handleMultipleChoice = (optionId: string) => {
    setSelected(optionId);
    const option = options?.find(o => o.id === optionId);
    const correct = option?.correct ?? false;
    setIsCorrect(correct);
    setAnswered(true);
  };

  const handleSubmitAnswer = () => {
    if (type === 'short-answer' || type === 'fill-in') {
      const normalizedAnswer = userAnswer.trim().toLowerCase();
      const normalizedCorrect = (correctAnswer || '').toLowerCase();
      const correct = normalizedAnswer === normalizedCorrect;
      setIsCorrect(correct);
      setAnswered(true);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <div className="mb-4">
        <h4 className="font-semibold text-lg text-gray-900 mb-3">{question}</h4>

        {type === 'multiple-choice' && options && (
          <div className="space-y-3">
            {options.map(option => (
              <button
                key={option.id}
                onClick={() => !answered && handleMultipleChoice(option.id)}
                disabled={answered}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  answered
                    ? option.correct
                      ? 'border-green-500 bg-green-50'
                      : selected === option.id
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 bg-gray-50'
                    : selected === option.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                      selected === option.id
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {selected === option.id && (
                      <span className="text-white text-sm">✓</span>
                    )}
                  </div>
                  <span className="text-gray-700">{option.text}</span>
                  {answered && option.correct && (
                    <span className="ml-auto text-green-600 font-semibold">✓ Correct</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}

        {(type === 'short-answer' || type === 'fill-in') && (
          <div>
            <input
              type="text"
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              placeholder="Type your answer..."
              disabled={answered}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-3"
              onKeyPress={e => e.key === 'Enter' && !answered && handleSubmitAnswer()}
            />
            {!answered && (
              <button
                onClick={handleSubmitAnswer}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Check Answer
              </button>
            )}
          </div>
        )}
      </div>

      {!answered && hint && (
        <button
          onClick={() => setShowHint(!showHint)}
          className="text-sm text-blue-600 hover:text-blue-700 mb-3"
        >
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </button>
      )}

      {showHint && hint && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
          <p className="text-sm text-yellow-800">
            <strong>Hint:</strong> {hint}
          </p>
        </div>
      )}

      {answered && (
        <div
          className={`rounded-lg p-4 mb-3 ${
            isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}
        >
          <p className={`font-semibold mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
            {isCorrect ? '✓ Correct!' : '✗ Not quite right'}
          </p>
          <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
}
