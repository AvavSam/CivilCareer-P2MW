import { Check, Book, Users, BookIcon, MessageSquare } from "lucide-react";

interface PaketProps {
  nama: string;
  harga: string;
  durasi: string;
  fitur: string[];
}

const PackageDetails = ({ paket }: { paket: PaketProps }) => {
  return (
    <div className="mb-8 max-w-3xl overflow-hidden rounded-lg bg-white shadow-md">
      <div className="rounded-t-lg bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
        <div className="items-center justify-between space-y-4 md:flex md:space-y-0">
          <div>
            <h2 className="text-3xl font-bold">{paket.nama}</h2>
            <p className="text-blue-100">
              Rp{paket.harga}/{paket.durasi}
            </p>
          </div>
          <div className="flex space-x-4">
            {paket.nama === "Quiz Plan" && (
              <div className="rounded-lg bg-white/10 p-3 text-center">
                <MessageSquare className="mx-auto mb-2 h-6 w-6 text-blue-100" />
                <p className="text-sm text-blue-100">Quiz</p>
              </div>
            )}
            {(paket.nama === "Basic Plan" || paket.nama === "Premium Plan") && (
              <>
                <div className="rounded-lg bg-white/10 p-3 text-center">
                  <MessageSquare className="mx-auto mb-2 h-6 w-6 text-blue-100" />
                  <p className="text-sm text-blue-100">Quiz</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3 text-center">
                  <Book className="mx-auto mb-2 h-6 w-6 text-blue-100" />
                  <p className="text-sm text-blue-100">Video</p>
                </div>
              </>
            )}
            {paket.nama === "Premium Plan" && (
              <div className="rounded-lg bg-white/10 p-3 text-center">
                <Users className="mx-auto mb-2 h-6 w-6 text-blue-100" />
                <p className="text-sm text-blue-100">Mentoring</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {paket.fitur.map((fitur, index) => (
            <li key={index} className="flex items-center rounded-lg p-2 transition-colors hover:bg-blue-50">
              <Check className="mr-3 h-5 w-5 text-blue-600" />
              <span>{fitur}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackageDetails;
