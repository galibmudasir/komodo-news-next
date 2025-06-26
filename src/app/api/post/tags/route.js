import { supabase } from "@/libs/supabase";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { apikey, tags } = body;

    if (apikey != process.env.NEXT_PUBLIC_APIKEY) {
      return NextResponse.json({
        message: "gagal mengambil data, api key salah",
      });
    }

    const response = await supabase.rpc("search_news_by_tag", {
      tag_name: tags, // contoh: "keuangan"
    });

    const articles = response.data;

    return NextResponse.json({
      message: "pengambilan post berhasil",
      data: articles,
    });
  } catch (erorr) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch or insert news." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
