import { GenerateOrderID } from "@/libs/utils";
// import Midtrans from 'midtrans-client-typescript';
import { Snap } from "midtrans-client-typescript/dist/lib/snap";
import { NextResponse } from "next/server";

const snap = new Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY as string,
  clientKey: process.env.MIDTRANS_CLIENT_KEY as string,
});

export async function POST(req: Request) {
  const body = await req.json();
  const { price, planName } = body;

  const formattedPrice = Number(price.toString().replace(".", ""));

  const parameter = {
    transaction_details: {
      order_id: GenerateOrderID(),
      gross_amount: formattedPrice,
    },
    item_details: {
      price: formattedPrice,
      quantity: 1,
      name: planName,
    },
    customer_details: {
      first_name: "Dwi Candra",
      last_name: "Andika",
      email: "dwicandraandika4@gmail.com",
      phone: "+628123456789",
    }

  };

  const token = await snap.createTransactionToken(parameter);
  return NextResponse.json({ token });
}
