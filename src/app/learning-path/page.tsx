"use client"

import { Header } from '@/components/layout/Header/header';
import { Sidebar } from '@/components/layout/Sidebar';
import React, { useState } from 'react';
import { CheckCircle, Lock, BookOpen, Award, ArrowRight, FileQuestion, Clock, GraduationCap, BarChart2 } from 'lucide-react';
import Link from 'next/link';

// Sample learning path data for AutoCAD
const autocadLearningPath = [
  {
    id: 'module1',
    title: 'AutoCAD Fundamentals',
    description: 'Learn the basic principles and tools of AutoCAD for 2D drafting and design',
    status: 'completed',
    progress: 100,
    duration: '4 weeks',
    items: [
      {
        id: 'course1',
        type: 'course',
        title: 'Introduction to AutoCAD Interface',
        duration: '1 week',
        status: 'completed'
      },
      {
        id: 'ex1',
        type: 'exercise',
        title: 'Basic Drawing and Editing Commands',
        duration: '30 min',
        questions: 15,
        status: 'completed'
      },
      {
        id: 'project1',
        type: 'project',
        title: 'Create a Simple Floor Plan',
        duration: '2 days',
        status: 'completed'
      }
    ]
  },
  {
    id: 'module2',
    title: 'AutoCAD Intermediate Skills',
    description: 'Master essential AutoCAD tools for creating detailed technical drawings',
    status: 'in-progress',
    progress: 65,
    duration: '6 weeks',
    items: [
      {
        id: 'course2',
        type: 'course',
        title: 'Advanced Drawing Tools and Techniques',
        duration: '2 weeks',
        status: 'completed'
      },
      {
        id: 'ex2',
        type: 'exercise',
        title: 'Working with Layers and Properties',
        duration: '45 min',
        questions: 20,
        status: 'in-progress'
      },
      {
        id: 'project2',
        type: 'project',
        title: 'Detailed Architectural Blueprint',
        duration: '1 week',
        status: 'not-started'
      }
    ]
  },
  {
    id: 'module3',
    title: 'AutoCAD 3D Modeling',
    description: 'Transition from 2D to 3D modeling with AutoCAD',
    status: 'locked',
    progress: 0,
    duration: '5 weeks',
    items: [
      {
        id: 'course3',
        type: 'course',
        title: 'Introduction to 3D Modeling Concepts',
        duration: '2 weeks',
        status: 'locked'
      },
      {
        id: 'ex4',
        type: 'exercise',
        title: 'Creating 3D Solids and Surfaces',
        duration: '1 hour',
        questions: 15,
        status: 'locked'
      },
      {
        id: 'project3',
        type: 'project',
        title: 'Building 3D Architectural Model',
        duration: '1 week',
        status: 'locked'
      }
    ]
  },
  {
    id: 'module4',
    title: 'Advanced AutoCAD Applications',
    description: 'Specialized AutoCAD skills for professional applications',
    status: 'locked',
    progress: 0,
    duration: '8 weeks',
    items: [
      {
        id: 'course4',
        type: 'course',
        title: 'Parametric Design with AutoCAD',
        duration: '2 weeks',
        status: 'locked'
      },
      {
        id: 'ex5',
        type: 'exercise',
        title: 'Custom Blocks and Attributes',
        duration: '1.5 hours',
        questions: 25,
        status: 'locked'
      },
      {
        id: 'project4',
        type: 'project',
        title: 'Complete MEP System Design',
        duration: '2 weeks',
        status: 'locked'
      }
    ]
  },
  {
    id: 'module5',
    title: 'AutoCAD Specialization',
    description: 'Master specialized AutoCAD applications for your chosen field',
    status: 'locked',
    progress: 0,
    duration: '6 weeks',
    items: [
      {
        id: 'course5',
        type: 'course',
        title: 'AutoCAD for Mechanical Engineering',
        duration: '3 weeks',
        status: 'locked'
      },
      {
        id: 'ex6',
        type: 'exercise',
        title: 'Precision Mechanical Part Design',
        duration: '2 hours',
        questions: 30,
        status: 'locked'
      },
      {
        id: 'project5',
        type: 'project',
        title: 'Complete Machine Assembly Design',
        duration: '2 weeks',
        status: 'locked'
      }
    ]
  }
];

