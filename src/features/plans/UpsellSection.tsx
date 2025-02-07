const UpsellSection = () => {
  return (
    <div className="mx-auto mt-8 overflow-hidden rounded-lg border-2 border-blue-200 bg-white transition-shadow hover:shadow-lg">
      <div className="p-6">
        <div className="items-center justify-between space-y-4 md:flex md:space-y-0">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-blue-600">Upgrade ke Premium Plan</h3>
            <p className="text-gray-600">Dapatkan akses mentoring eksklusif dan fitur tambahan!</p>
          </div>
          <button
            className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 md:w-fit"
            onClick={() => (window.location.href = "Premium Plan")}
          >
            Upgrade Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpsellSection;
