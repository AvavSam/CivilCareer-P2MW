import React from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface ExerciseQuestionProps {
  question: Question;
  questionIndex: number;
  selectedAnswer: number | null;
  onSelectAnswer: (questionIndex: number, answerIndex: number) => void;
  showResult: boolean;
}

export const ExerciseQuestion: React.FC<ExerciseQuestionProps> = ({
  question,
  questionIndex,
  selectedAnswer,
  onSelectAnswer,
  showResult
}) => {
  return (
    <div className="mb-8 pb-6 border-b border-gray-200 last:border-0">
      <h3 className="text-lg font-medium mb-4">
        Question {questionIndex + 1}: {question.text}
      </h3>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = question.correctAnswer === index;
          const isIncorrect = showResult && isSelected && !isCorrect;

          return (
            <div
              key={index}
              className={`p-3 rounded-lg border cursor-pointer transition-colors ${isSelected
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50'
                } ${showResult && isCorrect ? 'border-green-400 bg-green-50' : ''
                } ${isIncorrect ? 'border-red-400 bg-red-50' : ''
                }`}
              onClick={() => !showResult && onSelectAnswer(questionIndex, index)}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    } ${showResult && isCorrect ? 'bg-green-500 text-white' : ''
                    } ${isIncorrect ? 'bg-red-500 text-white' : ''
                    }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">{option}</p>
                </div>
                {showResult && isCorrect && <CheckCircle className="h-5 w-5 text-green-500 ml-2" />}
                {isIncorrect && <XCircle className="h-5 w-5 text-red-500 ml-2" />}
              </div>
            </div>
          )
        })}
      </div>

      {showResult && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm font-medium mb-1">Explanation:</p>
          <p className="text-sm text-gray-700">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};
