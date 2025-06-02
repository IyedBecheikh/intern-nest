"use client"


import { SearchBar } from "@/components/search-bar"

export const Header = () => {

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

      </div>
    </section>
  )
}
