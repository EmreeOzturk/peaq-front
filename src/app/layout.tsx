import type { Metadata } from "next";
import "./globals.css";
import Web3ModalProvider from "@/context/WagmiProvider";
import { cookieToInitialState } from "wagmi";
import { headers } from 'next/headers'
import { config } from "@/config/wagmiConfig";

export const metadata: Metadata = {
  title: "Obtain Your Peaq ID",
  description: "Obtain your Peaq ID to access the Peaq Network and its services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body>
        <Web3ModalProvider initialState={initialState}>{children}</Web3ModalProvider>
      </body>
    </html>
  );
}
