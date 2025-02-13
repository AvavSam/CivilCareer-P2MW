import { Building2, CreditCard, Wallet, ChevronRight } from "lucide-react";

interface PaymentMethodsProps {
  price: number;
}

const PaymentMethods = ({ price }: PaymentMethodsProps) => {
  const checkoutHandler = async () => {
    const response = await fetch("/api/v1/getTokenPayment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    });
    const result = await response.json();
    window.snap.pay(result.token);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <div className="border-b bg-blue-50 p-6">
          <h3 className="text-xl font-semibold">Pilih Metode Pembayaran</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <button className="flex w-full items-center justify-between rounded-lg border p-4 transition-all hover:border-blue-600 hover:bg-blue-50">
              <div className="flex items-center">
                <Building2 className="mr-3 h-6 w-6 text-blue-600" />
                <div className="text-left">
                  <div className="font-semibold">Transfer Bank</div>
                  <div className="text-sm text-gray-600">BCA, Mandiri, BNI, BRI</div>
                </div>
              </div>
              <ChevronRight className="h-4 w-4" />
            </button>
            <button className="flex w-full items-center justify-between rounded-lg border p-4 transition-all hover:border-blue-600 hover:bg-blue-50">
              <div className="flex items-center">
                <CreditCard className="mr-3 h-6 w-6 text-blue-600" />
                <div className="text-left">
                  <div className="font-semibold">Kartu Kredit</div>
                  <div className="text-sm text-gray-600">Visa, Mastercard, JCB</div>
                </div>
              </div>
              <ChevronRight className="h-4 w-4" />
            </button>
            <button className="flex w-full items-center justify-between rounded-lg border p-4 transition-all hover:border-blue-600 hover:bg-blue-50">
              <div className="flex items-center">
                <Wallet className="mr-3 h-6 w-6 text-blue-600" />
                <div className="text-left">
                  <div className="font-semibold">E-Wallet</div>
                  <div className="text-sm text-gray-600">GoPay, OVO, DANA, LinkAja</div>
                </div>
              </div>
              <ChevronRight className="h-4 w-4" />
            </button>
            <hr className="my-4" />
            <button
              onClick={checkoutHandler}
              className="w-full rounded-lg bg-blue-600 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Lanjutkan Pembayaran
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
