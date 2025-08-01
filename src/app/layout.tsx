import Header from "@/components/layout/Header"
import "@/styles/globals.css"
import { Metadata } from "next"
import { poppins, robotoFlex, lexend } from "@/lib/fonts"

export const metadata: Metadata = {
  title: "Haswanth Tamil",
  description: "Full Stack Developer",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${poppins.variable} ${robotoFlex.variable} ${lexend.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
