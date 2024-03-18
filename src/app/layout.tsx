import "@/styles/globals.css";
import localFont from "next/font/local";

import { TRPCReactProvider } from "@/trpc/react";

const grtsk = localFont({
  src: [
    {
      path: "./fonts/grtsk-light.ttf",
      weight: "500",
    },
    {
      path: "./fonts/grtsk-tera.ttf",
      weight: "700",
    },
  ],
  variable: "--font-grtsk",
});

export const metadata = {
  title: "PRSHL",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={grtsk.className}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
