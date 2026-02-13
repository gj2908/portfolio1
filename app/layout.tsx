import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Chatbot } from "@/components/chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gaurang Jadoun | Electronics & Web Developer",
  description:
    "Portfolio of Gaurang Jadoun - Electronics and Communication Engineer specializing in IoT, Embedded Systems, and Web Development",
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col transition-colors duration-300">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Chatbot />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

