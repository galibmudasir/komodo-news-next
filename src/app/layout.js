import { Poppins } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/navigation";
import HeaderSection from "@/component/layout/header/header";
import FooterSection from "@/component/layout/footer/footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Komodo Magazine",
  description: "Berita Terhangat Terbaik yang bisa anda cari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} cz-shortcut-listen="true">
        <main>
          <HeaderSection />
          {children}
          <FooterSection />
        </main>
      </body>
    </html>
  );
}
