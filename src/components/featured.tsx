import { JobCard } from "./job-card"
import prismadb from "@/lib/prismadb"

export const Featured =  async () => {

  // Get featured internships and jobs from the database prismadb
  const FeaturedInternships = await prismadb.job.findMany()


  // Convert the data to Job type
  const jobs = FeaturedInternships.map(job => ({
    slug: job.slug,
    title: job.title,
    company: job.company,
    logoUrl: job.logoUrl,
    location: job.location,
    type: job.type,
    // Convert postedAt to a readable format
    postedAt: new Date(job.postedAt).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
    experience: job.experience,
    salary: job.salary,
    isRemote: job.isRemote,
    tags: job.tags || [],
    source: job.source,
    description: job.description,
    requirements: job.requirements || []
  }));

  return (
    <div className="bg-secondary p-8 rounded-xl w-4/5 mx-auto">
        <h1 className="text-2xl font-bold mb-4">
            Featured Internships and Jobs
        </h1>

        <section className="container py-8 grid gap-6">
            {jobs.map((job) => (
                <JobCard key={job.slug} job={job} />
            ))}
            
        
    </section>
    </div>
  )
}
