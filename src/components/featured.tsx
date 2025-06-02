import { JobCard } from "./job-card"
import prismadb from "@/lib/prismadb"

export const Featured =  async () => {

  // Get 20 featured internships and jobs from the database prismadb
  const FeaturedInternships = await prismadb.job.findMany({
    orderBy: {
      postedAt: "desc"
    },
    take: 10
  });


  // Convert the data to Job type
  const jobs = FeaturedInternships.map(job => ({
    slug: job.slug,
    title: job.title,
    company: job.company,
    logoUrl: job.logoUrl || undefined,
    location: job.location,
    type: job.type,
    // Convert postedAt to a readable format
    postedAt: new Date(job.postedAt).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
    experience: job.experience,
    salary: job.salary || undefined,
    isRemote: job.isRemote || false,
    source: job.source || "InternNest",
    description: job.description,
    applyUrl: job.applyUrl,
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
