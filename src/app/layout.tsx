import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'VisionCare Mentorship',
  description: 'A premium medical mentorship platform with a Vision Pro aesthetic.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head />
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
