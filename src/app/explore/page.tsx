import { JobCard } from "@/components/job-card"
import prismadb from "@/lib/prismadb"
import { SearchBar } from "@/components/search-bar"

interface ExplorePageProps {
  searchParams: {
    search?: string
    experience?: string
  }
}

export default async function ExplorePage({ searchParams }: ExplorePageProps) {
  const search = searchParams.search?.toLowerCase() || ""
  const experience = searchParams.experience


  const filteredJobs = await prismadb.job.findMany({
    where: {
      AND: [
        experience
          ? {
            experience: {
              equals: experience,
              mode: "insensitive"
            }
          }
          : {},
        search
          ? {
            OR: [
              { title: { contains: search, mode: "insensitive" } },
              { company: { contains: search, mode: "insensitive" } },
              { location: { contains: search, mode: "insensitive" } },
              { description: { contains: search, mode: "insensitive" } }
            ]
          }
          : {}
      ]
    },
    orderBy: {
      postedAt: "desc"
    }
  })

  const jobs = filteredJobs.map(job => ({
    slug: job.slug,
    title: job.title,
    company: job.company,
    logoUrl: job.logoUrl  || undefined,
    location: job.location,
    type: job.type,
    postedAt: new Date(job.postedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }),
    experience: job.experience,
    salary: job.salary  || undefined,
    isRemote: job.isRemote || false,
    source: job.source || "InternNest",
    description: job.description,
    applyUrl: job.applyUrl,
  }))


  return (
    <div className="bg-secondary p-8 rounded-xl w-4/5 mx-auto">
      <SearchBar/>

      <h1 className="text-2xl font-bold mb-4 mt-6">
        {search ? `Search results for "${search}"` : experience ? `Jobs for ${experience} level` : "All Jobs and Internships"}
      </h1>

      {jobs.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          No jobs found matching your search.
        </p>
      ) : (
        <section className="container py-8 grid gap-6">
          {jobs.map(job => (
            <JobCard key={job.slug} job={job} />
          ))}
        </section>
      )}
    </div>
  )
}