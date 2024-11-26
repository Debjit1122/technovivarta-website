import "@/styles/globals.css"
import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import GoogleAnalytics from "@/components/GoogleAnalytics"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "bg-background min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id= 
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
          <ThemeProvider attribute="class" forcedTheme="dark">
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">
                {children}
              </div>
              <footer className="bg-background">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                  {/* Footer Logo */}
                  <div className="mb-4 w-full md:mb-0 md:w-1/4">
                    <Link href="#" className="flex items-center text-2xl font-semibold transition duration-300">
                      <Image src="/logo.png" width={80} height={80} alt="Techno Vivarta" />
                      <Image src="/TIU SOF.png" width={250} height={200} alt="Techno Vivarta" />
                      <Image src="/Takshila White.png" width={90} height={90} alt="Techno Vivarta" />

                    </Link>
                  </div>
                  {/* Footer Links */}
                  <div className="w-full text-center md:w-1/2 md:text-left">
                    <ul className="flex justify-center gap-5">
                      <li><a href="#" className=" transition duration-300">Terms</a></li>
                      <li><a href="#" className=" transition duration-300">Privacy </a></li>

                      <li><a href="#" className=" transition duration-300">Sitemap</a></li>

                    </ul>
                  </div>
                  {/* Social Media Icons */}
                  <div className="mt-4 flex w-full justify-center md:mt-0 md:w-1/4 md:justify-end">
                    <a href="https://www.facebook.com/technovivarta/" className="mx-2  transition duration-300"><FaFacebook size={25} /></a>
                    <a href="https://instagram.com/technovivarta" className="mx-2  transition duration-300"><FaInstagram size={25} /></a>
                    <a href="https://www.linkedin.com/company/technovivarta/" className="mx-2  transition duration-300"><FaLinkedin size={25} /></a>
                    <a href="https://discord.gg/VcSm7cYTJh" className="mx-2  transition duration-300"><FaDiscord size={25} /></a>
                  </div>
                </div>
                {/* Copyright Information */}
                <div className="mb-4 mt-8 text-center">
                  <p className="">© 2023 Techno Vivarta. All rights reserved.</p>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
