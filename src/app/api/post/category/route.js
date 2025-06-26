// /api/post/category

// endpoint untuk ambil post dari kategori tertentu

import { supabase } from "@/libs/supabase";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { apikey, category, status } = body;

    if (apikey != process.env.NEXT_PUBLIC_APIKEY) {
      return NextResponse.json({
        message: "gagal mengambil data, api key salah",
      });
    }

    let query = supabase
      .from("komodo_news")
      .select("*")
      .eq("category", category);

    if (status) {
      query = query.eq("status", status);
    }

    const response = await query;

    const articles = response.data;

    return NextResponse.json({
      message: "pengambilan post berhasil",
      data: articles,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch or insert news." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
