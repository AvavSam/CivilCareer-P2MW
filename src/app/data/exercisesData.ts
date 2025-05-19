export interface Exercise {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  completionRate: number;
  questions: number;
  imageUrl?: string;
}

export const exercisesData: Exercise[] = [
  {
    id: "ex1",
    title: "Structural Analysis Basics",
    description: "Learn the fundamentals of structural analysis for civil engineering projects",
    category: "structural",
    difficulty: "beginner",
    estimatedTime: "30 min",
    completionRate: 0,
    questions: 15,
    imageUrl: "/images/structural.jpg"
  },
  {
    id: "ex2",
    title: "Soil Mechanics Problem Set",
    description: "Practice problems related to soil properties and foundation design",
    category: "geotechnical",
    difficulty: "intermediate",
    estimatedTime: "45 min",
    completionRate: 0,
    questions: 20,
    imageUrl: "/images/soil.jpg"
  },
  {
    id: "ex3",
    title: "Water Resources Management",
    description: "Exercises on water resource planning, hydraulics, and hydrology",
    category: "water",
    difficulty: "intermediate",
    estimatedTime: "1 hour",
    completionRate: 0,
    questions: 25,
    imageUrl: "/images/water.jpg"
  },
  {
    id: "ex4",
    title: "Advanced Structural Design",
    description: "Complex problems in structural design including earthquake resistance",
    category: "structural",
    difficulty: "advanced",
    estimatedTime: "1.5 hours",
    completionRate: 0,
    questions: 30,
    imageUrl: "/images/advanced-structural.jpg"
  },
  {
    id: "ex5",
    title: "Transportation Engineering Basics",
    description: "Fundamentals of transportation planning and traffic flow analysis",
    category: "transportation",
    difficulty: "beginner",
    estimatedTime: "40 min",
    completionRate: 0,
    questions: 18,
    imageUrl: "/images/transportation.jpg"
  }
];
