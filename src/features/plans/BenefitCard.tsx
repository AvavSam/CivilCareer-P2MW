import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center">
          <Icon className="h-12 w-12 text-blue-600" />
        </div>
        <h3 className="mb-2 font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
