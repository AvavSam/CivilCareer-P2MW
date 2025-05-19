"use client"

import { useState } from 'react';
import { Header } from '@/components/layout/Header/header';
import { Sidebar } from '@/components/layout/Sidebar';
import { ArrowLeft, Star, Calendar, Clock, Users, Award, BookOpen, CheckCircle, MessageSquare, MapPin, Globe, ThumbsUp, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Sample detailed mentor data (in a real app, you'd fetch this based on the ID)
const mentorData = {
  id: 1,
  name: "Dr. Budi Santoso",
  avatar: "https://i.pravatar.cc/300?img=1",
  title: "AutoCAD Specialist",
  specializations: ["autocad", "3d-modeling", "architecture"],
  experience: "12 years",
  rating: 4.9,
  reviewCount: 127,
  sessionsCompleted: 342,
  hourlyRate: 1250000,
  availability: "Mon-Fri, 9am-5pm",
  location: "Jakarta",
  languages: ["Indonesian", "English"],
  biography: `I'm an AutoCAD specialist with over 12 years of experience in architectural design and 3D modeling. I hold a Ph.D. in Architectural Engineering and have taught AutoCAD at university level for 8 years.

My expertise includes architectural drafting, 3D modeling, rendering, and customizing AutoCAD for specific project needs. I've worked on various projects ranging from residential buildings to large commercial complexes.

I enjoy helping students and professionals improve their AutoCAD skills, whether you're just getting started or looking to master advanced techniques. My teaching approach is practical and focused on real-world applications.`,
  expertise: [
    "AutoCAD 2D and 3D drafting",
    "Architectural design",
    "Custom block creation",
    "AutoLISP programming",
    "3D modeling and rendering",
    "Drawing automation",
    "Project setup and standards"
  ],
  education: [
    {
      degree: "Ph.D. in Architectural Engineering",
      institution: "Universitas Indonesia",
      year: "2011"
    },
    {
      degree: "Master's in Architecture",
      institution: "Institut Teknologi Bandung",
      year: "2007"
    }
  ],
  certifications: [
    "Autodesk Certified Professional: AutoCAD",
    "Autodesk Certified Instructor",
    "BIM Level 2 Certified Professional"
  ],
  badges: ["Top Rated", "Certified Expert"],
  sessionTypes: [
    {
      type: "One-on-One Tutorial",
      description: "Personalized tutoring session focused on your specific learning needs",
      duration: "60 min",
      price: 1250000
    },
    {
      type: "Project Review",
      description: "Get expert feedback and suggestions on your AutoCAD project",
      duration: "45 min",
      price: 950000
    },
    {
      type: "Career Coaching",
      description: "Guidance on AutoCAD career paths, portfolio review, and industry advice",
      duration: "60 min",
      price: 1250000
    }
  ],
  reviews: [
    {
      id: 1,
      user: "Bambang S.",
      rating: 5,
      date: "2 weeks ago",
      content: "Dr. Santoso was incredibly helpful in teaching me advanced 3D modeling techniques. He was patient and explained concepts clearly. I learned more in one hour than in weeks of watching tutorials!"
    },
    {
      id: 2,
      user: "Siti W.",
      rating: 5,
      date: "1 month ago",
      content: "Excellent session! Dr. Santoso reviewed my architectural project and provided valuable feedback that greatly improved my design. His expertise is evident and I appreciated his attention to detail."
    },
    {
      id: 3,
      user: "Dimas L.",
      rating: 4,
      date: "2 months ago",
      content: "Very knowledgeable about AutoCAD. Helped me solve some complex issues with my project that I'd been stuck on for days. Would definitely book another session."
    }
  ],
  availableDates: [
    { date: "2023-10-15", slots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"] },
    { date: "2023-10-16", slots: ["10:00 AM", "1:00 PM", "3:00 PM"] },
    { date: "2023-10-17", slots: ["9:00 AM", "11:00 AM", "2:00 PM"] },
    { date: "2023-10-18", slots: ["11:00 AM", "2:00 PM", "4:00 PM"] },
    { date: "2023-10-19", slots: ["9:00 AM", "1:00 PM", "3:00 PM"] }
  ]
};

export default function MentorProfilePage() {
  const params = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedSessionType, setSelectedSessionType] = useState(mentorData.sessionTypes[0]);
  const [expandedSections, setExpandedSections] = useState({
    about: true,
    expertise: true,
    education: true,
    reviews: true,
  });

  // Format currency as IDR
  const formatIDR = (amount: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
  };

  // Toggle section expansion
  // Toggle section expansion
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  // Helper function to format dates
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Handle booking submission
  const handleBookSession = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both a date and time');
      return;
    }

    // In a real app, you would submit this booking to your backend
    console.log('Booking session with:', {
      mentorId: mentorData.id,
      sessionType: selectedSessionType.type,
      date: selectedDate,
      time: selectedTime,
      price: selectedSessionType.price
    });

    // Show success message or redirect to confirmation page
    alert('Session booked successfully!');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
      <div className="flex-1 overflow-auto">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="container mx-auto p-4 pb-12">
          <div className="mb-6">
            <Link href="/mentors" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Mentors
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content - Mentor profile */}
            <div className="lg:col-span-2 space-y-6">
              {/* Mentor header */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-blue-50">
                        <img src={mentorData.avatar} alt={mentorData.name} className="h-full w-full object-cover" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h1 className="text-2xl font-bold mb-1">{mentorData.name}</h1>
                      <div className="text-lg text-gray-700 mb-3">{mentorData.title}</div>

                      <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="font-medium">{mentorData.rating}</span>
                          <span className="text-gray-500 ml-1">({mentorData.reviewCount} reviews)</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{mentorData.sessionsCompleted} sessions</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{mentorData.experience} experience</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{mentorData.location}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {mentorData.badges.map((badge, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                            <Award className="h-3 w-3 mr-1" />
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About section */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">About</h2>
                    <button
                      onClick={() => toggleSection('about')}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {expandedSections.about ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </button>
                  </div>

                  {expandedSections.about && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">Languages: {mentorData.languages.join(', ')}</span>
                      </div>

                      <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                        {mentorData.biography}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Expertise section */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Expertise & Qualifications</h2>
                    <button
                      onClick={() => toggleSection('expertise')}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {expandedSections.expertise ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </button>
                  </div>

                  {expandedSections.expertise && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Areas of Expertise</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {mentorData.expertise.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2">Education</h3>
                        <ul className="space-y-3">
                          {mentorData.education.map((edu, index) => (
                            <li key={index} className="flex items-start">
                              <BookOpen className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="font-medium">{edu.degree}</div>
                                <div className="text-sm text-gray-600">{edu.institution}, {edu.year}</div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2">Certifications</h3>
                        <ul className="space-y-2">
                          {mentorData.certifications.map((cert, index) => (
                            <li key={index} className="flex items-start">
                              <Award className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{cert}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Reviews section */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Student Reviews</h2>
                    <button
                      onClick={() => toggleSection('reviews')}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {expandedSections.reviews ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </button>
                  </div>

                  {expandedSections.reviews && (
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="flex items-center mr-4">
                          <Star className="h-6 w-6 text-yellow-500 mr-1" />
                          <span className="text-2xl font-bold">{mentorData.rating}</span>
                        </div>
                        <div className="text-gray-600">
                          <span>Based on {mentorData.reviewCount} reviews</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {mentorData.reviews.map(review => (
                          <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                            <div className="flex justify-between items-center mb-2">
                              <div className="font-medium">{review.user}</div>
                              <div className="text-sm text-gray-500">{review.date}</div>
                            </div>
                            <div className="flex items-center mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'} mr-0.5`} />
                              ))}
                            </div>
                            <p className="text-gray-700">{review.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar - Booking panel */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Book a Session</h2>

                  {/* Session type selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Session Type</label>
                    <div className="space-y-2">
                      {mentorData.sessionTypes.map((session, index) => (
                        <div
                          key={index}
                          className={`border rounded-lg p-3 cursor-pointer transition-colors ${selectedSessionType.type === session.type
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:border-blue-200'
                            }`}
                          onClick={() => setSelectedSessionType(session)}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium">{session.type}</span>
                            <span className="font-bold text-blue-600">{formatIDR(session.price)}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{session.description}</span>
                            <span className="ml-2 text-gray-500">{session.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Date selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                    <div className="grid grid-cols-3 gap-2">
                      {mentorData.availableDates.map((dateObj, index) => (
                        <div
                          key={index}
                          className={`text-center border rounded-lg py-2 px-1 cursor-pointer transition-colors ${selectedDate === dateObj.date
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-blue-200'
                            }`}
                          onClick={() => {
                            setSelectedDate(dateObj.date);
                            setSelectedTime(null); // Reset time when date changes
                          }}
                        >
                          <div className="text-xs font-medium">{formatDate(dateObj.date)}</div>
                          <div className="text-xs text-gray-500 mt-1">{dateObj.slots.length} slots</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Time selection (only shown if a date is selected) */}
                  {selectedDate && (
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
                      <div className="grid grid-cols-3 gap-2">
                        {mentorData.availableDates
                          .find(dateObj => dateObj.date === selectedDate)?.slots
                          .map((time, index) => (
                            <div
                              key={index}
                              className={`text-center border rounded-lg py-2 cursor-pointer transition-colors ${selectedTime === time
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-300 hover:border-blue-200'
                                }`}
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Booking button */}
                  <button
                    onClick={handleBookSession}
                    disabled={!selectedDate || !selectedTime}
                    className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Book Session
                  </button>

                  <div className="mt-4 text-center text-sm text-gray-500">
                    You won't be charged until the session is confirmed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
