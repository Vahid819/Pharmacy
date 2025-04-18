import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          cz-shortcut-listen="true"
          data-new-gr-c-s-check-loaded="14.1231.0"
          data-gr-ext-installed=""
        >
          <h1>Hello world</h1>
          {children}
        </body>
      </html>
    </ClerkProvider> 
  );
}
