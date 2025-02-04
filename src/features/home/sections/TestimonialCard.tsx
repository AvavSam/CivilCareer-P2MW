import React from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, image, content }) => (
  <div className="rounded-xl bg-white p-6 shadow-lg">
    <div className="mb-4 flex items-center">
      <img src={image} alt={name} className="h-12 w-12 rounded-full object-cover" />
      <div className="ml-4">
        <h4 className="font-semibold text-black">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default TestimonialCard;
