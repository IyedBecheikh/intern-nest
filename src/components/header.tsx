"use client"

import { ArrowDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SearchBar } from "@/components/search-bar"
import { useState } from "react"

export const Header = () => {
  const [locationFilter, setLocationFilter] = useState("Remote")

  return (
    <section className="py-18">
      <h1 className="text-4xl font-bold text-center">
        Find Your Next Remote Internship or Entry-Level Job
      </h1>
      <p className="text-center text-lg mt-4">
        Curated opportunities for students, new grads, and early-career developers and designers.
      </p>

      <div className="mt-8 flex justify-center gap-2 items-center" onSubmit={(e) => e.preventDefault()}>
        <SearchBar />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="border border-gray-300 rounded-md px-4 py-2 flex items-center text-sm">
              {locationFilter}
              <ArrowDown className="h-4 w-4 ml-2" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {["Remote", "On-Site", "Hybrid"].map(option => (
              <DropdownMenuItem key={option} onSelect={() => setLocationFilter(option)}>
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  )
}
