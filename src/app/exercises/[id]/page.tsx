"use client"

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header/header'
import { Sidebar } from '@/components/layout/Sidebar'
import { exercisesData } from '@/app/data/exercisesData'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Clock, FileQuestion, Award } from 'lucide-react'
import Link from 'next/link'
import { ExerciseQuestion } from '@/components/exercises/ExerciseQuestion'

// Sample questions for the exercise
const questions = [
  {
    id: 'q1',
    text: 'What is the primary function of a retaining wall?',
    options: [
      'To provide aesthetic appeal to landscapes',
      'To hold back soil that would otherwise move downslope',
      'To serve as a foundation for buildings',
      'To prevent water damage to structures'
    ],
    correctAnswer: 1,
    explanation: 'A retaining wall is a structure designed to restrain soil to a slope that it would not naturally keep to. The primary purpose is to hold back soil that would otherwise move downslope due to gravity.',
  }
]

export default function ExercisePage() {
  const params = useParams()
  const router = useRouter()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null))
  const [showResults, setShowResults] = useState(false)

  const exercise = exercisesData.find(ex => ex.id === params.id)

  if (!exercise) {
    return <div>Exercise not found</div>
  }

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[questionIndex] = answerIndex
    setAnswers(newAnswers)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const correctAnswers = answers.filter((answer, index) => answer === questions[index].correctAnswer).length

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
      <div className="flex-1 overflow-auto">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="container mx-auto p-4">
          <div className="mb-6">
            <Link href="/exercises" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Exercises
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              {exercise.imageUrl ? (
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${exercise.imageUrl})` }} />
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-200">
                  <span className="text-gray-400">No image</span>
                </div>
              )}
              <div className={`absolute top-4 right-4 ${getDifficultyColor(exercise.difficulty)} px-2 py-1 rounded-full text-xs font-medium`}>
                {exercise.difficulty}
              </div>
            </div>

            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2">{exercise.title}</h1>
              <p className="text-gray-600 mb-4">{exercise.description}</p>

              <div className="flex items-center text-sm text-gray-500 mb-6">
                <div className="flex items-center mr-6">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{exercise.estimatedTime}</span>
                </div>
                <div className="flex items-center">
                  <FileQuestion className="h-4 w-4 mr-1" />
                  <span>{exercise.questions} questions</span>
                </div>
              </div>

              {questions.map((question, index) => (
                <ExerciseQuestion
                  key={question.id}
                  question={question}
                  questionIndex={index}
                  selectedAnswer={answers[index]}
                  onSelectAnswer={handleAnswerSelect}
                  showResult={showResults}
                />
              ))}

              {!showResults ? (
                <button
                  onClick={handleSubmit}
                  className="mt-6 w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Answers
                </button>
              ) : (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    Results
                  </h2>
                  <p className="mt-2">You got {correctAnswers} out of {questions.length} correct.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
