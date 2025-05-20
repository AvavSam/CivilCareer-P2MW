"use client"

import { useState } from 'react';
import { Header } from '@/components/layout/Header/header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Search, Filter, Star, Clock, Calendar, Award } from 'lucide-react';
import Link from 'next/link';

// Sample mentor data
const mentors = [
  {
    id: 1,
    name: "Dr. Budi Santoso",
    avatar: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
    title: "AutoCAD Specialist",
    specializations: ["autocad", "3d-modeling", "architecture"],
    experience: "12 years",
    rating: 4.9,
    reviewCount: 127,
    sessionsCompleted: 342,
    hourlyRate: 1250000,
    availability: "Mon-Fri, 9am-5pm",
    description: "Expert AutoCAD instructor with over a decade of professional experience. Specializing in architectural design and 3D modeling. Certified AutoCAD Professional and university lecturer.",
    badges: ["Top Rated", "Certified Expert"],
    languages: ["Indonesian", "English"]
  },
  {
    id: 2,
    name: "Arief Widodo",
    avatar: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
    title: "Budget Planning Expert",
    specializations: ["rab", "cost-estimation", "project-management"],
    experience: "8 years",
    rating: 4.7,
    reviewCount: 93,
    sessionsCompleted: 215,
    hourlyRate: 1100000,
    availability: "Weekdays and evenings",
    description: "Construction cost specialist with experience in large-scale commercial and infrastructure projects. Expert in RAB methodologies and advanced budget forecasting techniques.",
    badges: ["Quick Responder"],
    languages: ["Indonesian", "English"]
  },
  {
    id: 3,
    name: "Dr. Rina Wulandari",
    avatar: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
    title: "Structural Analysis Expert",
    specializations: ["sap2000", "structural-engineering", "earthquake-analysis"],
    experience: "15 years",
    rating: 4.8,
    reviewCount: 156,
    sessionsCompleted: 278,
    hourlyRate: 1400000,
    availability: "Flexible hours, weekends available",
    description: "PhD in Structural Engineering with expertise in SAP2000 and advanced structural analysis. Specializes in seismic design and dynamic analysis of complex structures.",
    badges: ["Top Rated", "PhD Expert"],
    languages: ["Indonesian", "English"]
  },
  {
    id: 4,
    name: "Dewi Purnama",
    avatar: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
    title: "AutoCAD & Project Management",
    specializations: ["autocad", "project-management", "rab"],
    experience: "10 years",
    rating: 4.5,
    reviewCount: 87,
    sessionsCompleted: 194,
    hourlyRate: 950000,
    availability: "Weekdays, some weekends",
    description: "Multi-disciplinary expert with focus on integrating AutoCAD design with project management and budgeting. Excellent at explaining complex concepts to beginners.",
    badges: ["Beginner Friendly"],
    languages: ["Indonesian"]
  },
  {
    id: 5,
    name: "Prof. Ahmad Suryadi",
    avatar: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
    title: "SAP2000 & Structural Analysis",
    specializations: ["sap2000", "structural-engineering", "bridge-design"],
    experience: "18 years",
    rating: 4.9,
    reviewCount: 201,
    sessionsCompleted: 412,
    hourlyRate: 1500000,
    availability: "Limited availability - book early",
    description: "Leading expert in advanced structural analysis with SAP2000. Author of several technical publications on bridge design and dynamic analysis. Former university professor.",
    badges: ["Top Rated", "Industry Leader", "Published Author"],
    languages: ["Indonesian", "English"]
  }
];

// Sample specialization categories
const specializations = [
  { id: "all", name: "All Specializations" },
  { id: "autocad", name: "AutoCAD" },
  { id: "rab", name: "Budget Planning (RAB)" },
  { id: "sap2000", name: "SAP2000" },
  { id: "structural-engineering", name: "Structural Engineering" },
  { id: "3d-modeling", name: "3D Modeling" },
  { id: "project-management", name: "Project Management" }
];