// Sample learning path data for RAB (Budget Planning)
const rabLearningPath = [
  {
    id: 'rab-module1',
    title: 'Budget Planning Fundamentals',
    description: 'Learn the basic principles of construction budget planning and estimation',
    status: 'in-progress',
    progress: 75,
    duration: '3 weeks',
    items: [
      {
        id: 'rab-course1',
        type: 'course',
        title: 'Introduction to Budget Estimation',
        duration: '1 week',
        status: 'completed'
      },
      {
        id: 'rab-ex1',
        type: 'exercise',
        title: 'Basic Material Cost Calculation',
        duration: '45 min',
        questions: 10,
        status: 'completed'
      },
      {
        id: 'rab-project1',
        type: 'project',
        title: 'Simple Residential Budget Plan',
        duration: '3 days',
        status: 'in-progress'
      }
    ]
  },
  {
    id: 'rab-module2',
    title: 'Advanced Budget Planning',
    description: 'Master detailed budget planning for complex construction projects',
    status: 'locked',
    progress: 0,
    duration: '5 weeks',
    items: [
      {
        id: 'rab-course2',
        type: 'course',
        title: 'Comprehensive Cost Analysis',
        duration: '2 weeks',
        status: 'locked'
      },
      {
        id: 'rab-ex2',
        type: 'exercise',
        title: 'Labor Cost Estimation',
        duration: '1 hour',
        questions: 15,
        status: 'locked'
      },
      {
        id: 'rab-project2',
        type: 'project',
        title: 'Commercial Building Budget',
        duration: '1 week',
        status: 'locked'
      }
    ]
  },
  {
    id: 'rab-module3',
    title: 'Project Budget Management',
    description: 'Learn techniques for managing and controlling project budgets over time',
    status: 'locked',
    progress: 0,
    duration: '4 weeks',
    items: [
      {
        id: 'rab-course3',
        type: 'course',
        title: 'Budget Control and Monitoring',
        duration: '2 weeks',
        status: 'locked'
      },
      {
        id: 'rab-ex3',
        type: 'exercise',
        title: 'Cash Flow Forecasting',
        duration: '1 hour',
        questions: 12,
        status: 'locked'
      },
      {
        id: 'rab-project3',
        type: 'project',
        title: 'Infrastructure Project Budget Plan',
        duration: '1 week',
        status: 'locked'
      }
    ]
  }
];

// Sample learning path data for SAP2000
const sapLearningPath = [
  {
    id: 'sap-module1',
    title: 'SAP2000 Fundamentals',
    description: 'Learn the basic principles of structural analysis using SAP2000',
    status: 'not-started',
    progress: 0,
    duration: '5 weeks',
    items: [
      {
        id: 'sap-course1',
        type: 'course',
        title: 'Introduction to SAP2000 Interface',
        duration: '1 week',
        status: 'not-started'
      },
      {
        id: 'sap-ex1',
        type: 'exercise',
        title: 'Creating Simple Structural Models',
        duration: '1 hour',
        questions: 8,
        status: 'not-started'
      },
      {
        id: 'sap-project1',
        type: 'project',
        title: 'Basic Beam Analysis',
        duration: '1 week',
        status: 'not-started'
      }
    ]
  },
  {
    id: 'sap-module2',
    title: 'Intermediate Structural Analysis',
    description: 'Master essential SAP2000 tools for analyzing complex structures',
    status: 'locked',
    progress: 0,
    duration: '6 weeks',
    items: [
      {
        id: 'sap-course2',
        type: 'course',
        title: 'Advanced Modeling Techniques',
        duration: '2 weeks',
        status: 'locked'
      },
      {
        id: 'sap-ex2',
        type: 'exercise',
        title: 'Load Combinations and Analysis',
        duration: '1.5 hours',
        questions: 12,
        status: 'locked'
      },
      {
        id: 'sap-project2',
        type: 'project',
        title: 'Multi-Story Building Analysis',
        duration: '2 weeks',
        status: 'locked'
      }
    ]
  },
  {
    id: 'sap-module3',
    title: 'Advanced Structural Design',
    description: 'Apply SAP2000 for complex structural engineering challenges',
    status: 'locked',
    progress: 0,
    duration: '7 weeks',
    items: [
      {
        id: 'sap-course3',
        type: 'course',
        title: 'Dynamic Analysis and Seismic Design',
        duration: '3 weeks',
        status: 'locked'
      },
      {
        id: 'sap-ex3',
        type: 'exercise',
        title: 'Nonlinear Analysis Methods',
        duration: '2 hours',
        questions: 15,
        status: 'locked'
      },
      {
        id: 'sap-project3',
        type: 'project',
        title: 'Bridge Structure Analysis',
        duration: '2 weeks',
        status: 'locked'
      }
    ]
  }
];

