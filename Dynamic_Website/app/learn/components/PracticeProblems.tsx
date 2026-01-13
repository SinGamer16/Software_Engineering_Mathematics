"use client";

import React, { useState } from "react";

type QuestionType = "multiple-choice" | "input" | "true-false" | "matching";

interface MultipleChoiceOption {
  readonly id: string;
  readonly text: string;
  readonly isCorrect: boolean;
}

interface ProblemBase {
  id: number;
  question: string;
  type: QuestionType;
  explanation?: string;
}

interface MultipleChoiceProblem extends ProblemBase {
  type: "multiple-choice";
  options: readonly MultipleChoiceOption[];
}

interface InputProblem extends ProblemBase {
  type: "input";
  correctAnswer: string;
  hint?: string;
  acceptableAnswers?: readonly string[];
}

interface TrueFalseProblem extends ProblemBase {
  type: "true-false";
  correctAnswer: boolean;
  explanation: string;
}

interface MatchingProblem extends ProblemBase {
  type: "matching";
  pairs: readonly {
    readonly id: string;
    readonly left: string;
    readonly right: string;
  }[];
}

type Problem = MultipleChoiceProblem | InputProblem | TrueFalseProblem | MatchingProblem;

interface PracticeProblemsProps {
  problems: readonly Problem[];
}

export default function PracticeProblems({ problems }: PracticeProblemsProps) {
  return (
    <div className="space-y-8">
      {problems.map((problem, index) => (
        <ProblemItem key={problem.id} problem={problem} index={index} />
      ))}
    </div>
  );
}

interface ProblemItemProps {
  problem: Problem;
  index: number;
}

function ProblemItem({ problem, index }: ProblemItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{problem.question}</h3>
          
          {problem.type === "multiple-choice" && (
            <MultipleChoiceQuestion problem={problem as MultipleChoiceProblem} />
          )}
          
          {problem.type === "input" && (
            <InputQuestion problem={problem as InputProblem} />
          )}
          
          {problem.type === "true-false" && (
            <TrueFalseQuestion problem={problem as TrueFalseProblem} />
          )}
          
          {problem.type === "matching" && (
            <MatchingQuestion problem={problem as MatchingProblem} />
          )}
        </div>
      </div>
    </div>
  );
}

interface MultipleChoiceQuestionProps {
  problem: MultipleChoiceProblem;
}

function MultipleChoiceQuestion({ problem }: MultipleChoiceQuestionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const isCorrect = selectedId && problem.options.find(opt => opt.id === selectedId)?.isCorrect;

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {problem.options.map((option) => (
          <button
            key={option.id}
            onClick={() => {
              setSelectedId(option.id);
              setShowResult(true);
            }}
            className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${
              selectedId === option.id
                ? isCorrect
                  ? "border-green-500 bg-green-50"
                  : "border-red-500 bg-red-50"
                : "border-gray-300 hover:border-blue-400 bg-gray-50"
            }`}
          >
            <div className="flex items-center">
              <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                selectedId === option.id
                  ? isCorrect
                    ? "border-green-500 bg-green-500"
                    : "border-red-500 bg-red-500"
                  : "border-gray-400"
              }`}>
                {selectedId === option.id && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
              <span className="text-gray-900">{option.text}</span>
            </div>
          </button>
        ))}
      </div>

      {showResult && (
        <div className={`p-4 rounded-lg ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
          <p className={`font-semibold ${isCorrect ? "text-green-900" : "text-red-900"}`}>
            {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
          </p>
          {problem.explanation && (
            <p className={`text-sm mt-2 ${isCorrect ? "text-green-800" : "text-red-800"}`}>
              {problem.explanation}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

interface InputQuestionProps {
  problem: InputProblem;
}

function InputQuestion({ problem }: InputQuestionProps) {
  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const checkAnswer = () => {
    setShowResult(true);
  };

  const acceptableAnswers = [problem.correctAnswer, ...(problem.acceptableAnswers || [])];
  const isCorrect = acceptableAnswers.some(
    ans => ans.toLowerCase().trim() === userAnswer.toLowerCase().trim()
  );

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
          placeholder="Type your answer..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={checkAnswer}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
        >
          Check
        </button>
      </div>

      {problem.hint && !showResult && (
        <details className="cursor-pointer">
          <summary className="text-blue-600 hover:text-blue-700 font-medium">Show Hint</summary>
          <p className="mt-2 text-gray-700 text-sm">{problem.hint}</p>
        </details>
      )}

      {showResult && (
        <div className={`p-4 rounded-lg ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
          <p className={`font-semibold ${isCorrect ? "text-green-900" : "text-red-900"}`}>
            {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
          </p>
          <p className={`text-sm mt-2 ${isCorrect ? "text-green-800" : "text-red-800"}`}>
            {isCorrect ? "Great work!" : `Expected answer: ${problem.correctAnswer}`}
          </p>
          {problem.explanation && (
            <p className={`text-sm mt-2 ${isCorrect ? "text-green-800" : "text-red-800"}`}>
              {problem.explanation}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

interface TrueFalseQuestionProps {
  problem: TrueFalseProblem;
}

function TrueFalseQuestion({ problem }: TrueFalseQuestionProps) {
  const [selected, setSelected] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);

  const isCorrect = selected === problem.correctAnswer;

  const handleSelect = (value: boolean) => {
    setSelected(value);
    setShowResult(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <button
          onClick={() => handleSelect(true)}
          className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
            selected === true
              ? isCorrect
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          }`}
        >
          True
        </button>
        <button
          onClick={() => handleSelect(false)}
          className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
            selected === false
              ? isCorrect
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          }`}
        >
          False
        </button>
      </div>

      {showResult && (
        <div className={`p-4 rounded-lg ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
          <p className={`font-semibold ${isCorrect ? "text-green-900" : "text-red-900"}`}>
            {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
          </p>
          <p className={`text-sm mt-2 ${isCorrect ? "text-green-800" : "text-red-800"}`}>
            {problem.explanation}
          </p>
        </div>
      )}
    </div>
  );
}

interface MatchingQuestionProps {
  problem: MatchingProblem;
}

function MatchingQuestion({ problem }: MatchingQuestionProps) {
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleMatch = (leftId: string, rightId: string) => {
    setMatches(prev => ({
      ...prev,
      [leftId]: rightId
    }));
  };

  const checkMatches = () => {
    setShowResult(true);
  };

  const correctMatches = problem.pairs.filter(
    pair => matches[pair.id] === pair.id
  ).length;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Column A</h4>
          <div className="space-y-2">
            {problem.pairs.map(pair => (
              <div key={pair.id} className="p-3 bg-gray-100 rounded text-gray-900">
                {pair.left}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Column B</h4>
          <div className="space-y-2">
            {problem.pairs.map(pair => (
              <button
                key={pair.id}
                onClick={() => handleMatch(pair.id, pair.id)}
                className={`w-full p-3 rounded text-left transition-colors ${
                  matches[pair.id] === pair.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-900 hover:bg-blue-100"
                }`}
              >
                {pair.right}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={checkMatches}
        className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
      >
        Check Matches
      </button>

      {showResult && (
        <div className={`p-4 rounded-lg ${correctMatches === problem.pairs.length ? "bg-green-50 border border-green-200" : "bg-yellow-50 border border-yellow-200"}`}>
          <p className={`font-semibold ${correctMatches === problem.pairs.length ? "text-green-900" : "text-yellow-900"}`}>
            {correctMatches === problem.pairs.length
              ? "✓ Perfect Match!"
              : `${correctMatches}/${problem.pairs.length} correct`}
          </p>
        </div>
      )}
    </div>
  );
}
