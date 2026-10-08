import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Peculiar Dizynz",
    template: "Peculiar Dizynz",
  },
  description:
    "Where Creativity Meets Strategy",
  keywords: [
    "Peculiar Dizynz",
    "Web Development",
    "Digital Marketing",
    "Web Design",
    "NXAE NFT Verification",
    "Prediction Markets",
    "Web3 Community Tools",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LayoutWrapper>{children}</LayoutWrapper>
          <Toaster
            position="top-right"
            toastOptions={{
              classNames: {
                toast: 'border-2 border-[#471700]',
                success: '!bg-[#471700] !text-white !border-[#471700]',
                error: '!bg-red-600 !text-white !border-red-600',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}