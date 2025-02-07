import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "../utils/SessionProvider";
import Providers from "@/Providers";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NotesV2 Charged",
  description: "Create your notes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
         {/* Wrap children with AuthProvider */}
         <AuthProvider>
          <Providers>
          {children}
          </Providers>
         </AuthProvider>
       
      </body>
    </html>
  );
}
