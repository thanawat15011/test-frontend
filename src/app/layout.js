"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from 'recoil';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <div className={inter.className}>
            {children}
          </div>
        </RecoilRoot>
      </body>
    </html>
  );
}
