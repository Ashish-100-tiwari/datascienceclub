import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from '../context/store'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Data Science Club",
  description: "Data science Club for creating Data Scientist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>  
      </body>
    </html>
  );
}
