"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { MobileSidebar } from "@/components/mobile-sidebar";
import Link from "next/link";

export const Navbar = () => {
  return (
   <div className="w-full z-50 flex justify-between
        items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
        <div className="flex items-center">
            <MobileSidebar/>
            <Link href="/" className="text-2xl font-bold text-primary">
                InternNest
            </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
            <a href="/explore" className="text-primary hover:text-primary/80">
               Explore
            </a>
            <a href="/login" className="text-primary hover:text-primary/80">
                Categories
            </a>
            <a href="/signup" className="text-primary hover:text-primary/80">
                Students
            </a>
            <a href="/signup" className="text-primary hover:text-primary/80">
                Post a Job
            </a>   
            <a href="/signup" className="text-primary hover:text-primary/80">
                Login
            </a>
            <ModeToggle />
        </div>
    </div>
  )
}
