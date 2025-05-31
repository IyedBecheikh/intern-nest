"use client"

import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/explore?search=${encodeURIComponent(query)}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex w-1/3">
      <Input
        type="search"
        placeholder="Search for internships or jobs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2"
      />
    </form>
  )
}
