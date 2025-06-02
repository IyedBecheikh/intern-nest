"use client"

import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowDown } from "lucide-react"

const experienceOptions = ["Internship", "Entry", "Junior", "Mid", "Senior", "Lead", "Executive"]

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [experienceFilter, setExperienceFilter] = useState<string | null>(null)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (query.trim()) params.set("search", query)
    if (experienceFilter) params.set("experience", experienceFilter)

    router.push(`/explore?${params.toString()}`)
  }
  

  return (
    <form onSubmit={handleSearch} className="flex gap-2 items-center flex-wrap w-full justify-center mt-6">
      <Input
        type="search"
        placeholder="Search for internships or jobs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/3"
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="border border-gray-300 rounded-md px-4 py-2 flex items-center text-sm"
          >
            {experienceFilter || "Experience"}
            <ArrowDown className="h-4 w-4 ml-2" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {experienceOptions.map((level) => (
            <DropdownMenuItem key={level} onSelect={() => setExperienceFilter(level)}>
              {level}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 text-sm"
      >
        Search
      </button>
    </form>
  )
}
