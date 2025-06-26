import { supabase } from "@/libs/supabase";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const body = await request.json();
  const { apikey, slug } = body;

  if (apikey != process.env.NEXT_PUBLIC_APIKEY) {
    return NextResponse.json({
      message: "gagal mengambil data, api key salah",
    });
  }
  try {
    const response = await supabase
      .from("komodo_tags")
      .select("*")
      .eq("slug", slug)
      .single();
    const tags = response.data;

    return NextResponse.json({ message: "berhasil", data: tags });
  } catch (error) {
    console.error("Fetch error:", error.message);
    return new NextResponse(JSON.stringify({ error: "terjadi erorr" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
