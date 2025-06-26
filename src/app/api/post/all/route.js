// /app/api/post/all

// endpoint fetch all post
import { supabase } from "@/libs/supabase";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { apikey } = body;

  if (apikey != process.env.NEXT_PUBLIC_APIKEY) {
    return NextResponse.json({
      message: "gagal mengambil data, api key salah",
    });
  }
  try {
    const response = await supabase.from("komodo_news").select("*");
    const articles = response.data;

    return NextResponse.json({ message: "berhasil", data: articles });
  } catch (error) {
    console.error("Fetch error:", error.message);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch or insert news." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
