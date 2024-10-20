import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Tourigo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`font-inter bg-background showScrollbar`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
