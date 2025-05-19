"use client"

import { Header } from '@/components/layout/Header/header';
import { Sidebar } from '@/components/layout/Sidebar'
import { ExerciseList } from '@/components/exercises/ExerciseList';
import { CategoryFilter } from '@/components/exercises/CategoryFilter';
import { exercisesData } from '@/app/data/exercisesData';
import React, { useState } from 'react'

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(exercisesData.map(item => item.category))];
  const filteredExercises = selectedCategory === 'all'
    ? exercisesData
    : exercisesData.filter(exercise => exercise.category === selectedCategory);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
      <div className="flex-1 overflow-auto">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Engineering Exercises</h1>
          <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
          <ExerciseList exercises={filteredExercises} />
        </main>
      </div>
    </div>
  )
}
  
 
  
 
  
 
  
 
