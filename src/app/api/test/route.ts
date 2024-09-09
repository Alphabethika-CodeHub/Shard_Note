import { NextResponse } from "next/server";

export async function GET() {
  console.log(process.env.NEXT_PUBLIC_TEST_ENV);

  return NextResponse.json({
    status: 200,
    message: "Success",
  });
}
