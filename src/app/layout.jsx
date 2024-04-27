import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";

import { Rubik } from 'next/font/google'

// Global font name
export const rubik = Rubik({
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={rubik.className}>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
