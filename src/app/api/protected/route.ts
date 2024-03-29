import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!isAuthenticated()) {
    return new Response("Unauthorized", { status: 401 });
  }
  const user = getUser();
  const data = { message: "Hello User", user: user };

  return NextResponse.json({data});
}