import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return new Response("Hello World");
}
