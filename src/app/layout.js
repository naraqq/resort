import "./styles/globals.css";
import "./styles/parallax.scss";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Үүрэг нуур ресорт",
  description: "Үүрэг нуур ресортын албан ёсны цахим хуудас",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth hover:scroll-auto" lang="mn">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}
