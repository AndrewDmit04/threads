import Bottombar from "@/components/shared/Bottombar"
import LeftSidebar from "@/components/shared/LeftSidebar"
import RightSidebar from "@/components/shared/RightSidebar"
import Topbar from "@/components/shared/Topbar"
import '../globals.css'

import { ClerkProvider } from "@clerk/nextjs"
import {Inter} from "next/font/google"
export const metadata ={
    title : "Threads",
    description : "A Next.js 13 Meta Threads Application"
}
const inter = Inter({subsets: ["latin"]})
export default function RootLayout({
    children
} : {
    children : React.ReactNode
}){
    return (
    <ClerkProvider>
        <html lang="en" suppressHydrationWarning={true}>
            <body className={`${inter.className} bg-dark-3`} >
                <Topbar/>
                <main>
                  <LeftSidebar/>
                  <section className="main-container">
                    <div className="w-full max-w-4xl">
                      {children}
                    </div>
                  </section>
                  <RightSidebar/>
                </main>

                <Bottombar/>
            </body>
        </html>
    </ClerkProvider>
    );
}