// Map learning paths to their data
const learningPaths = {
  'autocad': {
    title: 'AutoCAD Learning Path',
    description: 'Master AutoCAD from beginner to professional level with this structured learning path.',
    data: autocadLearningPath,
    progress: 26,
    completedModules: 1,
    lockedModules: 3,
    certificationName: 'AutoCAD Professional Certification'
  },
  'rab': {
    title: 'Budget Planning (RAB) Learning Path',
    description: 'Master construction budget planning and estimation from basic to advanced techniques.',
    data: rabLearningPath,
    progress: 15,
    completedModules: 0,
    lockedModules: 2,
    certificationName: 'Construction Budget Planning Certification'
  },
  'sap2000': {
    title: 'SAP2000 Learning Path',
    description: 'Master structural analysis and design using SAP2000 software.',
    data: sapLearningPath,
    progress: 0,
    completedModules: 0,
    lockedModules: 2,
    certificationName: 'SAP2000 Structural Analysis Certification'
  }
};

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePath, setActivePath] = useState<string>('autocad');

  const selectedPath = learningPaths[activePath as keyof typeof learningPaths];
  const learningPathData = selectedPath.data;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <BarChart2 className="h-5 w-5 text-blue-500" />;
      case 'locked':
        return <Lock className="h-5 w-5 text-gray-400" />;
      default:
        return <BookOpen className="h-5 w-5 text-gray-400" />;
    }
  };

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'course':
        return <BookOpen className="h-4 w-4 text-blue-500" />;
      case 'exercise':
        return <FileQuestion className="h-4 w-4 text-yellow-500" />;
      case 'project':
        return <GraduationCap className="h-4 w-4 text-purple-500" />;
      default:
        return <BookOpen className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'not-started':
        return 'bg-gray-100 text-gray-800';
      case 'locked':
        return 'bg-gray-100 text-gray-400';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      <div className="flex-1 overflow-auto">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="container mx-auto p-4 pb-20">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{selectedPath.title}</h1>
            <p className="text-gray-600">
              {selectedPath.description} Follow each module to build your skills progressively.
            </p>
          </div>

          {/* Learning Path Selector */}
          <div className="mb-8 flex flex-wrap gap-3">
            {Object.entries(learningPaths).map(([key, path]) => (
              <button
                key={key}
                onClick={() => setActivePath(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activePath === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {key === 'autocad' ? 'AutoCAD' : key === 'rab' ? 'Budget Planning (RAB)' : 'SAP2000'}
              </button>
            ))}
          </div>

          {/* Learning Progress Overview */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Overall Progress</h2>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${selectedPath.progress}%` }}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{selectedPath.completedModules} {selectedPath.completedModules === 1 ? 'module' : 'modules'} completed</span>
              </div>
              <div>{selectedPath.progress}% Complete</div>
              <div className="flex items-center gap-1">
                <Lock className="h-4 w-4 text-gray-400" />
                <span>{selectedPath.lockedModules} {selectedPath.lockedModules === 1 ? 'module' : 'modules'} locked</span>
              </div>
            </div>
          </div>

          {/* Learning Path Modules */}
          <div className="relative">
            {/* Vertical line connecting modules */}
            <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gray-200 z-0 hidden md:block"></div>

            {learningPathData.map((module) => (
              <div key={module.id} className="mb-8 relative">
                {/* Module Container */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-blue-500">
                  <div className="p-6">
                    {/* Module Header */}
                    <div className="flex items-start gap-4">
                      <div className={`rounded-full p-2 ${module.status === 'locked' ? 'bg-gray-100' : 'bg-blue-100'} z-10`}>
                        {getStatusIcon(module.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h2 className="text-xl font-semibold">{module.title}</h2>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(module.status)}`}>
                            {module.status.charAt(0).toUpperCase() + module.status.slice(1).replace('-', ' ')}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-1">{module.description}</p>

                        {/* Progress bar */}
                        {module.status !== 'locked' && (
                          <div className="mt-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-medium">{module.progress}%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-blue-500"
                                style={{ width: `${module.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}

                        {/* Module Info */}
                        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{module.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            <span>{module.items.length} activities</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Module Items */}
                    <div className="mt-6 pl-11">
                      <ul className="space-y-3">
                        {module.items.map((item) => (
                          <li key={item.id} className="flex items-start">
                            <div className="mr-3 mt-0.5">
                              {getItemIcon(item.type)}
                            </div>
                            <div className="flex-1 border-b border-gray-100 pb-3">
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-gray-900">{item.title}</span>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(item.status)}`}>
                                  {item.status === 'locked' ? 'Locked' : item.status === 'completed' ? 'Completed' : item.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                                </span>
                              </div>
                              <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                                <span>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
                                <span>{item.duration}</span>
                                {item.questions && <span>{item.questions} questions</span>}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Module Action Button */}
                    {module.status !== 'locked' && (
                      <div className="mt-6 pl-11">
                        <Link
                          href={module.status === 'completed' ? `/modules/${module.id}/review` : `/modules/${module.id}/continue`}
                          className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${module.status === 'completed'
                              ? 'bg-green-50 text-green-700 hover:bg-green-100'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                        >
                          {module.status === 'completed' ? 'Review Module' : module.status === 'not-started' ? 'Start Learning' : 'Continue Learning'}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Certificate Completion Node */}
            <div className="relative flex items-center justify-center">
              <div className="absolute left-6 top-1/2 w-3 h-3 rounded-full bg-gray-300 z-10 hidden md:block"></div>
              <div className="ml-14 md:ml-20 bg-white rounded-lg p-6 shadow-md border border-dashed border-gray-300 w-full md:w-3/4">
                <div className="flex items-center gap-4">
                  <Award className="h-12 w-12 text-blue-400" />
                  <div>
                    <h3 className="text-lg font-semibold">{selectedPath.certificationName}</h3>
                    <p className="text-gray-600">Complete all modules to earn your {selectedPath.certificationName}</p>
                    <div className="mt-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">{selectedPath.progress}% Progress</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