export default function MentorsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSpecialization, setSelectedSpecialization] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000000]);

  // Function to format currency as IDR
  const formatIDR = (amount: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
  };

  // Filter mentors based on search, specialization, and price
  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = searchQuery === "" ||
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSpecialization = selectedSpecialization === "all" ||
      mentor.specializations.includes(selectedSpecialization);

    const matchesPrice = mentor.hourlyRate >= priceRange[0] && mentor.hourlyRate <= priceRange[1];

    return matchesSearch && matchesSpecialization && matchesPrice;
  });

  const getSpecializationBadgeColor = (specialization: string) => {
    switch (specialization) {
      case "autocad": return "bg-blue-100 text-blue-800";
      case "rab": return "bg-green-100 text-green-800";
      case "sap2000": return "bg-purple-100 text-purple-800";
      case "structural-engineering": return "bg-red-100 text-red-800";
      case "3d-modeling": return "bg-indigo-100 text-indigo-800";
      case "project-management": return "bg-amber-100 text-amber-800";
      case "cost-estimation": return "bg-emerald-100 text-emerald-800";
      case "earthquake-analysis": return "bg-rose-100 text-rose-800";
      case "bridge-design": return "bg-cyan-100 text-cyan-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
      <div className="flex-1 overflow-auto">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="container mx-auto p-4">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Find an Engineering Mentor</h1>
            <p className="text-gray-600">
              Book one-on-one sessions with industry experts to accelerate your learning and get personalized guidance.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filtering sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <h2 className="font-medium mb-3 flex items-center text-gray-700">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </h2>

                {/* Search input */}
                <div className="mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search mentors..."
                      className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                {/* Specialization filter */}
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2 text-gray-700">Specialization</h3>
                  <div className="space-y-1 max-h-48 overflow-auto pr-1">
                    {specializations.map(specialization => (
                      <button
                        key={specialization.id}
                        onClick={() => setSelectedSpecialization(specialization.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex justify-between items-center ${selectedSpecialization === specialization.id
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        <span>{specialization.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price range filter */}
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2 text-gray-700">Price Range (per hour)</h3>
                  <div className="px-1">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{formatIDR(priceRange[0])}</span>
                      <span>{formatIDR(priceRange[1])}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2000000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                {/* Availability filter */}
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2 text-gray-700">Availability</h3>
                  <div className="space-y-1">
                    {["Weekdays", "Weekends", "Evenings"].map(day => (
                      <div key={day} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`avail-${day}`}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`avail-${day}`} className="ml-2 text-sm text-gray-700">
                          {day}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear filters button */}
                <button
                  onClick={() => {
                    setSelectedSpecialization("all");
                    setSearchQuery("");
                    setPriceRange([0, 200]);
                  }}
                  className="w-full mt-2 px-4 py-2 text-sm text-blue-600 hover:text-blue-800 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Clear Filters
                </button>
              </div>

              {/* How it works section */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="font-medium mb-3 text-gray-700">How It Works</h2>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 font-medium">1</div>
                    <p>Browse profiles and find a mentor who matches your learning needs</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 font-medium">2</div>
                    <p>Book a session at a time that works for both of you</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 font-medium">3</div>
                    <p>Connect via video call and get personalized guidance</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 font-medium">4</div>
                    <p>Rate your experience and continue your learning journey</p>
                  </li>
                </ol>
              </div>
            </div>

            {/* Mentor cards */}
            {/* Mentor cards */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-600">Showing {filteredMentors.length} mentors</div>
                <select className="text-sm border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Sort by: Recommended</option>
                  <option>Highest rated</option>
                  <option>Most experienced</option>
                  <option>Price: Low to high</option>
                  <option>Price: High to low</option>
                </select>
              </div>

              {filteredMentors.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <p className="text-gray-600 mb-4">No mentors found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSelectedSpecialization("all");
                      setSearchQuery("");
                      setPriceRange([0, 2000000]);
                    }}
                    className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMentors.map(mentor => (
                    <Link
                      href={`/mentors/${mentor.id}`}
                      key={mentor.id}
                      className="group bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-all hover:shadow-lg"
                    >
                      {/* Mentor header */}
                      <div className="relative pt-6 px-6 pb-4 flex flex-col items-center border-b border-gray-100">
                        <div className="h-24 w-24 rounded-full overflow-hidden mb-3">
                          <img src={mentor.avatar} alt={mentor.name} className="h-full w-full object-cover" />
                        </div>
                        <h2 className="text-xl font-bold mb-1 group-hover:text-blue-600">{mentor.name}</h2>
                        <h3 className="text-base text-gray-700 mb-2">{mentor.title}</h3>

                        <div className="flex items-center mb-2">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="font-medium">{mentor.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({mentor.reviewCount} reviews)</span>
                        </div>

                        <div className="flex flex-wrap gap-1 justify-center">
                          {mentor.badges.map((badge, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                              <Award className="h-3 w-3 mr-1" />
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Mentor content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {mentor.specializations.slice(0, 3).map((spec, index) => (
                            <span key={index} className={`px-2 py-0.5 rounded-full text-xs font-medium ${getSpecializationBadgeColor(spec)}`}>
                              {spec.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </span>
                          ))}
                        </div>

                        <p className="text-gray-600 mb-4 text-sm flex-grow line-clamp-3">{mentor.description}</p>

                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4 mt-auto">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-gray-500" />
                            <span>{mentor.experience}</span>
                          </div>
                          <div className="font-bold text-blue-600">{formatIDR(mentor.hourlyRate)}/jam</div>
                        </div>

                        <div className="text-center">
                          <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            <Calendar className="h-4 w-4 mr-2" />
                            Book Session
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
